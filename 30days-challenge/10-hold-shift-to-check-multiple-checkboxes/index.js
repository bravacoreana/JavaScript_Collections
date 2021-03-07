const checkboxs = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
  if (e.shiftKey && this.checked) {
    let inBetween = false;
    // check if they had the shift key down
    // AND check that they are checking it
    checkboxs.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) inBetween = !inBetween;
      if (inBetween) checkbox.checked = true;
    });
  }

  if (e.shiftKey && !this.checked) {
    let inBetween = false;
    checkboxs.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) inBetween = !inBetween;
      if (inBetween) checkbox.checked = false;
    });
  }
  lastChecked = this;
}

const init = () => {
  checkboxs.forEach((checkbox) =>
    checkbox.addEventListener("click", handleCheck)
  );
};

init();
