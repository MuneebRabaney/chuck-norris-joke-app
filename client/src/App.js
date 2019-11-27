import React from 'react';
// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';
// import { setContext } from 'apollo-link-context';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { AppRouter } from './routes/';

function App() {
  const initAuth = () => {
    const token = localStorage.getItem('token');
    return token ? `Bearer ${token}` : '';
  };
  const initialState = {
    isLoggedIn: !!localStorage.getItem('token'),
  };

  const client = new ApolloClient({
    uri: process.env.REACT_APP_API_URL,
    // connectToDevTools: true,
    name: 'react-web-client',
    version: '1.3',
    queryDeduplication: false,
    request: operation => {
      const token = localStorage.getItem('token');
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : '',
        },
      });
    },
    clientState: {
      defaults: {
        ...initialState,
      },
    },
    headers: {
      authorization: initAuth(),
    },
  });

  // Instantiate required constructor fields
  // const cache = new InMemoryCache();
  // const link = new HttpLink({
  //   uri: 'http://localhost:4000',
  //   headers: {
  //     authorization: localStorage.getItem('token'),
  //   },
  // });
  // const client = new ApolloClient({
  //   cache,
  //   link: authLink.concat(HttpLink),
  //   connectToDevTools: true,
  //   name: 'react-web-client',
  //   version: '1.3',
  //   queryDeduplication: false,
  //   defaultOptions: {
  //     watchQuery: {
  //       fetchPolicy: 'cache-and-network',
  //     },
  //   },
  // });

  // Add default state
  // cache.writeData({
  //   data: {
  //     isLoggedIn: !!localStorage.getItem('token'),
  //   },
  // });

  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;
