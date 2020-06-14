/**
 * [collection] 의 모든 요소를 순회하며, 요소를 인자를 받는 [predicate]를 실행하여,
 * 결과가 true 인 요소를 새로운 배열에 담아 리턴한다.
 *
 *
 * @template T
 * @param {Iterable<T>} collection
 * @param {(data: T) => boolean} predicate
 * @returns {T[]}
 */
function filter<T>(collection: Iterable<T>, predicate: (data: T) => boolean): T[] {
  const result: T[] = [];

  for (const d of collection) {
    if (predicate(d)) result.push(d);
  }

  return result;
}

export default filter;
