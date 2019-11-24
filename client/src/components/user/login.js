import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import {
  Button,
  TextField,
  IconButton,
  FormControl,
  InputAdornment,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import SaveIcon from '@material-ui/icons/Save';
import { CREATE_USER } from './mutations';
import { useMutation } from '@apollo/react-hooks';

const HoneyPot = styled.input`
  visibility: hidden;
  opacity: 0;
  display: none;
`;

function Login({ location }) {
  const [loginUser, { loading, error, data }] = useMutation(CREATE_USER);

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

  useEffect(() => {
    persistLocationStateToLocalComponentState();
  }, [location.state]);

  console.log(state);

  if (loading) return 'loading...';
  if (error) return 'Error!';

  if (data && data.loginUser) {
    // redirect to joke categories
    // write userLoggedIn to the cache store
    if (data.loginUser.success) return 'Login Successful';
    return 'Login Failed';
  }

  const persistLocationStateToLocalComponentState = () => {
    const { input } = Object.assign({}, state.form);
    input.email = location.state.email;
    input.password = location.state.password;
    setState({ ...state });
  };

  const handleOnChange = event => {
    const { id, value } = event.currentTarget;
    const { input } = Object.assign({}, state.form);
    input[id] = value;
    setState({ ...state });
  };

  const handleHoneyPot = event => {};

  const handleFormSubmission = event => {
    event.preventDefault();
    const { input: inputs } = state.form;
    loginUser({
      variables: { inputs },
    });
  };

  const handlePasswordVisibility = () => {
    const { toggle } = Object.assign({}, state.form);
    toggle.passwordVisibility = !toggle.passwordVisibility;
    setState({ ...state });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const { toggle, errors, input } = state.form;

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
