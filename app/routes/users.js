const express = require('express');
const router = express.Router();
const auth = require('../controller/authController'); 


// Registrar usuario

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'register' });
});

router.post('/register', auth.registerUser);

// Login
router.post('/login', auth.loginUser);
router.get('/login', function(req, res, next) {
  res.render('register', { title: 'login' });
});

// Logout
router.post('/logout', auth.logoutUser);
router.get('/logout', auth.logoutUser);

// Refresh token
router.get('refresh', auth.refreshToken);

module.exports = router;
