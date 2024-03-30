function mutltiplyBy5(num) {
    return num*5
}

mutltiplyBy5.power = 2

console.log(mutltiplyBy5(5));
console.log(mutltiplyBy5.power);
console.log(mutltiplyBy5.prototype);

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function() {
    console.log(`score is ${this.score}`)
}

const chai = new createUser("chai",25)
const tea = new createUser("tea",250)

chai.printMe()

/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new javascript object. 

A prototype is linked: The newly created object gets linked to the protype property of the contructor function. This means that it has access to properties and methods defined on the contructor's prototype.

The contructor is called : The contructor function is called with the specified agruments and this is bound to the newly created object. If no explicit return value is specified from the contructor, javascript assumes this, the newly created object, to be the intented return value.

The new object is returned: After the contructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), then newly created object is returned 
 */