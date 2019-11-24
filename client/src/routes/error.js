import { Error } from '../components';

const route = [
  {
    url: ['*', '/404'],
    component: Error.PageNotFound,
    description: 'Error for page not found',
  },
];

export default route;
