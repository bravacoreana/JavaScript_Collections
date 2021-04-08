const log = console.log;

//[1]
const kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: (f, s) => f + s,
};
console.log("kim", kim.sum(kim.first, kim.second));

//[2]
const choi = {
  name: "choi",
  first: 10,
  second: 40,
  sum: () => kim.first + kim.second,
};
console.log("choi", choi.sum()); // 30

//[3]
const park = {
  name: "park",
  first: 10,
  second: 20,
  sum: () => this.first + this.second,
  sum2: function () {
    return this.first + this.second;
  },
  sum3: () => this,
};
console.log("park", park.sum()); // NaN
console.log("park", park.sum2()); // 30
console.log("park", park.sum3()); // {}
