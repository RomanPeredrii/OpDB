var express = require('express');
var router = express.Router();
let fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  fs.readFile('/frontopdb/build/index.html', 'utf-8', (err, file) => {
    if (err) return res.send('failed reading of page')
    return res.send(file);
  });



});

module.exports = router;
