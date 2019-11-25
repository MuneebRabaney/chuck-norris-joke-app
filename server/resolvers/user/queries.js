const queries = {
  isLoggedIn: async (parent, data, context) => {
    console.log(data);
    return false;
  },
};

module.exports = queries;
