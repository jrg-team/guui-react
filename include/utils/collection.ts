function pick<T extends { [k: string]: any }, K extends keyof T>(object: T, ...keys: K[]) {
  return Object.keys(object).reduce((result: Pick<T, K>, key: string) => {
    if (contains(keys, key as K)) {
      result[key as K] = object[key as K];
    }
    return result;
  }, {} as Pick<T, K>);
}

function objectToArray(object: object): Array<{ key: any, value: any }> {
  const array = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      array.push({key, value: (object as any)[key]});
    }
  }
  return array;
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

function includes(array: any[], item: any) {
  return array.indexOf(item) >= 0;
}

export {pick, contains, range, includes, objectToArray};