//Models
const { User } = require('../models/user.Model');

//Utils
const { AppError } = require('../utils/appError');
const { catchAsync } = require('../utils/catchAsync');

const userExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });

  if (!user) {
    return next(new AppError('User does not exist with given Id', 404));
  }

  req.userData = user;

  next();
});

const protectAccountOwne = catchAsync(async (req, res, next) => {
  const { sessionUser, userData } = req;

  if (sessionUser.id !== userData.id) {
    return next(new AppError('You do not own this account', 403));
  }

  next();
});

module.exports = { userExists, protectAccountOwne };
