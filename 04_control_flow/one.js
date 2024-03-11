// control flow or logic flow

// if
// const isUserLoggedIn = true;
// const temperature = 41
// if (temperature > 50) {
//     console.log("yes")

// }
// else {
//     console.log('temperature is greater than 50')
// }

// console.log("Executed")

// const score = 200

// if (score > 200) {
//     let power = "fly"
//     console.log(`User power: ${power}`)
// }

// console.log(`User power: ${power}`)

const balance = 1000;

//if(balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//   console.log("less than");
// } 
// else if (balance < 750) {
//   console.log("less than 750");
// } 
// else if (balance < 900) {
//   console.log("less than 900");
// }
// else {
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInfromGoogle = true
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course")
}

if (loggedInfromGoogle || loggedInFromEmail) {
    console.log("Your are logged in")
}