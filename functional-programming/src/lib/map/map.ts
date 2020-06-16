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

  // Symbol.iterator 체크
  // isArrayLike 체크

  // const iterator = collection[Symbol.iterator]();

  // do {
  //   let item: IteratorResult<T>;
  //   try {
  //     item = iterator.next();
  //     console.log(item);
  //     console.log(Object.prototype.toString.call(item));
  //     result.push(predicate(item.value));
  //   } catch (error) {
  //     console.log(`error : ${error}`);
  //     return [];
  //   }

  //   if (item.done) {
  //     break;
  //   }
  // } while(true);

  // // Finalize the iterator if it happens to be a Generator
  // if (typeof iterator.return === 'function') {
  //   // console.log(iterator.return());
  // }


  for (const d of collection) {
    result.push(predicate(d));
  }

  return result;
}

export default map;
