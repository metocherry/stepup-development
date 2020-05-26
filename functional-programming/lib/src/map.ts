export function map<T, R>(collection: Iterable<T>, predicate: (data: T) => R): R[] {
  const result: R[] = [];

  for (const d of collection) {
    result.push(predicate(d));
  }

  return result;
}
