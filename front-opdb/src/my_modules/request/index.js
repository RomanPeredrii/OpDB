
let request = (init) => {
  const defolt = {
    username: null,
    pswd: null,
    rmb: false,
  };
  return { ...defolt, ...init };
};

 export default {request}
