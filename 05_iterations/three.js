// for of
// ["", "", ""]
//[{}, {}, {}]


// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

const greetings = "Hello World"
for (const greet of greetings) {

    if (greet.includes(" "))
    {
        continue
    }
    console.log(`Each character is ${greet}`)
}

// Maps

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map)