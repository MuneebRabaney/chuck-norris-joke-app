import React, { useState, Fragment } from 'react';
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
import { CREATE_USER } from './types/mutations';
import { useMutation } from '@apollo/react-hooks';
import { Main } from '../layouts';

const HoneyPot = styled.input`
  visibility: hidden;
  opacity: 0;
  display: none;
`;

function UserSignup({ location }) {
  const [createUser, { loading, error, data }] = useMutation(CREATE_USER);

  const [state, setState] = useState({
    form: {
      input: {
        email: '',
        firstname: '',
        lastname: '',
        password: '',
      },
      toggle: {
        passwordVisibility: false,
      },
      errors: false,
    },
  });

  if (loading) return 'loading...';
  if (error) return 'Error!';
  if (data && data.createUser) {
    const { email, password, firstname } = data.createUser;
    return (
      <div>
        <h1>Welcome {firstname}</h1>
        <br />
        <p>Login below to get a better experience</p>
        <br />
        <Button
          color='primary'
          component={Link}
          variant='contained'
          to={{
            state: { email, password, firstname },
            pathname: '/user/login',
          }}>
          Login
        </Button>
      </div>
    );
  }

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
    createUser({
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

  const { toggle, errors } = state.form;
  return (
    <Main hasUserLogin={false}>
      <h2>Signup as a new user</h2>
      <form onSubmit={handleFormSubmission} action=''>
        <HoneyPot onChange={handleHoneyPot} type='text' />
        <FormControl>
          <TextField
            required
            id='firstname'
            label='First Name'
            margin='normal'
            onChange={handleOnChange}
            error={errors && errors.firstname}
            helperText={
              errors && errors.firstname ? 'First name is required' : ''
            }
          />
          <TextField
            required
            id='lastname'
            label='Last Name'
            margin='normal'
            onChange={handleOnChange}
            error={errors && errors.lastname}
            helperText={
              errors && errors.lastname ? 'Last name is required' : ''
            }
          />
          <TextField
            required
            id='email'
            label='Email'
            margin='normal'
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
            variant='contained'
            startIcon={<SaveIcon />}>
            Create new user
          </Button>
          <div>
            <br />
            <br />
            <p>
              If you already have an account, click on the link below to login.
            </p>
            <br />
            <Link to={{ pathname: '/user/login' }}>Login</Link>
          </div>
        </FormControl>
      </form>
    </Main>
  );
}

export default UserSignup;
