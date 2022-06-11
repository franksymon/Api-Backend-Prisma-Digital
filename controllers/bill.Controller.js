// Models
const { Bill } = require('../models/bill.Model');
const { User } = require('../models/user.Model');

//Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const getAllBillUser = catchAsync(async (req, res, next) => {
  const { sessionUser } = req;

  const bills = await Bill.findAll({ where: { user_id: sessionUser.id } });

  res.status(200).json({ bills });
});

const createBill = catchAsync(async (req, res, next) => {
  const { value, type, observation, user_id } = req.body;
  const { sessionUser } = req;

  const newBill = await Bill.create({
    value,
    type,
    observation,
    user_id: sessionUser.id,
  });

  res.status(201).json({ newBill });
});

const deletedBill = catchAsync(async (req, res, next) => {
  const { billData } = req;

  await billData.destroy();

  res.status(200).json({ status: 'success' });
});

const updateBill = catchAsync(async (req, res, next) => {
  const { billData } = req;
  const { value, type, observation } = req.body;

  await billData.update({ value, type, observation });

  res.status(200).json({ status: 'success' });
});

module.exports = { getAllBillUser, createBill, deletedBill, updateBill };
