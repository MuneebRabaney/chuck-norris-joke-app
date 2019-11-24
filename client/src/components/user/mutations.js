import gql from 'graphql-tag';

const CREATE_USER = gql`
  mutation createUser($inputs: UserNewDetailsInput!) {
    createUser(data: $inputs) {
      first_name
      last_name
      email
      password
    }
  }
`;

const LOGIN_USER = gql`
  mutation login($inputs: UserLoginInput!) {
    login(inputs: $inputs) {
      first_name
      last_name
      email
      password
    }
  }
`;

export { CREATE_USER, LOGIN_USER };
