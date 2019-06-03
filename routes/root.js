var log = console.log;
var express = require('express');
var router = express.Router();
const fs = require('fs');


/* All check cookies */
router.all('/', async (req, res, next) => {
    if ((req.url === '/') || (req.url === '/api/auth/login') || (req.url === '/pages/work')) {
        return next();
    };
    if ((!req.cookies.token) && (req.url.split('/')[1] === 'api')) {
        return res.json({ unlogged: true });
    }
    else if ((req.cookies.token) && (req.url.split('/')[1] === 'api'))
        res.cookie('token', req.cookies.token, { maxAge: 60000000, httpOnly: true });
    next();
});

/* GET home page. */
router.get('/*', function (req, res, next) {

    fs.readFile('./front-opdb/build/index.html', 'utf-8', (err, file) => {
        return res.send(file);
    });
});

module.exports = router;

