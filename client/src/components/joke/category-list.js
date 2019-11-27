/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { colorList } from '../../color-list.json';
import { randomNumber } from '../../helpers';
import { LoadingSpinner } from '../loaders';
import { GET_JOKE_CATEGORIES } from './types/queries';
import { Main } from '../layouts';

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
  const { loading, error, data } = useQuery(GET_JOKE_CATEGORIES);

  if (error) return `Error! ${error.message}`;

  // handle results found from query
  const renderList = ({ data, loading } = false) => {
    if (data && data.jokeCategories && !loading) {
      const { jokeCategories } = data;

      if (!jokeCategories.length) return <div>No joke categories found!</div>;

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
    return null;
  };

  return (
    <Main>
      {loading && <LoadingSpinner />}
      {renderList({ data, loading })}
    </Main>
  );
}

export default CategoryList;
