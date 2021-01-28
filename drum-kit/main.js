const keys = document.querySelectorAll(".key");

const removeTransition = (key) => {
  key.classList.remove("playing");
};

const handleKeydown = (event) => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
};

const init = () => {
  window.addEventListener("keydown", handleKeydown);
  keys.forEach((key) =>
    key.addEventListener("transitionend", (e) => {
      if (e.propertyName !== "transform") return;
      removeTransition(key);
    })
  );
};
init();
