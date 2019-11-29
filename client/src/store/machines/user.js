import { Machine, interpret } from 'xstate';

const UserMachine = Machine({
  initial: 'loggedOut',
  states: {
    loggedOut: {
      onEntry: ['error'],
      on: {
        SUBMIT: 'loading',
      },
    },
    loading: {
      on: {
        SUCCESS: 'loggedIn',
        FAIL: 'loggedOut',
      },
    },
    loggedIn: {
      onEntry: ['setUser'],
      onExit: ['unsetUser'],
      on: {
        LOGOUT: 'loggedOut',
      },
    },
  },
});

export default UserMachine;
