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
