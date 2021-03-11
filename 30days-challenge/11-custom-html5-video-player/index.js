const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");

const skipBtns = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

function togglePlay() {
  // GlobalEventHandlers
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updateButton() {
  // attribute
  const icon = this.paused ? "▶️" : "⏸";
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

const init = () => {
  video.addEventListener("click", togglePlay);
  video.addEventListener("play", updateButton);
  video.addEventListener("pause", updateButton);
  video.addEventListener("timeupdate", handleProgress);
  toggle.addEventListener("click", togglePlay);
  skipBtns.forEach((btn) => btn.addEventListener("click", skip));
  ranges.forEach((range) => {
    range.addEventListener("change", handleRangeUpdate);
    range.addEventListener("mousemove", handleRangeUpdate);
  });

  let mousedown = false;
  progress.addEventListener("click", scrub);
  progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
  // if mousedown is true, send an event to scrub() otherwise, returns false and does nothing
  //   progress.addEventListener("mousemove", () => {
  //     if (mousedown) scrub();
  //   });

  progress.addEventListener("mousemove", () => (mousedown = true));
  progress.addEventListener("mousedown", () => (mousedown = false));
};
init();
