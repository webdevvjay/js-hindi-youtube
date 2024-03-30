// ES6 after

/* class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
} */

/* const chai = new User("Chai", "chai@gmail.com", "1234")

console.log(chai.encryptPassword());
console.log(chai.changeUsername()); */

// behind the scene (Under the hood working)

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "12345")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
