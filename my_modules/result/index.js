
module.exports = result = (init) => {
  const defolt = {
    ok: false,
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
