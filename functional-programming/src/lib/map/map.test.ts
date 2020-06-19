import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { map } from "./map.ts";


Deno.test("if data is array type, creates an array of values", () => {
  // arrange
  const data = [1, 2, 3];

  // act
  const actual = map((v) => v * v, data);

  // assert
  assertEquals(actual, [1, 4, 9]);
});

Deno.test("if data is set type, creates an array of values", () => {
  // arrange
  const data = new Set([1, 2, 3]);

  // act
  const actual = map((v) => v * v, data);

  // assert
  assertEquals(actual, [1, 4, 9]);
});

Deno.test("if data is map type, creates an array of values", () => {
  // arrange
  const data = new Map([["a", 1], ["b", 2], ["c", 3]]);

  // act
  const actual = map(([k, v]) => v * v, data);

  // assert
  assertEquals(actual, [1, 4, 9]);
});

Deno.test("if data is generator type, creates an array of values", () => {
  // arrange
  function* makeIterator() {
    yield 1;
    yield 2;
    yield 3;
  }

  const data = makeIterator();

  // act
  const actual = map((v) => v * v, data);

  // assert
  assertEquals(actual, [1, 4, 9]);
});
