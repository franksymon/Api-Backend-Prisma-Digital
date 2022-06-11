const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

// Models
const { User } = require('../models/user.Model');

//Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const login = catchAsync(async (req, res, next) => {
  const { username, pass } = req.body;

  const user = await User.findOne({ where: { username } });

  if (!user || !(await bcrypt.compare(pass, user.pass))) {
    return next(new AppError('Invalid Credentials', 400));
  }

  //Create JWT
  const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  user.pass = undefined;

  res.status(200).json({ token, user });
});

const createUser = catchAsync(async (req, res, next) => {
  const { username, email, pass } = req.body;

  const salt = await bcrypt.genSalt(12);
  const hashPassword = await bcrypt.hash(pass, salt);

  const newUser = await User.create({
    username,
    email,
    pass: hashPassword,
  });

  newUser.pass = undefined;

  res.status(201).json({ newUser });
});

module.exports = { login, createUser };
