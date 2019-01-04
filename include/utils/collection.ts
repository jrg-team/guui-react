function pick<T extends { [k: string]: any }, K extends keyof T>(object: T, ...keys: K[]) {
  return Object.keys(object).reduce((result: Pick<T, K>, key: string) => {
    if (contains(keys, key as K)) {
      result[key as K] = object[key as K];
    }
    return result;
  }, {} as Pick<T, K>);
}

function contains<T>(array: T[], item: T) {
  return array.indexOf(item) >= 0;
}

function range(start: number, end: number): number[] {
  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

export {pick, contains, range};