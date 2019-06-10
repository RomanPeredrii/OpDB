const makeResult = require('../my_modules/result');
const mongo = require('../layers/mongo');

module.exports = login = async (userLogInfo) => {
    //!! -- make user 
    const user = await mongo.getUser(userLogInfo);
    const result = (user)
        ? makeResult({
            ok: true,
            logged: true,
            token: user.token,
            admin: (user.username == "admin")
        })
        : makeResult({
            logged: false,
            unlogged: true,
        });
    return result;
};
