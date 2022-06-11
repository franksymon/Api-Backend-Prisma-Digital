const { body, validationResult } = require('express-validator');

//Utils
const { AppError } = require('../utils/appError');
//const { catchAsync } = require('../utils/catchAsync');

const createUserValidations = [
  body('username').notEmpty().withMessage('Name cannot be empty'),
  body('email')
    .notEmpty()
    .withMessage('Email cannot be empty')
    .isEmail()
    .withMessage('Must be a valid email'),
  body('pass')
    .notEmpty()
    .withMessage('Password cannot be empty')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
];

const createBillValidations = [
  body('value').notEmpty().withMessage('value cannot be empty'),
  body('type').notEmpty().withMessage('type cannot be empty'),
  body('observation').notEmpty().withMessage('observation cannot be empty'),
];

const checkValidations = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const message = errors.array().map(error => {
      return error.msg;
    });

    const errorMsg = message.join('. ');

    return next(new AppError(errorMsg, 400));
  }

  next();
};

module.exports = {
  createUserValidations,
  createBillValidations,
  checkValidations,
};
