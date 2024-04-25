const express = require('express');
const router = express.Router();

const xss = require('xss');


// const users = {users: [{username: "user 1"}, {username: "user 2"}]};
const users = {users: [
    {username: "user 1"},
    {username: "<img src=\"bla\" onerror=\"console.log('xss')\">"}
    ]};

const sanitizedUsers = {users: users.users.map(user=>{return {username: xss(user.username)}})};
console.log("sanitizedUsers: ", sanitizedUsers);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('userList', users);
});

router.get('/xss', function(req, res, next) {
  res.render('userListVulnerable', users);
});

router.get('/sanitized', function(req, res, next) {
  res.render('userListVulnerable', sanitizedUsers);
});

module.exports = router;
