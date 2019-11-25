import React, { useState, Fragment } from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { IS_LOGGED_IN } from './types/queries';
import { useApolloClient } from '@apollo/react-hooks';
import { CategoryList } from '../joke';
import styled from 'styled-components';

const Footer = styled.footer`
  button {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
`;

function Dashboard({ location }) {
  const [state, setState] = useState({
    user: {
      isLoggedOut: null,
    },
  });

  const client = useApolloClient();

  const { isLoggedIn } = client.readQuery({
    query: IS_LOGGED_IN,
  });

  const handleLogoutUser = event => {
    const { user } = Object.assign({}, state);
    user.isLoggedOut = true;
    setState({ ...state });
    localStorage.removeItem('token');
  };

  if (isLoggedIn) {
    return (
      <Fragment>
        <h2>Hello #username </h2>
        <br />
        <CategoryList />
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

  if (state.user.isLoggedOut) return <Redirect to='/user/login' />;
  // return <Redirect to='/' />;
}

export default Dashboard;
