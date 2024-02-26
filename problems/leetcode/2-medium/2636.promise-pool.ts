type F = () => Promise<any>;

async function promisePool(functions: F[], workers: number): Promise<any> {
  if (functions.length <= workers) {
    return await Promise.all(functions.map((fn) => fn()));
  }

  const funcs = functions.map((func) => ({ func, done: false }));

  const next = (curIdx: number): number | void => {
    for (let i = curIdx + 1; i < funcs.length; i++) {
      if (funcs[i].done) continue;
      return i;
    }
    return;
  };

  const work = async (curIdx: number) => {
    if (!funcs[curIdx]) return;
    funcs[curIdx].done = true;
    await funcs[curIdx].func();
    const nextIdx = next(curIdx);
    if (nextIdx && nextIdx < funcs.length) {
      return work(nextIdx);
    }
  };

  return await Promise.all(
    Array.from({ length: workers }, (_, i) => i).map((id) => work(id))
  );
}

/** 두번째 답 - 다른 답안/해설 참고 */
async function promisePool2(funcs: F[], poolSize: number): Promise<any> {
  const next = async () => {
    if (funcs.length === 0) return;
    await funcs.shift()!();
    return await next();
  };

  const workers = Array(poolSize).fill(undefined);

  return Promise.all(workers.map(next));
}
