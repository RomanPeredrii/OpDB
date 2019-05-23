var log = console.log;
var router = require('express').Router();
const makeResult = require('../my_modules/result');
const mongo = require('../layers/mongo');

log('result: ', makeResult());

//!! - the auth router
module.exports = auth = async (req) => {
    let result ;
    // !! - get session 
    const user = await mongo.getUser(req.body.UserLogInfo)
    if (user.token) {
        result = makeResult({ ok: true, logged: true });
        log('result: ', result);
 ///!!!!!       res.cookie('token', user.token, { maxAge: 60000000, httpOnly: true })
    };
    if (user.username === "Admin") {
        result = makeResult({ ok: true, logged: true });
        result.admin = true;
        result.logged = true;
    };

    return result;


  //  make return for auth router!!!!!!!!!!!!!!!!!!!!!!!!!!