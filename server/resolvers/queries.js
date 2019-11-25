const Joke = require('./joke');
const User = require('./user');

const resolvers = {
  Query: {
    ...Joke.queries,
    ...User.queries,
  },
};

module.exports = resolvers;
