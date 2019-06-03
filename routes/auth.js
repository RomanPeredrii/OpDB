const log = console.log;
const router = require('express').Router();

//!! - the auth router
router.post('/login', async (req, res, next) => {

    log('req.body', req.body);

    let result = await require('../controllers/login')(req.body.authRequest);
    res.cookie('token', result.token, { maxAge: 60000000, httpOnly: true })
    res.json(result);
    log('result', result);
});

module.exports = router;
