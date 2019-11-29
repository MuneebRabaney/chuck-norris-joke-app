import React, { useState } from 'react';
import gql from 'graphql-tag';
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
  padding: 20px 20px 70px 20px;
  position: relative;
  background: #ccc;
  text-align: center;
  @media only screen and (max-width: 700px) {
    width: 80%;
    min-height: 450px;
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

const UserLogin = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
`;

const UPDATE_IS_LOGGED_IN = gql`
  mutation updateIsLoggedIn($isLoggedIn: Boolean) {
    updateIsLoggedIn(isLoggedIn: $isLoggedIn) @client
  }
`;

function Main({ children, hasUserLogin = true, redux }) {
  const client = useApolloClient();
  let [{ isLoggedIn }, handleUser] = useState({
    ...client.readQuery({ query: IS_LOGGED_IN }),
  });

  const handleLogoutUser = event => {
    localStorage.removeItem('token');
    const data = {
      isLoggedIn: false,
    };

    handleUser({ isLoggedIn: false });
    client.mutate({
      mutation: UPDATE_IS_LOGGED_IN,
      variables: data,
    });
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
    <UserLogin>
      {!isLoggedIn ? renderUserLoginButton : renderUserLogoutButton}
    </UserLogin>
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
