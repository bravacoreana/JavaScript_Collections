const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");

function hightLightLink() {
  // where on the page the element actually lives
  const linkCoords = this.getBoundingClientRect();

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

const init = () => {
  highlight.classList.add("highlight");
  document.body.append(highlight);
  triggers.forEach((a) => a.addEventListener("mouseenter", hightLightLink));
};

init();
