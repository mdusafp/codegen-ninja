import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

/*
 * ----------------------------------------------------------------------------
 * IMPORTANT: THIS IS AN AUTO_GENERATED FILE. PLEASE DO NOT MODIFY IT DIRECTLY.
 * ----------------------------------------------------------------------------
 */

import * as Types from './types';

const defaultOptions = {} as const;

export const GetTenBujinkansDocument = gql`
  query GetTenBujinkans {
    ninjas {
      Bujinkan(limit: 10) {
        name
        id
        Lessons {
          id
          subject
          Sensei {
            id
            name
          }
          PadowanToLessons {
            Padowan {
              id
              name
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetTenBujinkansQuery__
 *
 * To run a query within a React component, call `useGetTenBujinkansQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTenBujinkansQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTenBujinkansQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTenBujinkansQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetTenBujinkansQuery,
    Types.GetTenBujinkansQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    Types.GetTenBujinkansQuery,
    Types.GetTenBujinkansQueryVariables
  >(GetTenBujinkansDocument, options);
}
export function useGetTenBujinkansLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetTenBujinkansQuery,
    Types.GetTenBujinkansQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    Types.GetTenBujinkansQuery,
    Types.GetTenBujinkansQueryVariables
  >(GetTenBujinkansDocument, options);
}
export function useGetTenBujinkansSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    Types.GetTenBujinkansQuery,
    Types.GetTenBujinkansQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    Types.GetTenBujinkansQuery,
    Types.GetTenBujinkansQueryVariables
  >(GetTenBujinkansDocument, options);
}
export type GetTenBujinkansQueryHookResult = ReturnType<
  typeof useGetTenBujinkansQuery
>;
export type GetTenBujinkansLazyQueryHookResult = ReturnType<
  typeof useGetTenBujinkansLazyQuery
>;
export type GetTenBujinkansSuspenseQueryHookResult = ReturnType<
  typeof useGetTenBujinkansSuspenseQuery
>;
export type GetTenBujinkansQueryResult = Apollo.QueryResult<
  Types.GetTenBujinkansQuery,
  Types.GetTenBujinkansQueryVariables
>;
