
module.exports = request = (init) => {
  const defolt = {
    username: null,
    pswd: null,
    rmb: false,
  };
  return { ...defolt, ...init };
};
/**
 * Try decoding a string using a decoding function.
 *
 * @param {obj} parameters
 * @return {obj} obj
 * 
 */
