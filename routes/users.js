var express = require('express');
var router = express.Router();

router.post('/users/add', function(req, res, next) {
  // console.log(req.body);
  let first = parseFloat(req.body.first);
  let second = parseFloat(req.body.second);
  let result = first + second;
  return res.json({ result: result });
});
router.post('/users/sub', function(req, res, next) {
  // console.log(req.body);
  let first = parseFloat(req.body.first);
  let second = parseFloat(req.body.second);
  let result = first - second;
  return res.json({ result: result });
});
router.post('/users/mul', function(req, res, next) {
  // console.log(req.body);
  let first = parseFloat(req.body.first);
  let second = parseFloat(req.body.second);
  let result = first * second;
  return res.json({ result: result });
});
router.post('/users/divid', function(req, res, next) {
  // console.log(req.body);
  let first = parseFloat(req.body.first);
  let second = parseFloat(req.body.second);
  let result = first / second;
  return res.json({ result: result });
});

module.exports = router;
