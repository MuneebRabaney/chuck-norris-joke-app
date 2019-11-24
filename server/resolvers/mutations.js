const UserResolvers = require('./user');

const resolvers = {
  Mutation: {
    ...UserResolvers,
  },
};

module.exports = resolvers;
