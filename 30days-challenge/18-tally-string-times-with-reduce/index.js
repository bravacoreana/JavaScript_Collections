const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

const seconds = timeNodes
  .map((node) => node.dataset.time) // > // take data-time values and create an array
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    // > ES6  // > map(parseFloat) : each value becomes float. (originally all are strings)
    return mins * 60 + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
