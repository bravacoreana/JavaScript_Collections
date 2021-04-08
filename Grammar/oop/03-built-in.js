console.log("Math.PI", Math.PI);
console.log("Math.random()", Math.random());
console.log("Math.floor(3.9)", Math.floor(3.9));

const MyMath = {
  PI: Math.PI,
  random: () => Math.random(),
  floor: (val) => Math.floor(val),
};

console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(3.8)", MyMath.floor(3.8));
