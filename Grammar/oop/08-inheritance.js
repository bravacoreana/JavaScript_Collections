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

class PersonPlus extends Person5 {
  avg() {
    return (this.first + this.second) / 2;
  }
}

const lee2 = new PersonPlus("lee2", 30, 40);
console.log("lee2", lee2); // lee2 PersonPlus { name: 'lee2', first: 30, second: 40 }
console.log("lee2.sum() : ", lee2.sum()); // lee2.sum() :  70
console.log("lee2.avg() : ", lee2.avg()); // lee2.avg() :  35

// 상속이란?
// 상속이 없으면 뭐가 불편할까?
// 상속을 할 때 extends라는 키워드를 쓰는데, 상속받는 자식의 클래스는 어떻게 구현하는가?

// extends 상속으로 유지보수의 편의성을 도모한다
// 자식 클래스 객체를 생성하고 그 객체가 부모 클래스의 메소드를 사용한다 하더라도 자바스크립트가 알아서 부모 클래스까지 올라가 메소드를 찾아 실행해줌
// 상속을 사용하지 않는다면 부모 클래스 수정 시 자식 클래스도 수정해줘야 함으로 유지보수의 한계점이 발생한다.
// 원본의 부모 클래스를 손대지 않으면서 원하는 메소드를 추가할 수 있음
