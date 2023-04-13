let ac = document.getElementById("ac");
let del = document.getElementById("del");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let zero = document.getElementById("0");
let point = document.getElementById("point");
let div = document.getElementById("div");
let mul = document.getElementById("mul");
let add = document.getElementById("add");
let min = document.getElementById("min");
let eql = document.getElementById("eql");
let clg = document.getElementById("clg");
// console.log(eval("2 * 1"));

ac.addEventListener("click", () => {
  console.log("ac");
  clg.innerHTML = null;
});

// del.addEventListener("click", () => {
//   console.log("del");
//   clg.innerHTML = `${clg.innerHTML.length}`;
// });

one.addEventListener("click", () => {
  console.log("one");
  if (clg.innerHTML === "0") {
    clg.innerHTML = `1`;
  } else {
    clg.innerHTML = `${clg.innerHTML}1`;
  }
});

two.addEventListener("click", () => {
  console.log("two");
  if (clg.innerHTML === "0") {
    clg.innerHTML = `2`;
  } else {
    clg.innerHTML = `${clg.innerHTML}2`;
  }
});

three.addEventListener("click", () => {
  console.log("three");
  if (clg.innerHTML === "0") {
    clg.innerHTML = `3`;
  } else {
    clg.innerHTML = `${clg.innerHTML}3`;
  }
});

four.addEventListener("click", () => {
  console.log("four");
  if (clg.innerHTML === "0") {
    clg.innerHTML = `4`;
  } else {
    clg.innerHTML = `${clg.innerHTML}4`;
  }
});

five.addEventListener("click", () => {
  console.log("five");
  if (clg.innerHTML === "0") {
    clg.innerHTML = `5`;
  } else {
    clg.innerHTML = `${clg.innerHTML}5`;
  }
});

six.addEventListener("click", () => {
  console.log("six");
  if (clg.innerHTML === "0") {
    clg.innerHTML = `6`;
  } else {
    clg.innerHTML = `${clg.innerHTML}6`;
  }
});

seven.addEventListener("click", () => {
  console.log("seven");
  if (clg.innerHTML === "0") {
    clg.innerHTML = `7`;
  } else {
    clg.innerHTML = `${clg.innerHTML}7`;
  }
});

eight.addEventListener("click", () => {
  console.log("eight");
  if (clg.innerHTML === "0") {
    clg.innerHTML = `8`;
  } else {
    clg.innerHTML = `${clg.innerHTML}8`;
  }
});

nine.addEventListener("click", () => {
  console.log("nine");
  if (clg.innerHTML === "0") {
    clg.innerHTML = `9`;
  } else {
    clg.innerHTML = `${clg.innerHTML}9`;
  }
});

zero.addEventListener("click", () => {
  console.log("zero");
  if (clg.innerHTML === "0") {
    clg.innerHTML = `0`;
  } else {
    clg.innerHTML = `${clg.innerHTML}0`;
  }
});

point.addEventListener("click", () => {
  console.log(".");
  clg.innerHTML = `${clg.innerHTML}.`;
});

div.addEventListener("click", () => {
  console.log("div");
  clg.innerHTML = `${clg.innerHTML}/`;
});

mul.addEventListener("click", () => {
  console.log("mul");
  clg.innerHTML = `${clg.innerHTML}*`;
});

add.addEventListener("click", () => {
  console.log("add");
  clg.innerHTML = `${clg.innerHTML}+`;
});

min.addEventListener("click", () => {
  console.log("min");
  clg.innerHTML = `${clg.innerHTML}-`;
});

eql.addEventListener("click", () => {
  console.log("eql");
  clg.innerHTML = `${eval(clg.innerHTML)}`;
});
