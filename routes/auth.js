const log = console.log;

const router = require('express').Router();

//!! - the auth router
router.post('/auth', async (req, res, next) => {

    let result = require('../my_modules/result')(req.body.UserLogInfo);
    res.cookie('token', result.token, { maxAge: 60000000, httpOnly: true })
    res.json(result);

});

module.exports = router;
