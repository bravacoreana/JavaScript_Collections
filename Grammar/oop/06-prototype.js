function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.sum = function () {
    return this.first + this.second + this.third;
  };
  // 생성자가 실행이 될 때마다 우리가 생성하려는 객체의 sum 함수가 매번 만들어짐 => 메모리 낭비
  // 생성자 내에서 메소드를 만드는 것의 한계점 => 1) 메모리 낭비 2) 생산성 감서
}

function Person2(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

// Person2 의 method를 만드는 방법

Person2.prototype.sum = function () {
  return this.first + this.second;
  // 프로토타입은 객체다
  // sum은 프로퍼티
  // Person2라는 컨스트럭터 함수의 프로토타입이라는 객체에
  // sum이라는 프로퍼티를 함수로 지정함으로서
  // Person2 컨스트럭터로 만들어진 모든 객체가 공유하는 함수를 만듦
};

const soo = new Person2("soo", 20, 20);
soo.sum = function () {
  return "Only this : " + (this.first + this.second);
}; // [1]
const hee = new Person2("hee", 30, 30);
const woo = new Person2("woo", 30, 30);

console.log("soo.sum() : ", soo.sum());
console.log("hee.sum() : ", hee.sum());
console.log("woo.sum() : ", hee.sum()); // [2]
// soo라는 객체에 sum이라는 메소드를 호출할 때
// 제일 먼저 객체 자신이 sum이라는 메소드가 있는지 확인, 있으면 실행하고 종료 - [1]
// sum이라는 메소드를 자신(hee)가 갖고 있지 않으면
// hee라는 객체의 contructor(생성자)인 Person2의 prototype이 sum이라고 하는
// method를 가지고 있나 찾아보고 그게 찾아지면 실행! - [2]

// Person2 라는 constructor(생성자) 안에 method가 들어있지 않기 때문에
// 객체가 만들어질 때마다 실행되는 것이 아님
// 한번만 정의 되기 때문에 메모리 절약도 가능
