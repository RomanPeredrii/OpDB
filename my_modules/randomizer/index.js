


/**
* Try decoding a string using a decoding function.
*
* @return { string } token
*
*/
function token () {
  // !! - make token
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 20; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  };
  return text;

};

module.exports = token;