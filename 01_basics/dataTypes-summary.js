// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol("123")
const anotherId = Symbol("123");

//console.log(id === anotherId)

const bigNumber = 5446446446454644854144282855555555555555555555555555555555555484n
//console.log(typeof bigNumber)

// Reference Type (Non-Primitive)
// Arrays, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"]
let myObj ={
    name : "Vijay",
    age: 76,
}

const myFunction = function () {
//console.log("Hello World")
}

myFunction();

// +++++++++++++++++++++++++ stack and heap memory++++++++++

let myYtname = "vijaydiggidesign";
let anotherYtname = myYtname;

anotherYtname = "learningJs"

console.log(myYtname);
console.log(anotherYtname);

let userOne = {
    email: "username",
    upi: "username@ybl"
}

let userTwo = userOne;

userTwo.email  = "vijay@gmail.com";

console.log(userOne.email);
console.log(userTwo.email)
