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
  avg() {
    return (this.first + this.second) / 2;
  }
}

const lee = new PersonPlus("lee", 30, 40);

console.log("lee.sum() : ", lee.sum());
console.log("lee.avg() : ", lee.avg());
