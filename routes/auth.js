var log = console.log;
var router = require('express').Router();
const User = require('../models/user');
const Department = require('../models/department');
request = require('../my_modules/result');

log(result({}));

//!! - the auth router
// router.post('/login', function (req, res, next) {



//   let user = req.body.UserLogInfo;

//   // !! - get session 
//   getUser(user).then((user) => {
//     if (!user) /*{
//       log('!USER', user);
//       return res.json(result);
//     } */ { }
//     else if (user.token) {
//       result.ok = true;
//       result.logged = true;
//       res.cookie('token', user.token, { maxAge: 60000000, httpOnly: true })
//     };
//     if (user.username === "Admin") {
//       result.ok = false;
//       result.admin = true;
//       result.logged = true;
//     };
//     res.json(result);
//   }).catch((err) => { log('getUser ERROR', err); result.error = true; res.json(result); });
// });

// // !! - get user from mongo
// async function getUser(UserLogInfo) {
//   try {
//     //log('USER INCOME OBJECT', UserLogInfo)
//     let tokenString = makeid();
//     let user = await
//       User.findOneAndUpdate(
//         {
//           username: UserLogInfo.userName,
//           password: UserLogInfo.pswd
//         },
//         {
//           token: tokenString
//         });
//     //log('USER', user)
//     if (!user) { log('USER NOT EXIST OR PASSWORD UNCORRECT') }
//     else {
//       user.token = tokenString;
//     };
//     return user;
//   } catch (err) { log('\n ERROR', err) };
// };


// // !! - make token
// function makeid() {
//   let text = "";
//   let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   for (let i = 0; i < 20; i++) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length))
//   };
//   //log('GENERATE TOKEN', text);
//   return text;
// };

module.exports = router;
