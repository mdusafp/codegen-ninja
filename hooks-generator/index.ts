import { generate } from '@graphql-codegen/cli';
import fs from 'fs';
import { join } from 'path';
import yaml from 'js-yaml';
import {
  baseTypesConfig,
  hooksConfig,
  operationsConfig,
  typesConfig,
} from './configs';

const currentDir = process.cwd();

type GraphqlConfigProject = {
  schema: string;
  documents: string;
};

type GraphqlConfig = {
  projects: {
    server: GraphqlConfigProject;
    client: GraphqlConfigProject;
  };
};

const PRETTIFY_CMD = 'pretty-quick';

async function generateHooks(
  documents: string,
  schema: string,
  prefix: string
) {
  await generate({
    documents,
    overwrite: true,
    schema,
    generates: {
      [join(prefix, 'base.ts')]: baseTypesConfig,
      [join(prefix, 'operations.ts')]: operationsConfig,
      [join(prefix, 'types.ts')]: typesConfig,
      [join(prefix, 'hooks.ts')]: hooksConfig,
    },
    hooks: {
      afterAllFileWrite: PRETTIFY_CMD,
    },
  });
}

async function main() {
  const config = yaml.load(
    fs.readFileSync(join(currentDir, '.graphqlrc.yml'), 'utf-8')
  ) as GraphqlConfig;

  await generateHooks(
    config.projects.server.documents,
    config.projects.server.schema,
    // TODO: move src/sdk -> src/shared/api
    join(currentDir, 'apps/frontend/src/api')
  );
}

main();
