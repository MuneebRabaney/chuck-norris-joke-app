const initialState = {
  isLoggedIn: !!localStorage.getItem('token'),
};

const clientState = {
  defaults: {
    ...initialState,
    networkStatus: {
      __typename: 'NetworkStatus',
      isConnected: false,
    },
  },
  // TODO:
  // Move this into its own file
  // make it neat :)
  resolvers: {
    Mutation: {
      updateIsLoggedIn: async (_, { isLoggedIn }, { cache, getCacheKey }) => {
        console.log('running mutation');

        await cache.writeData({ data: { isLoggedIn } });
        return null;
      },
    },
  },
  typeDefs: `
    type Query {
      isLoggedIn: Boolean
    }
  `,
};

export default clientState;
