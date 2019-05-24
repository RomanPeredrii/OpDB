var log = console.log;
const makeResult = require('../my_modules/result');
const mongo = require('../layers/mongo');

log('result: ', makeResult());

//!! - the auth router
module.exports = login = async (userLogInfo) => {
    //!! -- make user 
    const user = await mongo.getUser(userLogInfo);
    let result = makeResult({
        ok: true,
        logged: true,
        token: user.token,
        admin: (user.username == "Admin"),
    });

    // if (user.username === "Admin") result.admin = true;
    // user.username === "Admin" ? result.admin = true : '';
    //result.admin = (user.username === "Admin") ? true : false;

    return result;
};
