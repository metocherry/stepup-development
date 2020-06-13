/**
 * Creates an array of values by running each element in collection through predicate
 *
 * @template T type of collection
 * @template R type of item of new collection
 * @param {Iterable<T>} collection
 * @param {(data: T) => R} predicate
 * @returns {R[]}
 */
function map<T, R>(collection: Iterable<T>, predicate: (data: T) => R): R[] {
  const result: R[] = [];

  for (const d of collection) {
    result.push(predicate(d));
  }

  return result;
}

export default map;
