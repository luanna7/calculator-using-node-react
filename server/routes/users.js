var express = require('express');
// var crypto = require('crypto');
var router = express.Router();
// var sql = require('../mysql.js');

// const createUserQuery = (name, email, password) => `
// INSERT INTO USERS(name, email, password)
// VALUES (${name}, ${email}, ${password})
// `;

// router.post("/users/signup", function(req, res, next) {
//   // console.log(req.body);
//   // const { name, password, email } = req.body;
//   // const encodedPassword = encodePassword(password)
//   // sql.query(createUserQuery(name, email, encodedPassword), function(err, result) {
//   //   if (err) throw err;
//   //   response.body = {
//   //     name,
//   //     email,
//   //   }
//   // })
//   console.log(req.body);
//   sql.query(`SELECT * FROM USERS WHERE NAME = 'test'`, function(req, res, next){
//     console.log(res);
//   });
// });

router.post("/users/add", function(req, res, next){
  console.log(req.body);
  let first = parseFloat(req.body.first);
  let second = parseFloat(req.body.second);
  let result = first + second;
  return res.json({'result': result});
});
router.post("/users/sub", function(req, res, next){
  console.log(req.body);
  let first = parseFloat(req.body.first);
  let second = parseFloat(req.body.second);
  let result = first - second;
  return res.json({'result': result});
});
router.post("/users/mul", function(req, res, next){
  console.log(req.body);
  let first = parseFloat(req.body.first);
  let second = parseFloat(req.body.second);
  let result = first * second;
  return res.json({'result': result});
});
router.post("/users/divid", function(req, res, next){
  console.log(req.body);
  let first = parseFloat(req.body.first);
  let second = parseFloat(req.body.second);
  let result = first / second;
  return res.json({'result': result});
});

module.exports = router;
