function Person2(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

Person2.prototype.sum = function () {
  return this.first + this.second;
};

const soo = new Person2("soo", 20, 20);
soo.sum = function () {
  return "Only this : " + (this.first + this.second);
};
const hee = new Person2("hee", 30, 30);
const woo = new Person2("woo", 30, 30);

console.log("soo.sum() : ", soo.sum());
console.log("hee.sum() : ", hee.sum());
console.log("woo.sum() : ", hee.sum());
