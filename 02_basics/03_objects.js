//singleton
// object.create

// object literals
const mySym = Symbol("key1")

const jsUser = {
    name : "Vijay",
    "full name": "Vijay Singh Diggi",
    age: 18,
    [mySym]: "key1",
    location: "Ckp",
    email: "vijay@gmail.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(typeof jsUser[mySym])

jsUser.email = "vijay@chatgpt.com"
//console.log(jsUser["email"])
//Object.freeze(jsUser)
jsUser.email = "vijay@freeze.com"
//console.log(jsUser)

jsUser.greeting = function() {
    console.log("hello Js user");
}

jsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())