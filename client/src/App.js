import React from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { AppRouter } from './routes/';
import { Main } from './components/layouts';

function App() {
  // Instantiate required constructor fields
  const cache = new InMemoryCache();
  const link = new HttpLink({
    uri: 'http://localhost:4000',
    headers: {
      authorization: localStorage.getItem('token'),
    },
  });
  const client = new ApolloClient({
    link,
    cache,
    connectToDevTools: true,
    name: 'react-web-client',
    version: '1.3',
    queryDeduplication: false,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });

  // Add default state
  cache.writeData({
    data: {
      isLoggedIn: !!localStorage.getItem('token'),
    },
  });

  return (
    <ApolloProvider client={client}>
      <Main>
        <AppRouter />
      </Main>
    </ApolloProvider>
  );
}

export default App;
