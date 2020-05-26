import * as log from "https://deno.land/std/log/mod.ts"
import { map } from "./src/map.ts"

console.log(map([1, 2, 3], (n) => n*n));
