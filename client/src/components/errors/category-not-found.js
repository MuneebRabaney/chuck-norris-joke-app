import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Main } from '../layouts';

function CategoryNotFound({ error }) {
  console.error(error.message);
  return (
    <Main>
      <h2>Joke Category not found!</h2>
      <Button
        color='primary'
        component={Link}
        variant='contained'
        to={{ pathname: '/' }}>
        Return Home
      </Button>
    </Main>
  );
}

export default CategoryNotFound;
