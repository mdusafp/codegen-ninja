import { readProjectConfiguration, Tree } from '@nx/devkit';
import { tsquery } from '@phenomnomnominal/tsquery';
import { TypeReferenceNode } from 'typescript';

/**
 * Run the callback on all files inside the specified path
 */
function visitAllFiles(
  tree: Tree,
  path: string,
  callback: (filePath: string) => void
) {
  tree.children(path).forEach((fileName) => {
    const filePath = `${path}/${fileName}`;
    if (!tree.isFile(filePath)) {
      visitAllFiles(tree, filePath, callback);
    } else {
      callback(filePath);
    }
  });
}

export default function (tree: Tree, schema: any) {
  const sourceRoot = readProjectConfiguration(tree, schema.name).sourceRoot!;
  visitAllFiles(tree, sourceRoot, (filePath) => {
    const fileEntry = tree.read(filePath);
    const contents = fileEntry?.toString();

    // Check each `TypeReference` node to see if we need to replace it
    const newContents = tsquery.replace(contents!, 'TypeReference', (node) => {
      const trNode = node as TypeReferenceNode;
      if (trNode.typeName.getText() === 'Array') {
        const typeArgument = trNode.typeArguments?.[0];
        return `${typeArgument?.getText()}[]`;
      }
      // return undefined does not replace anything
    });

    // only write the file if something has changed
    if (newContents !== contents) {
      tree.write(filePath, newContents);
    }
  });
}
