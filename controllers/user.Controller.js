//Models
const { User } = require('../models/user.Model');

//Utils
const { catchAsync } = require('../utils/catchAsync');

const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll({ attributes: { exclude: ['pass'] } });

  res.status(200).json({ users });
});

const deleteUser = catchAsync(async (req, res, next) => {
  const { userData } = req;

  await userData.destroy();

  res.status(201).json({ status: 'success' });
});

const updateUser = catchAsync(async (req, res, next) => {
  const { userData } = req;

  const { username, email } = req.body;

  await userData.update({ username, email });

  res.status(201).json({ status: 'success' });
});

module.exports = { getAllUsers, deleteUser, updateUser };
