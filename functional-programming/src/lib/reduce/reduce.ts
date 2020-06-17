function reduce<T, R>(predicate: (result: R, data: T) => R, collection: Array<T>|Set<T>|Generator<T>, initialValue?: T|R) {
  let result = initialValue;

  if (initialValue == undefined || initialValue == null) {
    let iterator = collection[Symbol.iterator]();
    result = iterator.next().value;

    for (const d of iterator) {
      result = predicate(result as R, d);
    }
  }

  return result;
}

export default reduce;
