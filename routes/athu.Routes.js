const express = require('express');

// Controller
const { login, createUser } = require('../controllers/auth.Controller');

// Middlewares
const {
  createUserValidations,
  checkValidations,
} = require('../middlewares/validations.Middlewares');

const router = express.Router();

router.post('/', createUserValidations, checkValidations, createUser);

router.post('/login', login);

module.exports = { authRoutes: router };
