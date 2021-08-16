// var obj = {
//     count : 100,
//     doSomethingLater : function(){ // of course, arrow functions are not suited for methods
//         setTimeout( () => { // since the arrow function was created within the "obj", it assumes the object's "this"
//             this.count++;
//             console.log(this.count);
//         }, 300);
//     }
// }

// obj.doSomethingLater();



var arguments = [1, 2, 3];
var arr = () => arguments[0];

console.log(arr()); // 1

function foo(n) {
  var f =  () => arguments[0] + n;
  return f();
}

console.log(foo(3)); // 1 // 3 + 3 = 6



//function
var c = (a,b) => a + b;
c(4,5);
console.log(c(4,5));

let max = (a,b) => a > b ? a : b;
console.log(max(4,5));

//for 
const animal = [
  2,
  3,
  4,
  5
]
var sum = animal.reduce((a, b) => a + b);
// 14
console.log(sum);
var even = animal.filter(v => v % 2 == 0);
// [2,4]
console.log(even);
var double = animal.map(v => v * 2);
// [4,6,8,10]
console.log(double);

// var tripper = animal.map (d => d * 3);
// console.log(tripper);

// function multiply(a,b) {  
//   console.log(a,b);
//   return a;
// }

// var listanimal = ["tiger", "cat", "bear", "bird"];

// const user = {
//   name: "Soccer",
//   age: 34,
//   hobby: "Soccer",
//   isMarried: false,
//   sleeps: ["sahara","teacher","man"],
//   shout: function() {
//     console.log("ducthanhpr");
//   }
// };
// var list = [
//   {
//     username: "ducthanpr",
//     password: "123"
//   },
//   {
//     username: "quynhham",
//     password: "321"
//   }
// ];

// var database = [
//   {
//     username: "ducthanhpr",
//     password: "123"
//   }
// ];
// var newsFeed = [
//   {
//     username: "aldfjksdfjl",
//     timeline: "So tired form all that learn"
//   },
//   {
//     username: "safkladfsdkfkf",
//     timeline: "Javascript is so coolll"
//   }
// ];

// var userNamePrompt = prompt("What's your username?");
// var passwordPrompt = prompt("What's your password?");

// function signIn (user, pass) {
//   if (user === database[0].username && pass === database[0].password) {
//     console.log(newsFeed);
//   }
//   else {
//     alert ("Sorry, wrong username and password");
//   }
// }
// signIn(userNamePrompt, passwordPrompt);

//vong lap for
var todos = [
  "clear room",
  "brush teeth!",
  "excercise",
  "study javascript",
  "eat healthy!"
];

// for (var i = 0; i < todos.length; i++) {
//   console.log(todos[i] + "!");
// }

//loop while
// var count = 0;
// while (count < 10) {
//   console.log(count);
//   count++;
// }

//loop do white 
// var count = 10
// do {
//   console.log(count);
//   count--
// } while (count > 0);

//loop foreach 
todos.forEach(function(todo, i,b){
  
  console.log("Work to do on weekeen:",todo,i);
})