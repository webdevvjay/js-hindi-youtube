// Promise one

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network

    setTimeout(function() {
        console.log('Async task is complete')
        resolve()
    }, 1000);
})

promiseOne.then(function() {
    console.log("Promise Consume");
})

// two
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async taske 2")
        resolve()
    }, 1000);
}).then(function() {
    console.log("Async 2 resolved")
})


// third Promise

const promiseThree = new Promise( function(resolve, reject){
    setTimeout(function(){
      resolve({username: "Chai", email: "chaiaurcode@example.com"})  
    }, 1000);
})

promiseThree.then(function(user) {
console.log(user);
})


// Four Promise

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({username: "vijay", password: "123"})
        } else{
            reject('ERROR something went wrong')
        }
    }, 1000);
})

promiseFour
.then((user)=> {
    console.log(user);
    return user.username
})
.then(function(username) {
console.log(username);
})
.catch(function(error){
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))


// Promise Five

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({username: "Javascript", password: "123"})
        } else {
            reject('ERROR: Js went Wrong')
        }
    }, 1000);
})

async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response)
   } catch (error) {
    console.log(error)
   }
}

consumePromiseFive()


// for the next class

async function getAllUser() {
  try {
    const respo = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await respo.json();
    console.log(data)
  } catch (error) {
    console.log("E");
  }
}

getAllUser()