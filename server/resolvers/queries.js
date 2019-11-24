const JokeResolvers = require('./joke');

const resolvers = {
  Query: {
    ...JokeResolvers,
  },
};

module.exports = resolvers;
