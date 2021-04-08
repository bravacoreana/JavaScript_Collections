function func() {
  let a = "hello";
  if (true) {
    let a = "bye";
    console.log("inside a: ", a); //inside a:  bye
  }
  console.log("outside a: ", a); // outside a:  hello
}

func();

function func2() {
  var a = "hello";
  if (true) {
    var a = "bye";
    console.log("inside a: ", a); //inside a:  bye
  }
  console.log("outside a: ", a); //outside a:  bye
}

func2();

function func3() {
  const a = "hello";
  if (true) {
    const a = "bye";
    console.log("inside a: ", a); //inside a:  bye
  }
  console.log("outside a: ", a); //outside a:  hello
}

func3();
