import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';

const API_URL = '...'
const API_SECRET = '...'

export const createApolloClient = () => {
  const cache = new InMemoryCache({});
  const client = new ApolloClient({
    uri: API_URL,
    cache,
    headers: {
      'x-hasura-admin-secret': API_SECRET
    }
  });

  persistCache({
    cache,
    storage: new LocalStorageWrapper(window.localStorage),
  });

  return client
}