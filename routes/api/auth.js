const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post('/', (req, res) => {
  const payload = {
    user: {
      id: req.user._id,
    },
  };

  jwt.sign(
    payload,
    config.get('jwtSecret'),
    { expiresIn: '1h' },
    (err, token) => {
      if (err) throw err;
      res.json({ token });
    }
  );
});

module.exports = router;
