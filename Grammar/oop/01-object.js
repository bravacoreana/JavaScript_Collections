const memberArray = ["bilbo", "nenya", "liha", "max"];

const memberObj = {
  manager: "liha",
  dev: "Liha Kim",
  designer: "Kim",
};

memberObj.manager = "LIHA"; // Edit element in Object
console.log(memberObj.designer); // * 1
console.log(memberObj["designer"]); // * 2
delete memberObj.designer; // Delete element in Object
console.log(memberObj);

// result of 1,2 is same
