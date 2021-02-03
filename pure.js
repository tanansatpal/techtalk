// Pure function
const addPure = (v1, v2) => {
  return v1 + v2;
};


// Impure function
const addImpure = (() => {
  let state = 0;
  return (v) => {
    return state += v;
  }
})();




