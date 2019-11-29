import gql from 'graphql-tag';

const UPDATE_IS_LOGGED_IN = gql`
  mutation updateIsLoggedIn($isLoggedIn: Boolean) {
    updateIsLoggedIn(isLoggedIn: $isLoggedIn) @client
  }
`;

export { UPDATE_IS_LOGGED_IN };
