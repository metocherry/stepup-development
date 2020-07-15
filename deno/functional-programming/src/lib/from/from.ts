import { RmChain } from "./RmChain.ts";
import { Collection } from "../../types.ts";

export function from<T>(collection: Collection<T>): RmChain<T> {
  return new RmChain<T>(collection);
}

