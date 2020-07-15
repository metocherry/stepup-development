/**
 * 초기 값과 리턴 타입이 없다면, 컬렉션의 첫번째를 초기값으로 하여 순회하며, 리턴타입은 컬렉션 타입이다.
 * @template T 컬렉션 타입
 * @param predicate
 * @param collection
 */
export function reduce<T>(predicate: (accumulator: T, data: T) => T, collection: IterableIterator<T>|Array<T>): T;

/**
 * 초기 값이 있고, 리턴타입이 있다면, 컬렉션의 첫번째를 초기값으로 하여 순회하며 계산하고, 리턴타입의 객체를 리턴한다.
 * @template T 컬렉션 타입
 * @template R 리턴 타입
 * @param predicate
 * @param collection
 */
export function reduce<T, R>(predicate: (accumulator: T|R, data: T) => R, collection: IterableIterator<T>|Array<T>): R;

/**
 * 리턴 타입이 없다면, 초기값을 시작 값으로 하여, 컬렉션을 순회하며 계산하고, 컬렉션 타입의 객체를 리턴한다.
 * @template T 컬렉션 타입
 * @param predicate
 * @param collection
 * @param initialValue
 */
export function reduce<T>(predicate: (accumulator: T, data: T) => T, collection: IterableIterator<T> | Array<T>, initialValue: T): T;

/**
 * 초기값과 리턴타입이 있다면, 초기값을 시작 값으로 하여, [collection]을 순회하며 계산하고,  리턴타입의 객체를 리턴한다.
 * @template T 컬렉션 타입
 * @template R 리턴 타입
 * @param predicate
 * @param collection
 * @param initialValue
 */
export function reduce<T, R>(predicate: (accumulator: R, data: T) => R, collection: IterableIterator<T> | Array<T>, initialValue: R): R;


export function reduce<T, R>(predicate: (accumulator: T|R, data: T) => R, collection: IterableIterator<T> | Array<T>, initialValue?: R) {
  let iterator = collection;
  let result = initialValue;

  if (initialValue == undefined || initialValue == null) {
    iterator = collection[Symbol.iterator]();
    result = iterator.next().value;
  }

  for (const d of iterator) {
    result = predicate(result!, d);
  }

  return result;
}
