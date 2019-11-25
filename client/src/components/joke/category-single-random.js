import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { LoadingSpinner } from '../loaders';
import { CategoryNotFound } from '../errors';
import { Button, Fab } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { GET_RANDOM_JOKE } from './queries';

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
    &:last-child {
      width: 38px;
      height: 30px;
      float: right;
      margin: 0;
    }
  }
`;

function CategorySingleRandom({ location, history }) {
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

  const { value, url, categories} = data.randomJoke;

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

  return (
    <Fragment>
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
        <Fab aria-label='like'>
          <FavoriteIcon color='secondary' fontSize='small' />
        </Fab>
      </Footer>
    </Fragment>
  );
}

export default CategorySingleRandom;
