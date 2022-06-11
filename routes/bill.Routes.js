const express = require('express');

// Controller
const {
  getAllBillUser,
  createBill,
  deletedBill,
  updateBill,
} = require('../controllers/bill.Controller');

// Middlewares
const { billExists } = require('../middlewares/bill.Middlewares');
const {
  createBillValidations,
  checkValidations,
} = require('../middlewares/validations.Middlewares');
const { protectToken } = require('../middlewares/auth.Middlewares');

const router = express.Router();

router.use(protectToken);

router.post('/', createBillValidations, checkValidations, createBill);

router.get('/bills', getAllBillUser);

router
  .route('/:id')
  .delete(billExists, deletedBill)
  .put(billExists, updateBill);

module.exports = { billsRouter: router };
