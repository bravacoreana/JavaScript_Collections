const log = console.log;

const superObj = { superValue: "super" };
const subObj = { subValue: "sub" };

subObj.__proto__ = superObj; // 링크를 걸어줌
// log(subObj.subValue); // sub
// log(subObj.superValue); // super
// log(subObj); // { subValue: 'sub' }
// * subObj에서 subValue를 찾아보고, 없으면 __proto__로 연결된 superObj에서 찾아봄 -> 있으면 리턴!

// ==============================

subObj.superValue = "sub2";
log(subObj.superValue); // sub2
log(superObj.superValue); // super

// // superObj을 부모로 하는 오브젝트를 새로 만드는 방법: const 자식 = Object.create(부모)
// const subObj2 = Object.create(superObj);
// log("subObj2=> ", subObj2); // {}
// subObj2.subValue = "sub";
// debugger;
// log(subObj2); //{ subValue: 'sub' }
// log(subObj2.subValue); // sub
// subObj2.superValue = "sub2";
// log("subObj2.superValue => ", subObj2.superValue); // sub2
// log(superObj.superValue); // super
// log(subObj2.__proto__ === superObj); // true

// // __proto__ 대신 Object.create() 라는 것을 사용해서 prototype link를 지정해주는 것이 더 좋은 방법 => 동작은 완전히 똑같음

// const kim = {
//   name: "kim",
//   first: 10,
//   second: 20,
//   sum: function () {
//     return this.first + this.second;
//   },
// };

// // > __proto__ 로 객체 복사 🔽 (비추천)

// const lee = {
//   name: "lee",
//   first: 10,
//   second: 10,
//   avg: function () {
//     return (this.first + this.second) / 2;
//   },
// };

// lee.__proto__ = kim;

// log("kim.sum() => ", kim.sum()); //30
// log("lee.sum() => ", lee.sum()); //20
// log("lee.avg() => ", lee.avg()); //10

// // > 권장되는 방법 🔽

// const park = Object.create(kim);
// park.name = "park";
// park.first = 20;
// park.second = 30;
// park.avg = function () {
//   return (this.first + this.second) / 2;
// };

// log(park); //{ name: 'park', first: 20, second: 30, avg: [Function (anonymous)] }
// log(park.avg()); // 25
