import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import reduce from "./reduce.ts";

Deno.test("초기 값과 리턴 타입이 없다면, 컬렉션의 첫번째를 초기값으로 하여 순회하며, 리턴타입은 컬렉션 타입이다", () => {
  // arrange
  const data = [1, 2, 3];

  // act
  const actual = reduce((res, v) => res + v, data);

  // assert
  assertEquals(actual, 6);
});

Deno.test("초기 값이 없다면, 컬렉션의 첫번째를 초기값으로 하여 순회하며, 계산한다", () => {
  // arrange
  const data = [1, 2, 3];

  // act
  const actual = reduce<number, string>((res, v) => `${res}${v}`, data);

  // assert
  assertEquals(actual, "123");
});

Deno.test("리턴 타입이 없다면, 초기값을 시작값으로 하여 컬렉션을 순회하며, 계산하고, 리턴타입은 컬렉션 타입이다", () => {
  // arrange
  const data = [1, 2, 3];

  // act
  const actual = reduce((res, v) => res + v, data, 1);

  // assert
  assertEquals(actual, 7);
});

Deno.test("초기값과 리턴타입이 있다면, 초기값을 시작값으로 하여 컬렉션을 순회하며, 계산하고, 리턴타입의 객체를 리턴한다", () => {
  // arrange
  const data = [1, 2, 3];

  // act
  const actual = reduce<number, string>((res, v) => `${res}${v}`, data, "S");

  // assert
  assertEquals(actual, "S123");
});

