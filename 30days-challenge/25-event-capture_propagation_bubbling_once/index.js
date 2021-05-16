const divs = document.querySelectorAll("div");
const body = document.querySelector("body");
const button = document.querySelector("button");
function logText(e) {
  console.log(this.classList.value);
  //   e.stopPropagation(); // stop bubbling
}

const init = () => {
  divs.forEach((div) =>
    div.addEventListener("click", logText, {
      capture: false, // capture down. when true: one, two, three
      once: true, // works only once: removeEventListener
    }),
  );
  button.addEventListener(
    "click",
    () => {
      console.log("click");
    },
    {
      once: true,
    },
  );
};

init();
