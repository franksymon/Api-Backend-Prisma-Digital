const express = require('express');

// Controller
const {
  getAllUsers,
  updateUser,
  deleteUser,
} = require('../controllers/user.Controller');

// Middlewares
const { protectToken } = require('../middlewares/auth.Middlewares');
const {
  userExists,
  protectAccountOwne,
} = require('../middlewares/user.Middlewares');

const router = express.Router();

router.get('/', getAllUsers);

router.use(protectToken);

router
  .route('/:id')
  .delete(userExists, protectAccountOwne, deleteUser)
  .put(userExists, protectAccountOwne, updateUser);

module.exports = { usersRouter: router };
