/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { colorList } from '../../color-list.json';
import { randomNumber } from '../../helpers';
import { LoadingSpinner } from '../loaders';
import { GET_JOKE_CATEGORIES } from './types/queries';
import { IS_LOGGED_IN } from '../user/types/queries';

const Joke = styled.div`
  display: inline-block;
  margin: 5px;
  a {
    position: relative;
    display: block;
    height: 90px;
    width: 100px;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    text-transform: capitalize;

    color: ${() => {
      const { length } = colorList;
      const id = randomNumber({ min: 0, max: length });
      const style = colorList[id];
      return style.text;
    }};
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &:after {
      content: '';
      display: block;
    }
    &:hover {
      &:after {
        background-color: #000;
        width: 100%;
        height: 100%;
        transition: background-color 0.5s linear;
      }
      span {
        color: #fff;
        transition: color 0.2s linear;
      }
    }
  }
  background: ${() => {
    const { length } = colorList;
    const id = randomNumber({ min: 0, max: length });
    const style = colorList[id];
    return style.background;
  }};
`;

function CategoryList() {
  const client = useApolloClient();
  const { isLoggedIn } = client.readQuery({ query: IS_LOGGED_IN });
  const [state, setState] = useState({
    user: {
      isLoggedOut: isLoggedIn,
    },
  });

  const updateLoginState = useCallback(() => {
    const newState = Object.assign({}, state);
    newState.user.isLoggedOut = !state.user.isLoggedOut;
    setState(newState);
  }, [state]);

  useEffect(() => {
    updateLoginState();
  }, [state.user]);

  const handleLogoutUser = event => {
    localStorage.removeItem('token');
    updateLoginState();
    client.writeData({
      data: {
        isLoggedOut: true,
      },
    });
  };

  const { loading, error, data } = useQuery(GET_JOKE_CATEGORIES);

  if (error) return `Error! ${error.message}`;

  // handle results found from query
  const renderList = () => {
    if (data && data.jokeCategories && !loading) {
      const { jokeCategories } = data;
      if (!jokeCategories.length) {
        return <div>No joke categories found!</div>;
      }

      return jokeCategories.map((value, index) => (
        <Joke key={index}>
          <Link
            to={{
              state: { category: value },
              pathname: `/jokes/categories/${value}`,
            }}>
            <span>{value}</span>
          </Link>
        </Joke>
      ));
    }
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

  const { isLoggedOut } = state.user;

  return (
    <Fragment>
      {isLoggedIn && !isLoggedOut && renderUserLogoutButton}
      {isLoggedOut && renderUserLoginButton}
      <br />
      <br />
      {loading && <LoadingSpinner />}
      {renderList()}
    </Fragment>
  );
}

export default CategoryList;
