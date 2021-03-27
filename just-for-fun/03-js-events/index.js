const dbClickBtn = document.querySelector(".double-click-js");

const init = () => {
  dbClickBtn.addEventListener("dblclick", () => {
    console.log("hello");
  });
};
init();
