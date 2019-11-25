import React, { useState, useEffect, useCallback, Fragment } from 'react';
import styled from 'styled-components';
import {
  Button,
  TextField,
  IconButton,
  FormControl,
  InputAdornment,
} from '@material-ui/core';
import { LoadingSpinner } from '../loaders';
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { LOGIN_USER } from './types/mutations';
import { useMutation } from '@apollo/react-hooks';
import { useApolloClient } from '@apollo/react-hooks';

const HoneyPot = styled.input`
  visibility: hidden;
  opacity: 0;
  display: none;
`;

function Login({ location }) {
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
    await client.writeData({
      data,
    });

    return data.loginUser.token;
  };

  const setTokenToLocalStorage = ({ token }) => {
    console.log(token);
    localStorage.setItem('token', token);
  };

  console.log(client);

  const handlePasswordVisibility = () => {
    const { toggle } = Object.assign({}, state.form);
    toggle.passwordVisibility = !toggle.passwordVisibility;
    return setState({ ...state });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const { toggle, errors, input } = state.form;

  if (error) return 'Error!';
  if (loading) return <LoadingSpinner />;

  if (data) {
    persistUserDetailsToGlobalState({ data }).then(token => {
      setTokenToLocalStorage({
        token,
      });
    });
    return (
      <Fragment>
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
      </Fragment>
    );
  }

  return (
    <Fragment>
      <h2>Login</h2>
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
    </Fragment>
  );
}

export default Login;
