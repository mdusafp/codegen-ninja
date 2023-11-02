/*
 * ----------------------------------------------------------------------------
 * IMPORTANT: THIS IS AN AUTO_GENERATED FILE. PLEASE DO NOT MODIFY IT DIRECTLY.
 * ----------------------------------------------------------------------------
 */

import * as Types from './base';
export * from './base';

export type GetTenBujinkansQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetTenBujinkansQuery = {
  __typename?: 'query_root';
  ninjas?: {
    __typename?: 'ninjas_query';
    Bujinkan: Array<{
      __typename?: 'Bujinkan';
      name: string;
      id: number;
      Lessons: Array<{
        __typename?: 'Lesson';
        id: number;
        subject: any;
        Sensei: { __typename?: 'Sensei'; id: number; name: string };
        PadowanToLessons: Array<{
          __typename?: 'PadowanToLesson';
          Padowan: { __typename?: 'Padowan'; id: number; name: string };
        }>;
      }>;
    }>;
  } | null;
};
