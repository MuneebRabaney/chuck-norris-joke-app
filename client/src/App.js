import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import clientState from './store';
import { AppRouter } from './routes/';

function App() {
  const client = new ApolloClient({
    uri: process.env.REACT_APP_API_URL,
    name: 'react-web-client',
    version: '1.3',
    request: operation => {
      const token = localStorage.getItem('token');
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : '',
        },
      });
    },
    clientState,
    headers: {
      authorization: () => {
        const token = localStorage.getItem('token');
        return token ? `Bearer ${token}` : '';
      },
    },
  });

  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;
