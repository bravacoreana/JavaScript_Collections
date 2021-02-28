// const hourHand = document.querySelector(".hour-hand");
// const minHand = document.querySelector(".min-hand");
// const secHand = document.querySelector(".second-hand");

const setDate = () => {
  const hourHand = document.querySelector(".hour-hand");
  const minHand = document.querySelector(".min-hand");
  const secHand = document.querySelector(".second-hand");

  //   const now2 = Date.now(); // 메소드는 UTC 기준으로 1970년 1월 1일 0시 0분 0초부터 현재까지 경과된 밀리 초를 반환합니다.
  const now = new Date(); // 생성자는 시간의 특정 지점을 나타내는 Date 객체를 생성합니다.

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourDegrees = (hours / 12) * 360 + 90;
  const miniteDegrees = (minutes / 60) * 360 + 90;
  const secondsDegrees = (seconds / 60) * 360 + 90;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minHand.style.transform = `rotate(${miniteDegrees}deg)`;
  secHand.style.transform = `rotate(${secondsDegrees}deg)`;
};

setInterval(setDate, 1000);
const init = () => setDate();
init();
