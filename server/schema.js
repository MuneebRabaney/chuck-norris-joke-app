const { gql } = require('apollo-server');

const typeDefs = gql`
  type Joke {
    id: ID!
    url: String
    value: String
    icon_url: String
    categories: [String!]
  }

  type User {
    id: ID!
    firstname: String
    lastname: String
    email: String
    password: String
    favroite_jokes: [String!]
  }

  type Query {
    jokeCategories: [String!]
    randomJoke(category: String): Joke
    isLoggedIn: UserAuthPayload
  }

  type Mutation {
    createUser(data: UserNewDetailsInput!): User
    loginUser(data: UserLoginInput!): UserAuthPayload
    currentUser(id: ID!): User
  }

  type UserAuthPayload {
    token: String!
    user: User!
  }

  input UserLoginInput {
    email: String!
    password: String!
  }

  input UserNewDetailsInput {
    firstname: String!
    lastname: String!
    email: String!
    password: String!
  }
`;

module.exports = typeDefs;
