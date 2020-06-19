import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import Rm from "@/main.ts";

interface Product {
  name: string;
  price: number;
}

Deno.test("Compound map, filter, and reduce", () => {
  const products: Product[] = [
    { name: "가방", price: 30000 },
    { name: "신발", price: 20000 },
    { name: "휴대폰", price: 150000 },
  ];

  const filter = (product: Product) => product.price > 50000;
  const map = (product: Product) => product.price;

  const expected = Rm.reduce(
    (accumulator, price) => accumulator + price,
    Rm.map(
      map,
      Rm.filter(filter, products),
    ),
    0
  )

  assertEquals(150000, expected);
});

Deno.test("Compound map, filter, and reduce using `from chaining`", () => {
  const products: Product[] = [
    { name: "가방", price: 30000 },
    { name: "신발", price: 20000 },
    { name: "휴대폰", price: 150000 },
  ];

  const expected = Rm.from(products)
    .pipe(
      (products: Product[]) => Rm.filter((product: Product) => product.price > 50000, products),
      (products: Product[]) => Rm.map((product: Product) => product.price, products),
      (prices: number[]) => Rm.reduce((accumulator, price) => accumulator + price, prices),
    )
    .value();

  assertEquals(150000, expected);
});

