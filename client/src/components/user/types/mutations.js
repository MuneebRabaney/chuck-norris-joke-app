import gql from 'graphql-tag';

const CREATE_USER = gql`
  mutation createUser($inputs: UserNewDetailsInput!) {
    createUser(data: $inputs) {
      firstname
      lastname
      email
      password
    }
  }
`;

const LOGIN_USER = gql`
  mutation loginUser($inputs: UserLoginInput!) {
    loginUser(data: $inputs) {
      token
      user {
        firstname
        lastname
        email
        password
      }
    }
  }
`;

const USER_AUTHENTICATED = gql`
  mutation currentUser($inputs: ID!) {
    currentUser(data: $inputs) {
      token
      user {
        firstname
      }
    }
  }
`;

export { CREATE_USER, LOGIN_USER, USER_AUTHENTICATED };
