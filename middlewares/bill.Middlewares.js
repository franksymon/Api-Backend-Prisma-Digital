//Models
const { Bill } = require('../models/bill.Model');

//Utils
const { AppError } = require('../utils/appError');
const { catchAsync } = require('../utils/catchAsync');

const billExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const bill = await Bill.findOne({ where: { id } });

  if (!bill) {
    return next(new AppError('Bill does not exist with given Id', 404));
  }
  req.billData = bill;

  next();
});

module.exports = { billExists };
