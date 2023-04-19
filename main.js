// array
// var arr = [1, 2, "a", undefined];
// console.log(arr);
// console.log(arr[0]);

// var arr = new Array(1, 2, 3, 4, 5);
// console.log(arr);

// dictionary
// var dict = {
//   name: "pixel8cloud",
//   age: "1 years",
//   "upload video": "on yt",
// };
// console.log(dict);
// console.log(dict["name"]);

// loops
// var book = [1, 2, 3, 4, 5];

// book.forEach(function f(i) {
//   console.log(i);
// });

// for (i of book) {
//   console.log(i);
// }

// for (const key in dict) {
//   const element = dict[key];
//   console.log(element);
// }

// i = 11;
// while (i > 0) {
//   console.log(i);
//   i--;
// }

// do {
//   console.log(i);
//   i--;
// } while (i > 10);

// for (let i = 0; i < book.length; i++) {
//   const element = book[i];
//   console.log(element);
// }

// alert
// alert("this is an alert");
// var promptValue = prompt("this is an alert", "YEs");
// if (promptValue) {
//   console.log("yes");
// } else {
//   console.log("No");
// }

// var confirmValue = confirm("Are u sure?");
// if (confirmValue) {
//   console.log("yes");
// } else {
//   console.log("No");
// }

// DOM mainpulation
// var container = document.getElementById("container");
// console.log(container);

// var c = document.getElementsByClassName("container");
// console.log(c);

// var all = document.querySelectorAll(".nav>ul>li");
// console.log(all);

// change input value
// var input = document.getElementById("input");
// input.value="Searching"

// change style
// input.style.display="none"

// Date Time
// let dateNow = new Date();
// let dateNow = new Date(1000);
// let dateNow = new Date("2023-04-19");

// let dateNow = new Date(year, month, date, hours, minutes, seconds, milliseconds);
// let dateNow = new Date(2023, 1, 19, 4, 30, 59, 23);
// console.log(dateNow);
// console.log(dateNow.getFullYear());
// dateNow.setFullYear(2022);
// console.log(dateNow);

// Arrow FUnction
// let sum = (a, b) => a + b;
// let sum2 = (a, b) => {
//   c = a + b;
//   return c / 2;
// };

// let obj = {
//   names: [1, 2, 3, 4, 5],
//   greet: "Hello",
//   speak() {
//     this.names.forEach((i) => {
//       console.log(i + " " + this.greet);
//     });
//   },
// };

// obj.speak();


// MATH
// let m = Math;
// console.log(m.PI);
// a = 10;
// b = 20;

// console.log(m.ceil(a));
// console.log(m.floor(a));
// console.log(m.ceil(b));
// console.log(m.floor(b));

// let c = a + (b - a) * m.random();
// console.log(c);


// JSON
// var dict = {
//   name: "pixel8cloud",
//   age: "1 years",
//   "upload video": "on yt",
// };
// dict["name"] = "pixel";

// console.log(dict);
// let jsonString = JSON.stringify(dict);
// console.log(jsonString);

// jsonString = jsonString.replace("pixel", "pixel8cloud");

// console.log(jsonString);
// let jsonObject = JSON.parse(jsonString);
// console.log(jsonObject);
