const list = {
  student1: {
    name: "jane",
    age: 99,
  },
  student2: {
    name: null,
    age: 100,
  },
  student3: {
    name: false,
    age: 101,
  },
};

// << Optional Chaining Operator (?.) >>

const o1 = list?.student1;
const o2 = list.student1?.age;
const o3 = list.student1?.height;
// const user2 = user !== undefined && user !== null ? user.profile : undefined

console.log(o1); // { name: 'jane', age: 99 }
console.log(o2); // 99
console.log(o3); // undefined

// << Nullish Coalescing Operator (??) >>

const n1 = list.student1.name ?? "nono";
const n2 = list.student2.name ?? "nono";
const n3 = list.student3.name ?? "nono";
console.log(n1); // jane
console.log(n2); // nono -> only when the value is null or undefined
console.log(n3); // false

// * Logical OR(||) operator - ECMA 2020 아님

const g1 = list.student1.name || "haha";
const g2 = list.student1.height || "haha";
console.log(g1); // Jane
console.log(g2); // haha
