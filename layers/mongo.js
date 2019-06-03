
const log = console.log;
const User = require('../models/user');
const Department = require('../models/department');
const randomizer = require('../my_modules/randomizer/index')

module.exports = {
    getUser: async (UserLogInfo) => {
        // !! - get user from mongo
        try {
            let tokenString = randomizer.token();
            return await
                User.findOneAndUpdate(
                    {
                        username: UserLogInfo.username,
                        pswd: UserLogInfo.pswd
                    },
                    {
                        token: tokenString
                    });
        } catch (err) { log('\n ERROR', err) };
    },
};