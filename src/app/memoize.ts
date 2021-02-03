import * as memoizee from 'memoizee';

// tslint:disable-next-line:typedef
export function memoize() {
  return (target, key, descriptor) => {
    const oldFn = descriptor.value;
    const newFn = memoizee(oldFn);
    // tslint:disable-next-line:typedef
    descriptor.value = function() {
      return newFn.apply(this, arguments);
    };
  };
}


// tslint:disable-next-line:typedef
export function debounce(delay) {
  let inDebounce;
  return (target, key, descriptor) => {
    const func = descriptor.value;
    // tslint:disable-next-line:typedef
    descriptor.value = function() {
      clearTimeout(inDebounce);
      console.log('fn');
      inDebounce = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    };
    return descriptor;
  };
}
