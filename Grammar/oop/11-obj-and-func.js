const log = console.log;

const kim = { name: "kim", first: 10, second: 20 };
const lee = { name: "lee", first: 10, second: 10 };
function sum() {
  return this.first + this.second;
}
// lee.__proto__ = kim; // lee의 부모가 kim이 됨

// call()

// sum.call(); // sum이라는 객체를 실행시킨다
// sum() 이랑 똑같음
// 모든 함수는 call이라는 메소드를 가지고 있다. 왜냐면 자바스크립트는 함수도 객체니까.
// 콜이라는 함수의 메소드를 호출할 때, 첫번째 인자로 kim을 주면 내부적으로 this.kim이 됨
// 콜로 함수의 this 값을 바꿀 수 있다!
// 함수이름.call(객체);
log("sum.call(kim) => ", sum.call(kim)); //30
log("sum.call(lee) => ", sum.call(lee)); //20

// call은 파라미터를 추가로 받을 수도 있다.

function sum2(prefix) {
  return prefix + (this.first + this.second);
}

log("sum2.call(kim) => ", sum2.call(kim)); //NaN
log("sum2.call(kim, 'hello') => ", sum2.call(kim, "hello")); //hello30
log("sum2.call(lee, 40) => ", sum2.call(lee, 40)); //60

// bind()

// sum의 this가 kim으로 고정된 "새로운 함수"가 만들어짐 => sum 자체는 변하지 않음
const kimSum = sum2.bind(kim, "New Index");
log("kimSum() => ", kimSum()); // New Index30

// call 이란?
// 자바스크립트에서 모든 함수는 call 이라는 method를 가지고 있다. 왜냐면 자바스크립트에서 함수는 객체니까.
// 그리고 call이라는 메소드는 "함수이름.call(그 콜을 써먹을 객체:인스턴스라고도 함)" 로 씀
// 콜은 객체 밖에서 생성된 함수의 this 값을 객체 내에서 참조할 수 있도록 함
// 따라서 함수를 실행해 바로 값을 받고 싶을 때 쓰면 유용

// bind 란?
// 역시 모든 함수는 bind라는 메소드를 가지고 있음
// 함수이름.bind(바인드를 써먹을 객체:인스턴스라고도 함)
// 바인드 역시 객체 밖에서 생성된 함수의 this 값을 객체 내에서 참조할 수 있게 한다는데서 call과 같음
// 다만, 해당 함수 내 this가 지정한 객체로 고정된 "새로운 함수"가 만들어진다
// 따라서 값을 나중에 쓰고 싶을 때 쓰면 유용

// call 과 bind의 차이?
