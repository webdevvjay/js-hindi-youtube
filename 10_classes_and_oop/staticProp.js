class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }
    
    static createId() {
        return `12345`
    }
}

const vijay = new User("vijay")
//console.log(vijay.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email;
    }
}

const spoon = new Teacher("spoon", "spoon@gmail.com")
console.log(spoon.createId())