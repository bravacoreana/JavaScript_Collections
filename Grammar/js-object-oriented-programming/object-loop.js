const memberArray = ["bilbo", "nenya", "liha", "max"];

console.group("array group");
let i = 0;
while (i < memberArray.length) {
  console.log(i, memberArray[i]);
  i += 1;
}
console.groupEnd("array loop");

console.group("obj group");
const memberObj = {
  manager: "liha",
  dev: "bilbo",
  designer: "nenya",
};

for (const name in memberObj) {
  console.log(name, memberObj[name]); // memberObj.name 으로는 출력 안됨 -> name 이 변수라서 => [name] 이렇게 해줘야 함
}

console.groupEnd("obj group");
