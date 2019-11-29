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
    if (!user) throw new Error('Invalid User Email');

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) throw new Error('Invalid User Password');

    const values = {
      id: user.id,
      username: user.email,
    };
    const secret = 'secret-key-goes-here';
    const options = {
      expiresIn: '30d',
    };
    const token = jwt.sign(values, secret, options);
    return {
      token,
      user,
    };
  },
};

module.exports = mutations;
