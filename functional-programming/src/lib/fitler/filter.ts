export function filter<T>(predicate: (data: T) => boolean, collection: Iterable<T>): T[] {
  const result: T[] = [];

  for (const d of collection) {
    if (predicate(d)) result.push(d);
  }

  return result;
}
