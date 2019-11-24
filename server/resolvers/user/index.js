const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const resolvers = {
  createUser: async (_source, data, ctx, info) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await ctx.prisma.createUser(data);
    // console.log(user);
    return user;
  },
  login: async (parent, { username, password }, ctx, info) => {
    const user = await ctx.prisma.user({ data: username });

    if (!user) throw new Error('Invalid Login');

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) throw new Error('Invalid Login');

    const token = jwt.sign(
      {
        id: user.id,
        username: user.email,
      },
      'my-secret-from-env-file-in-prod',
      {
        expiresIn: '30d', // token will expire in 30days
      },
    );
    return {
      token,
      user,
    };
  },
};

module.exports = resolvers;
