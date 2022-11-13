var express = require('express');
var router = express.Router();

/* GET order listing. */
// router.get('/', function(req, res, next) {
//   res.send('Order respond with a resource');
// });

router.get('/', function(req, res, next) {
    res.send('Order id respond with a resource ' + req.query.id);
  });

module.exports = router;