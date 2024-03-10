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
    //return `${username} just logged in`
}

loginUserMessage("Vijay") // this function is executed but we have not instructed it to print it.

//console.log(loginUserMessage("Vijay"))

// function with objects

function calculateCartPrice(val1, val2,...num1) {
    return num1
}
// ... is also called rest operator

//console.log(calculateCartPrice(200, 400, 500, 600, 700))

const user = {
    username:"Vijay",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user)

handleObject({
    username: "Sam Altman",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 500, 300, 400, 800]))