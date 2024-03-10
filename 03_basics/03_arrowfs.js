const user = {
    username: "Vijay",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to website`);
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
//console.log(this)

// function chai() {
//     let user = "Vijay"
//     console.log(this.user)
// }

// chai()


// const chai = function() {
//     let user = "Vijay"
//     console.log(this.user)
// }

const chai = () => {
    let user = "Vijay"
    console.log(this)
}
//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//const addTwo = (num1, num2) => num1 + num2 // this is implicit return, return keyword ommited
//const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Vijay"})

console.log(addTwo(3,22))

//const myArray = [2, 5, 3, 4, 6, 8]

