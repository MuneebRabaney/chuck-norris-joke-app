/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { LoadingSpinner } from '../loaders';
import { CategoryNotFound } from '../errors';
import { Button, Fab } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { GET_RANDOM_JOKE } from './types/queries';
import { IS_LOGGED_IN } from '../user/types/queries';

const JokeQuote = styled.blockquote`
  text-align: left;
  background: #f7f7f7;
  border-left: 10px solid purple;
  margin: 10px;
  padding: 10px;
  quotes: '“' '”' '‘' '’';
  position: relative;
  p {
    display: inline-block;
    width: 85%;
    padding: 10px 40px;
  }
  &:before {
    display: inline-block;
    color: purple;
    content: open-quote;
    font-size: 5em;
    line-height: 0.1em;
    position: absolute;
    top: 15px;
    left: 5px;
  }
`;

const Categories = styled.div`
  text-align: left;
  padding: 5px 0;
  p,
  ul {
    display: inline-block;
    text-align: left;
    margin-left: 10px;
    text-transform: capitalize;
  }
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  text-align: left;
  padding: 0px 32px;
  a {
    text-decoration: none;
    margin-right: 10px;
  }
  button {
    margin-right: 10px;
    &: [aria-label= 'like' ] {
      width: 38px;
      height: 30px;
      float: right;
      margin: 0;
    }
  }
`;

function CategorySingleRandom({ location, history }) {
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
    client.writeData({
      data: {
        isLoggedOut: true,
      },
    });
    updateLoginState();
  };

  const queryOptions = {
    fetchPolicy: 'no-cache',
    notifyOnNetworkStatusChange: true,
    variables: {
      category: location.state ? location.state.category : '',
    },
  };

  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_RANDOM_JOKE,
    queryOptions,
  );

  const isRefetching = networkStatus === 4;

  if (isRefetching || loading) return <LoadingSpinner />;
  if (error) return <CategoryNotFound error={error} />;

  const { value, url, categories } = data.randomJoke;

  const handleDisplayCategories = (
    <Categories>
      <p>Category:</p>
      <ul>
        {categories.map((value, index) => (
          <li key={index}> {value}</li>
        ))}
      </ul>
    </Categories>
  );

  const handleDisplayQuote = (
    <JokeQuote cite={url}>
      <p>{value}</p>
    </JokeQuote>
  );

  // const handleMarkAsFavorite = () => {
  // const { id } = data.randomJoke;
  // TODO:
  // must be logged in
  // get value from state
  // run mutation to add to User Favorite list
  // console.log(id);
  // };

  const handlePreviousJoke = () => {};

  const handleNextJoke = () => refetch();

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
  console.log('isLoggedIn', isLoggedIn);
  console.log('isLoggedOut', isLoggedOut);
  return (
    <Fragment>
      {isLoggedIn && !isLoggedOut && renderUserLogoutButton}
      {isLoggedOut && renderUserLoginButton}
      {value && handleDisplayQuote}
      {categories.length && handleDisplayCategories}
      <Footer>
        <Button
          color='primary'
          component={Link}
          variant='contained'
          to={{ pathname: '/jokes/categories' }}>
          Go Back To Joke Categories
        </Button>
        <Button
          color='primary'
          variant='contained'
          onClick={handlePreviousJoke}>
          Previous
        </Button>
        <Button color='primary' variant='contained' onClick={handleNextJoke}>
          Next
        </Button>
        {isLoggedIn && !isLoggedOut && (
          <Fab aria-label='like'>
            <FavoriteIcon color='secondary' fontSize='small' />
          </Fab>
        )}
      </Footer>
    </Fragment>
  );
}

export default CategorySingleRandom;