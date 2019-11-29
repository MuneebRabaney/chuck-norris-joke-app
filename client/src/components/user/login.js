import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import {
  Button,
  TextField,
  IconButton,
  FormControl,
  InputAdornment,
} from '@material-ui/core';
import { LoadingSpinner } from '../loaders';
import { Link, Redirect } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { LOGIN_USER } from './types/mutations';
import { IS_LOGGED_IN } from './types/queries';
import { useMutation } from '@apollo/react-hooks';
import { useApolloClient } from '@apollo/react-hooks';
import { Main } from '../layouts';
import { UPDATE_IS_LOGGED_IN } from '../../store/mutations';

const HoneyPot = styled.input`
  visibility: hidden;
  opacity: 0;
  display: none;
`;

function Login(props) {
  const { location, isLoggedIn } = props;
  const client = useApolloClient();

  const [loginUser, { loading, error, data }] = useMutation(LOGIN_USER);

  const [state, setState] = useState({
    form: {
      input: {
        email: '',
        password: '',
      },
      toggle: {
        passwordVisibility: false,
      },
      errors: false,
    },
  });

  const updateUserEmail = useCallback(() => {
    const { input } = state.form;
    if (location.state && location.state.email !== input.email) {
      const { input } = Object.assign({}, state.form);
      input.email = location.state.email;
      return setState({ ...state });
    }
  }, [location.state, state]);

  useEffect(() => {
    updateUserEmail();
  }, [location.state, updateUserEmail]);

  const handleOnChange = event => {
    const { id, value } = event.currentTarget;
    const { input } = Object.assign({}, state.form);
    input[id] = value;
    return setState({ ...state });
  };

  const handleHoneyPot = event => {};

  const handleFormSubmission = event => {
    event.preventDefault();
    return loginUser({
      variables: {
        inputs: state.form.input,
      },
    });
  };

  const persistUserDetailsToGlobalState = async ({ data }) => {
    const { token } = data.loginUser;
    data.isLoggedIn = token && true;

    await client.mutate({
      mutation: UPDATE_IS_LOGGED_IN,
      variables: data,
    });
    return token;
  };

  const setTokenToLocalStorage = ({ token }) => {
    return localStorage.setItem('token', token);
  };

  const handlePasswordVisibility = () => {
    const { toggle } = Object.assign({}, state.form);
    toggle.passwordVisibility = !toggle.passwordVisibility;
    return setState({ ...state });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const renderErrorMessage = () => {
    const [message] = error.message.split('GraphQL error: ');
    const invalidUsername = message.includes('user');
    const invalidPassword = message.includes('password');
    const { input } = state.form;
    if (location.state && location.state.email !== input.email) {
      const { input } = Object.assign({}, state.form);
      if (invalidUsername) input.errors.email = true;
      if (invalidPassword) input.errors.password = true;
      return setState({ ...state });
    }
    const value = error.message.split(': ')[1];
    return (
      <p>
        <br />
        {value}
      </p>
    );
  };

  const { toggle, errors, input } = state.form;

  if (isLoggedIn) {
    return <Redirect to={{ pathname: '/user/dashboard' }} />;
  }

  if (loading) return <LoadingSpinner />;

  if (data && !loading) {
    persistUserDetailsToGlobalState({ data }).then(token => {
      setTokenToLocalStorage({
        token,
      });
    });
    return (
      <Main>
        <h2>Login Successful</h2>
        <br />
        <br />
        <Button
          color='primary'
          component={Link}
          variant='contained'
          to={{
            pathname: '/user/dashboard',
          }}>
          Go to dashboard
        </Button>
        <Button
          color='primary'
          component={Link}
          variant='contained'
          to={{
            pathname: '/jokes/categories',
          }}>
          Go to joke categories
        </Button>
      </Main>
    );
  }

  return (
    <Main hasUserLogin={false}>
      <h2>Login</h2>
      {error && renderErrorMessage()}
      <form onSubmit={handleFormSubmission} action=''>
        <HoneyPot onChange={handleHoneyPot} type='text' />
        <FormControl>
          <TextField
            required
            id='email'
            label='Email'
            margin='normal'
            value={input.email}
            onChange={handleOnChange}
            error={errors && errors.email}
            helperText={
              errors && errors.email ? 'A valid email address is required' : ''
            }
            InputProps={{
              'aria-label': 'set a new user email',
            }}
          />
          <TextField
            required
            id='password'
            label='Password'
            value={input.password}
            onChange={handleOnChange}
            error={errors && errors.password}
            helperText={
              errors && errors.password ? 'A password is required' : ''
            }
            type={toggle.passwordVisibility ? 'text' : 'password'}
            InputProps={{
              'aria-label': 'set a new user password',
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handlePasswordVisibility}
                    onMouseDown={handleMouseDownPassword}>
                    {toggle.passwordVisibility && <Visibility />}
                    {!toggle.passwordVisibility && <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <br />
          <br />
          <Button
            type='submit'
            size='large'
            color='primary'
            variant='contained'>
            Login
          </Button>
        </FormControl>
      </form>
      <div>
        <br />
        <br />
        <p>If you dont have an account, click on the link below to signup.</p>
        <br />
        <Link to={{ pathname: '/user/signup' }}>Signup</Link>
      </div>
    </Main>
  );
}

export default graphql(IS_LOGGED_IN, {
  props: ({ data: { loading, error, networkStatus, isLoggedIn } }) => {
    if (loading) return { loading };
    if (error) return { error };
    return {
      networkStatus,
      isLoggedIn,
    };
  },
})(Login);
