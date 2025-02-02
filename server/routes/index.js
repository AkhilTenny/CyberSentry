var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/a', function(req, res, next) {
  console.log("hiaaa")
  res.status(200).json({messafge:"hha"})
});

module.exports = router;
