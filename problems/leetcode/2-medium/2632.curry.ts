function curry(fn: Function): Function {
  const fnArgsLength = fn.length;
  return function curried(...args: any[]) {
    const curArgsLength = args.length;
    if (curArgsLength >= fnArgsLength) return fn(...args);
    return (...args2: any[]) => curried(...args, ...args2);
  };
}
