import { User } from '../components';

const route = [
  /**
   * @description [ Sign up a new user ]
   *
   * */
  {
    exact: true,
    url: '/user/signup',
    component: User.Signup,
  },

  /**
   * @description [ login a new user ]
   *
   * */
  {
    exact: true,
    url: '/user/login',
    component: User.Login,
  },

  /**
   * @description [ Joke categories marked as favorite ]
   *
   * */
  {
    exact: true,
    url: '/user/jokes/favorite/categories/',
    component: User.JokeFavoriteCategoryList,
  },

  /**
   * @description [ random joke in a category marked as favorite ]
   *
   * */
  {
    exact: true,
    url: '/user/jokes/favorite/categories/:category',
    component: User.JokeFavoriteSingleRandom,
  },
];

export default route;
