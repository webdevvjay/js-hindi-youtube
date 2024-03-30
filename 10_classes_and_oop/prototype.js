/* let myName = "vijay     "
let myChannel = "chai    "

console.log(myName.trim().length); */

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.vijay = function() {
    console.log(`vijay is present in all objects`)
}

Array.prototype.heyVijay = function() {
    console.log(`Vijay say Hello`)
}
// heroPower.vijay()

myHeros.vijay()
myHeros.heyVijay()
// heroPower.heyVijay()

// Inheritance

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true
} 