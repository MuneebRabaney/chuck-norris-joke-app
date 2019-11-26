import React, { useState, Fragment } from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { IS_LOGGED_IN } from './types/queries';
import { useApolloClient } from '@apollo/react-hooks';
// import { CategoryList } from '../joke';
import styled from 'styled-components';

const Footer = styled.footer`
  button {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
`;

function Dashboard({ location }) {
  const client = useApolloClient();
  const [state, setState] = useState({
    user: {
      isLoggedOut: false,
    },
  });

  const { isLoggedIn } = client.readQuery({ query: IS_LOGGED_IN });

  const handleLogoutUser = event => {
    const newState = Object.assign({}, state);
    newState.user.isLoggedOut = true;
    setState(newState);
    localStorage.removeItem('token');
    client.resetStore();
  };

  if (state.user.isLoggedOut) {
    return <Redirect to='/user/login' />;
  }

  if (isLoggedIn) {
    return (
      <Fragment>
        <h2>Hello #username </h2>
        <br />
        <Footer>
          <Button
            color='primary'
            variant='contained'
            onClick={handleLogoutUser}>
            Logout
          </Button>
        </Footer>
      </Fragment>
    );
  }

  return <Redirect to='/' />;
}

export default Dashboard;
