const User = require('./user');

const resolvers = {
  Mutation: {
    ...User.mutations,
  },
};

module.exports = resolvers;
