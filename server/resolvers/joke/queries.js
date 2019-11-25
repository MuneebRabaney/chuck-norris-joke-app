const queries = {
  jokeCategories: async (parent, { id }, { dataSources }) => {
    return dataSources.jokeApi.getJokeCategories();
  },
  randomJoke: async (parent, { category }, { dataSources }) => {
    return dataSources.jokeApi.getRandomJokesByCategory({
      category,
    });
  },
};

module.exports = queries;
