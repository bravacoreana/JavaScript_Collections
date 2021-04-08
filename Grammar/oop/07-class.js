// class 는 ES2016 이상에서만 작동

// constructor(생성자)의 역할
// 1) 객체를 만들고
// 2) 객체의 초기 상테를 세팅한다

// class - 객체를 만드는 공장

class Person {}
const kim = new Person();
console.log("kim", kim); // kim Person {}

// 객체를 생성할 때 객체의 초기 상태를 세팅하기 위한,
// 객체가 만들어지기 직전에 실행되도록 약속되어 있는 함수
// constructor(){}

class Person2 {
  constructor() {
    console.log("constructor");
  }
}
const lee = new Person2();
console.log("lee", lee);
//constructor
//lee Person2 {}

class Person3 {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
}

const park = new Person3();
console.log("park", park);

// 클래스에서 프로토타입 만들기 - [1] 클래스 밖에 추가
class Person4 {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
}

Person4.prototype.sum = function () {
  return this.first + this.second;
};

const choi = new Person4("choi", 30, 40);
console.log("choi", choi); // choi Person3 { name: 'choi', first: 30, second: 40 }
console.log("choi", choi.sum()); // choi 70

// 클래스에서 프로토타입 만들기 = [2] 클래스 안에 추가
class Person5 {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    return this.first + this.second;
  }
}

const kim2 = new Person5("kim2", 40, 30);
kim2.sum = function () {
  // 이게 클래스 보다 우선순위를 가진다
  return "updated: " + (this.first + this.second);
};
console.log("kim2", kim2); // kim2 Person5 { name: 'kim2', first: 40, second: 30 }
console.log("kim2.sum()", kim2.sum()); // kim2.sum() updated: 70
