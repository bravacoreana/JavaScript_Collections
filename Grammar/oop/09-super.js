const log = console.log;

class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    return this.first + this.second;
  }
}

class PersonPlus extends Person {
  constructor(name, first, second, third) {
    super(name, first, second);
    this.third = third;
  }
  sum() {
    return super.sum() + this.third;
  }
  avg() {
    return (this.first + this.second + this.third) / 3;
  }
}

const kim = new PersonPlus("kim", 30, 40, 50); // Person을 데리고 오면서 동시에 인자 하나를 더 받을 수 있게 됨!
log("kim.sum() : " + kim.sum()); // kim.sum() : 120
log("kim.avg() : " + kim.avg()); // kim.avg() : 40

// super : 부모를 불러서 부모가 할 수 있는 일은 부모가 하게 하고, 부모가 못하는 일을 자식이 하도록 하는 것
// super 에는 두가지 기능이 있는데
// 1. super(): super 뒤에 괄호가 붙으면 그 괄호 안에 오는 것은 "부모 생성자"(부모에 있는 constructor)이다.
// 2. super. : super 뒤에 점이 붙으면 그 다음에는 부모의 method를 불러올 수 있다.

class PersonPlusPlus extends PersonPlus {
  constructor(name, first, second, third, fourth) {
    super(name, first, second, third);
    this.fourth = fourth;
  }
  sum() {
    return super.sum() + this.fourth;
  }
}

const lee = new PersonPlusPlus("lee", 30, 40, 50, 60);
log("lee.sum() : " + lee.sum());
