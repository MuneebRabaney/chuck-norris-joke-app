import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { AppRouter } from './routes/';
import { Main } from './components/layouts';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000',
    connectToDevTools: true,
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
