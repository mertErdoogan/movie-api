const express = require('express');
const router = express.Router();


//Models
const Users = require('../models/Users.js');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post('/register', (req, res, next) => {
  const { username, password } = req.body;
  
  const user = new Users({
    username,
    password
  });

  const promise = user.save();

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

module.exports = router;
