const MutationResolvers = require('./mutations');
const QueryResolvers = require('./queries');

module.exports = {
  ...QueryResolvers,
  ...MutationResolvers,
};
