require('dotenv').config();
const jwt = require('jsonwebtoken');
const { ApolloServer } = require('apollo-server');
const JokeApi = require('./api/joke');
const resolvers = require('./resolvers');
const typeDefs = require('./schema');
const { prisma } = require('./generated/prisma-client');

const getUser = token => {
  try {
    if (token) {
      return jwt.verify(token, 'my-secret-from-env-file-in-prod');
    }
    return null;
  } catch (err) {
    return null;
  }
};

const server = new ApolloServer({
  resolvers,
  typeDefs,
  tracing: true,
  dataSources: () => {
    return {
      jokeApi: new JokeApi(),
    };
  },
  context: ({ req }) => {
    const tokenWithBearer = req.headers.authorization || '';
    const token = tokenWithBearer.split(' ')[1];
    const user = getUser(token);

    return {
      user,
      prisma, // the generated prisma client if you are using it
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
