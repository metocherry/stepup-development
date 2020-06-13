import Rm from "@/main.ts";

const data1 = [1, 2, 3];
const result1 = Rm.map(data1, (value) => `${value}`);
console.log(result1);

const data2 = new Set([1, 2, 3]);
const result2 = Rm.map(data2, (value) => `${value}`);
console.log(result2);
