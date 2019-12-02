import { Joke } from '../components';

const route = [
  {
    exact: true,
    url: ['/', '/jokes/categories'],
    component: Joke.CategoryList,
    description: 'List of Chuck Norris joke categories',
  },
  {
    exact: true,
    expose: ['auth'],
    url: '/jokes/categories/:category',
    component: Joke.CategorySingleRandom,
    description: 'Random Chuck Norris joke in a selected category',
  },
];

export default route;
