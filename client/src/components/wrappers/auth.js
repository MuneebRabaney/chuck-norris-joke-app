import { graphql } from 'react-apollo';
import { IS_LOGGED_IN } from '../user/types/queries';

const AuthWrapper = props => {
  console.log(props);
  return props.children;
};

export default graphql(IS_LOGGED_IN, {
  props: ({ data: { loading, error, networkStatus, isLoggedIn } }) => {
    if (loading) return { loading };
    if (error) return { error };
    return {
      networkStatus,
      isLoggedIn,
    };
  },
})(AuthWrapper);
