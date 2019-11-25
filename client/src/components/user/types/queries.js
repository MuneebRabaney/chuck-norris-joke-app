import gql from 'graphql-tag';

// const IS_LOGGED_IN = gql`
//   query loginUser {
//     loginUser @client {
//       token
//       user {
//         id
//       }
//     }
//   }
// `;

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export { IS_LOGGED_IN };
