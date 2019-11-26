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

const ADD_TO_FAV = gql`
  mutation addJokeToFav($inputs: UserUpdateInput) {
    addJokeToFav(data: $inputs) {
      favroite_jokes
    }
  }
`;

const REMOVE_TO_FAV = gql`
  mutation removeJokeToFav($where: ID!) {
    removeJokeToFav(where: $) {
      favroite_jokes
    }
  }
`;

export {
  CREATE_USER,
  LOGIN_USER,
  USER_AUTHENTICATED,
  ADD_TO_FAV,
  REMOVE_TO_FAV,
};
