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
    first_name: String
    last_name: String
    email: String
    password: String
    favroite_jokes: [String!]
  }

  type Query {
    jokeCategories: [String!]
    randomJoke(category: String): Joke
  }

  type Mutation {
    createUser(data: UserNewDetailsInput!): User
    login(inputs: UserLoginInput!): User
  }

  input UserLoginInput {
    email: String!
    password: String!
  }

  input UserNewDetailsInput {
    first_name: String!
    last_name: String!
    email: String!
    password: String!
  }
`;

module.exports = typeDefs;
