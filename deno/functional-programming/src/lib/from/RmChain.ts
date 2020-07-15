import { reduce } from "../reduce/reduce.ts";
import { Collection } from "../../types.ts";


export class RmChain<T> {
  #collection: Collection<T>;

  #operators: Function[] = [];

  constructor(collection: Collection<T>) {
    this.#collection = collection;
  }

  pipe(...operators: Function[]): RmChain<T> {
    this.#operators.push(...operators);
    return this;
  }

  value() {
    if (this.#operators.length <= 0) return this.#collection;

    const [head, ...rest] = this.#operators;
    return reduce((accumulator, operator) => operator(accumulator), rest, head(this.#collection));
  }
}
