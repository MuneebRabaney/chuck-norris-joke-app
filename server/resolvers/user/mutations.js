const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const mutations = {
  createUser: async (root, { data }, { prisma }, info) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;
    const user = await prisma.createUser(data);
    return user;
  },
  loginUser: async (root, { data }, { prisma }, info) => {
    const { email, password } = data;

    const user = await prisma.user({ email });
    if (!user) throw new Error('Invalid User');

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) throw new Error('Invalid User Password');

    const token = jwt.sign(
      {
        id: user.id,
        username: user.email,
      },
      'secret-key-goes-here',
      {
        expiresIn: '30d',
      },
    );
    return {
      token,
      user,
    };
  },
};

module.exports = mutations;
