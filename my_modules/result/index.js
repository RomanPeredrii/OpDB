
module.exports = result = (init) => {
  const defolt = {
    ok: false,
    token: null,
    admin: false,
    error: false,
    unlogged: false,
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
