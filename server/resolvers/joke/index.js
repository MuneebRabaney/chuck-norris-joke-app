const resolvers = {
  jokeCategories: async (_source, { id }, { dataSources }) => {
    return dataSources.jokeApi.getJokeCategories();
  },
  randomJoke: async (_source, { category }, { dataSources }) => {
    return dataSources.jokeApi.getRandomJokesByCategory({
      category,
    });
  },
};

module.exports = resolvers;
