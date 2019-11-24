require('dotenv').config();
const { RESTDataSource } = require('apollo-datasource-rest');

class JokeApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL;
  }

  async getJokeCategories() {
    const data = await this.get('jokes/categories');
    return data;
  }

  async getRandomJokesByCategory({ category = false }) {
    if (category) {
      const data = await this.get('jokes/random', { category });
      console.log(data);
      return data;
    }
    throw new Error('Invalid category name supplied.');
  }
}

module.exports = JokeApi;
