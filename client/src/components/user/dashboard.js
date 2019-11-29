import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Main } from '../layouts';
import { graphql } from 'react-apollo';
import { IS_LOGGED_IN } from '../user/types/queries';

function Dashboard({ location, isLoggedIn }) {
  if (!isLoggedIn) return <Redirect to='/user/login' />;

  return (
    <Main hasUserLogin={false}>
      <h2>Hello #username </h2>
      <Button
        color='primary'
        component={Link}
        variant='contained'
        to={{ pathname: '/jokes/categories' }}>
        Go to joke categories
      </Button>
    </Main>
  );
}

export default graphql(IS_LOGGED_IN, {
  props: ({ data: { loading, error, networkStatus, isLoggedIn } }) => {
    if (loading) return { loading };
    if (error) return { error };
    return {
      networkStatus,
      isLoggedIn,
    };
  },
})(Dashboard);
