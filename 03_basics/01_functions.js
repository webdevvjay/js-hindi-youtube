function sayName() {
  console.log("V");
  console.log("i");
  console.log("j");
  console.log("a");
  console.log("y");
}

//sayName()

// when (), is used to create defination then it is called parameter and when function is called it is called arguments
// function addTwoNumbers(no1, no2) {
//    console.log( no1 + no2 )
// }

function addTwoNumbers(no1, no2) {
    // let result = no1 + no2
    // return result
    return no1 + no2
 }
 

const result = addTwoNumbers(7, 8)

//console.log("Result is ", result)

function loginUserMessage(username = "Sam") {
    if(!username) {
        // username === undefined and !username is equal
        console.log("Please enter username")
        return

    }
    return `${username} just logged in`
}

loginUserMessage("Vijay") // this function is executed but we have not instructed it to print it.

console.log(loginUserMessage("Vijay"))