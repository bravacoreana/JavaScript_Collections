const addItems = document.querySelector(".add-items");
const itemList = document.querySelector(".plates");
const items = [];
// localStorage.setItem();

const input = addItems.querySelector("input");

function handleSubmit(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  this.reset();
}

function populateList(plates = []) {}

const init = () => {
  addItems.addEventListener("submit", handleSubmit);
};

init();
