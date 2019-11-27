import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import dancingChuckNorris from '../../images/danceing-chuck-norris.gif';
import { Link } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
import { IS_LOGGED_IN } from '../user/types/queries';
import { Button } from '@material-ui/core';

const Container = styled.div`
  width: 650px;
  min-height: 300px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  background: #ccc;
  text-align: center;
  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;

const Header = styled.h2`
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  position: relative;
  &:before {
    content: '';
    width: 80%;
    height: 2px;
    background: #000;
    display: block;
    margin: 0 auto 10px auto;
  }
`;

const DanceChuckDance = styled.div`
  display: inline-block;
  background-image: url(${dancingChuckNorris});
  background-repeat: no-repeat;
  height: 50px;
  width: 50px;
  top: 3px;
  position: relative;
`;

function Main({ children, hasUserLogin = true }) {
  const client = useApolloClient();
  let [{ isLoggedIn }, handleUser] = useState({
    ...client.readQuery({ query: IS_LOGGED_IN }),
  });

  const handleLogoutUser = event => {
    localStorage.removeItem('token');
    const data = { isLoggedIn: false };
    client.writeData({ data });
    handleUser({ isLoggedIn: false });
  };

  const renderUserLoginButton = (
    <Link to={{ pathname: '/user/login' }}>
      <span>User login</span>
    </Link>
  );

  const renderUserLogoutButton = (
    <Button onClick={handleLogoutUser}>
      <span>Logout</span>
    </Button>
  );

  const renderUserLoginControlls = (
    <Fragment>
      {!isLoggedIn ? renderUserLoginButton : renderUserLogoutButton}
    </Fragment>
  );

  return (
    <Container>
      <DanceChuckDance />
      <Header>Chuck Norris Jokes</Header>
      {hasUserLogin && renderUserLoginControlls}
      <br />
      <br />
      <div>{children}</div>
    </Container>
  );
}

export default Main;
