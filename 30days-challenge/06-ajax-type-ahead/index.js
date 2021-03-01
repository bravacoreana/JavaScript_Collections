const API_URL =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const input = document.querySelector(".search");
const suggetions = document.querySelector(".suggestions");
const cities = [];

fetch(API_URL)
  .then((response) => response.json())
  // response 값이 json 으로 convert 되어야 함.
  // 그리고 이것은 또 다른 promise 를 반환하기 때문에 then을 써줘야 함.
  .then((data) => {
    cities.push(...data);
    // spread 사용시 data 리터럴로 cities에 push 됨.
    // cities.push(data) 의 경우 cities 배열 안에 data를 감싸는 배열이 하나 더 추가되어
    // 배열이 이중으로 묶여버림. 따라서 spread를 이용해 배열리터럴(값 자체)를 cities에 넣어줌.
  });

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    // g: global
    // i: insensitive
    // wordToMatch: 변하지 않는 값이면 /여기에원하는값/
    // 여기서는 어떤 값이 들어올 지 모르므로 input의 변화값을 읽는 변수를 넣어줌
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );

      return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>`;
    })
    .join("");
  // join: 배열의 요소들을 이어 붙여줌.
  // 예) join("-") 의 경우 배열 요소 사이사이마다 - 가 붙게 됨.
  suggetions.innerHTML = html;
}

input.addEventListener("change", displayMatches);
input.addEventListener("keyup", displayMatches);
