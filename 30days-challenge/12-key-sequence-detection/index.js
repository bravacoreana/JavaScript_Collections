const pressedKeys = [];
const secretCode = "password";

window.addEventListener("keyup", (e) => {
  pressedKeys.push(e.key);
  pressedKeys.splice(
    -secretCode.length - 1,
    pressedKeys.length - secretCode.length
  );
  if (pressedKeys.join("").includes(secretCode)) {
    console.log("YEAY");
    cornify_add();
  }
  console.log(pressedKeys);
});
