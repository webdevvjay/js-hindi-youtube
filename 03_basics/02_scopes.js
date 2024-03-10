//var c = 300

let a = 300
if (true) {

    let a = 10
    const b = 20
    //console.log("INNER: ", a)
    
    
}
const Array = [200, 300, 400, 500, 600, 700]

for (let i= 0; i< Array.length;) {
    const element = Array[i]
    //console.log(element)
    ++i
}
//console.log(a)
//console.log(b)
//console.log(c)


// Nested scope

function one () {
    const username = "Vijay"

    function two() {
        const website= "Youtube"
        console.log(username)
    }
    //console.log(website)
    //two()
}

//one()

if (true) {
    const username = "Vijay"
    if (username === "Vijay") {
        const website = " Youtube "
        //console.log(username + website)
    }

    //console.log(website)
}

//console.log(username);


// +++++++++++++++++++++++++++++++++++ Interesting +++++++++++++
console.log(addOne(5))

function addOne(num) {
    return num + 1
}


console.log(addTwo(5))

const addTwo = function(num) {
    return num + 2
}
