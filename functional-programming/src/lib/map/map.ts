function map<T, R>(predicate: (data: T) => R, collection: Iterable<T>): R[] {
  const result: R[] = [];

  for (const d of collection) {
    result.push(predicate(d));
  }

  return result;
}

export default map;
