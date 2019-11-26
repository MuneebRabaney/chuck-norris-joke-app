import gql from 'graphql-tag';

const GET_JOKE_CATEGORIES = gql`
  query JokeCategories {
    jokeCategories
  }
`;

const GET_RANDOM_JOKE = gql`
  query JokeCategoryRandom($category: String) {
    randomJoke(category: $category) {
      id
      url
      value
      categories
    }
  }
`;

export { GET_JOKE_CATEGORIES, GET_RANDOM_JOKE };
