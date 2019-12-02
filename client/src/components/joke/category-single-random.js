import React, { Fragment } from 'react';
import { graphql } from 'react-apollo';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { LoadingSpinner } from '../loaders';
import { CategoryNotFound } from '../errors';
import { Button, Fab } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { GET_RANDOM_JOKE } from './types/queries';
import { IS_LOGGED_IN } from '../user/types/queries';
import { Main } from '../layouts';

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

function CategorySingleRandom({ isLoggedIn, location }) {
  const getCategoryFromUrlIfNotInState = ({ location }) => {
    const { state } = location;
    if (typeof state !== 'undefined' && state.category) return state.category;
    let category = location.pathname.split('categories/')[1];
    category.replace('/', ''); // clean up incase a use past with a "/"
    return category;
  };

  const category = getCategoryFromUrlIfNotInState({ location });

  const queryOptions = {
    fetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
    variables: { category },
  };

  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_RANDOM_JOKE,
    queryOptions,
  );

  const isRefetching = networkStatus === 4;

  if (error) return <CategoryNotFound error={error} />;

  const renderJokeCategories = ({ categories }) => (
    <Fragment>
      <Categories>
        <p>Category:</p>
        <ul>
          {categories.map((value, index) => (
            <li key={index}> {value}</li>
          ))}
        </ul>
      </Categories>
    </Fragment>
  );

  const renderJoke = ({ data, loading } = false) => {
    if (data && data.randomJoke && !loading) {
      const { value, url, categories } = data.randomJoke;
      return (
        <Fragment>
          <JokeQuote cite={url}>
            <p>{value}</p>
          </JokeQuote>
          {categories.length && renderJokeCategories({ categories })}
        </Fragment>
      );
    }
    return null;
  };

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

  const renderFavoriteButton = (
    <Fab aria-label='like'>
      <FavoriteIcon color='secondary' fontSize='small' />
    </Fab>
  );

  return (
    <Main>
      {(isRefetching || loading) && <LoadingSpinner />}
      {renderJoke({ data, loading })}
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
        {isLoggedIn && renderFavoriteButton}
      </Footer>
    </Main>
  );
}

// TODO:
// Neaten this up
// this is how we map our new incomming props
export default graphql(IS_LOGGED_IN, {
  props: ({ data: { loading, error, networkStatus, isLoggedIn } }) => {
    if (loading) return { loading };
    if (error) return { error };
    return {
      networkStatus,
      isLoggedIn,
    };
  },
})(CategorySingleRandom);
