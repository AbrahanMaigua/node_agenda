const express = require('express');
const router = express.Router();
const auth = require('../controller/authController'); 


// Registrar usuario

router.get('/auth/register', function(req, res, next) {
  res.render('register', { title: 'register' });
});

router.post('/auth/register', auth.registerUser);

// Login
router.post('/auth/login', auth.loginUser);
router.get('/auth/login', function(req, res, next) {
  res.render('register', { title: 'login' });
});

// Logout
router.post('/auth/logout', auth.logoutUser);

// Refresh token
router.get('/token/refresh', auth.refreshToken);

module.exports = router;
