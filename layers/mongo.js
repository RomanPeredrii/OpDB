const User = require('../models/user');
const Department = require('../models/department');
const randomizer = require('../my_modules/randomizer')

module.exports = {
    getUser: async (UserLogInfo) => {
        // !! - get user from mongo
        try {
            let tokenString = randomizer.token();
            let user = await
                User.findOneAndUpdate(
                    {
                        username: UserLogInfo.userName,
                        password: UserLogInfo.pswd
                    },
                    {
                        token: tokenString
                    });
            // if (!user) log('USER NOT EXIST OR PASSWORD UNCORRECT')
            // else user.token = tokenString;

            user
                ? user.token = tokenString
                : user = null;
            return user;
        } catch (err) { log('\n ERROR', err) };
    },
};