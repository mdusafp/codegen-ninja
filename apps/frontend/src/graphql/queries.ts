import { gql } from '@apollo/client';

export const GET_LESSONS = gql`
  # Try out GraphQL queries here
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
