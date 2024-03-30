// Object Literal
const user = {
    username: "vijay",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details form Database")
        //console.log(`Username: ${this.username}`)
        //console.log(this)
    }
}

//console.log(user.username)
//console.log(user.getUserDetails())
//console.log(this)

//Contstructor Function

// const promiseOne = new Promise()
// const date = new Date()

function Employee(name, age, gender, nationality) {
    this.name = name
    this.age = age
    this.gender = gender
    this.nationality = nationality
}


function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function() {
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const userOne = new User("vijay", 12, true)
const userTwo = new User("Chai", 11, false)
const userThree = new Employee("Rajesh",29, "Male","Indian")
console.log(userOne.constructor)
//console.log(userTwo)

console.log(userThree instanceof User)
console.log(userThree instanceof Employee)
