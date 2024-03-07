const name = "vijay"
const repoCount = "50"

//console.log(name + repoCount + "Value")

// today we use backticks (`)

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Vijay/Singh/Diggi")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.indexOf("a"));

const newString = gameName.substring(0,3)
console.log(newString)

const anotherString = gameName.slice(-10, 4)
console.log(anotherString)

const newStringOne = "  Vijay  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vijaydiggi.com/vijay%20diggi"

console.log(url.replace('%20','king'))

console.log(url.includes("villj"))

console.log(gameName.split('/'));