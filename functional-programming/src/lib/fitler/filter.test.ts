
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import filter from "./filter.ts";

Deno.test('if elements of array collection return true, create an array of elements of it.', () => {
  // arrange
  const data = [1, 2, 3];

  // act
  const actual = filter((v) => typeof v == "number", data);

  // assert
  assertEquals(actual, [1, 2, 3]);
});
