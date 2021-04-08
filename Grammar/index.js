const billion = 1000_000_000;
const price = 100_00;

console.log(price);
console.log(typeof price);

let a;
const b = a ?? 10;
let c;

// > [1] c is undefined/null ? then, c = b;
// c = c ?? (c = b);

// > [2] c is undefined/null ? then, c = b;
// c ??= b;

console.log(c); // 10;
