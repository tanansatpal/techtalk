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
