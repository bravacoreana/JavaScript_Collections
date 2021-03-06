const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");
// Interpolated
console.log("Hello I am a %s string!", +"🐳");
console.log(`Hello I am a %s string!`, "🐳");

// Styled
console.log("%c I am some great text", "font-size: 50px; background: red;");
// %c : Apply CSS style on console

// warning!
console.warn("OH NOOO");

// Error :|
console.error("DISPLAY ERROR 🤨");

// Info
console.info("This is a info");

// Testing
console.assert(1 === 1, "That is right!");
console.assert(1 === 2, "That is wrong!"); // Runs only when not true
const p = document.querySelector("p");
console.assert(
  p.classList.contains("ouch"),
  "P doesn't have a classlist called P."
);

// clearing
console.clear(); // cleaning console.log

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.group(dog.name);
  console.log(`this is ${dog.name}`);
  console.log(`this is ${dog.age}`);
  console.groupEnd("END");
});

// counting
console.count("Wes");
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Steve");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/bravacoreana")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

console.table(dogs);
