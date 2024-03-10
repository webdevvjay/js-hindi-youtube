//console.log("hello I am Object part Two")

//const tinderUser = new Object() // this is a singleton object

const tinderUser = {}

tinderUser.id = "1234tyu"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "someone@user.com",
    fullname1: {
        userFullname: {
            firstname: "vijay",
            lastname: "diggi"
        }
    }
}
//console.log(regularUser.fullname.userFullname.firstname) // ? optional chaining when the object name is not present

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1, obj2}

//const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2} // ... is a spread operator
//console.log(obj3)

const users = [
    {
        id: 1,
        email: "myemail@gmail.com"
    },
    {
        id: 1,
        email: "myemail@gmail.com"
    },
    {
        id: 1,
        email: "myemail@gmail.com"
    }

]

users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLogged'))


// Object part three

const course = {
    coursename: "Js in Hindi",
    price: "999",
    courseInstructor: "Hitesh Choudhary"
}

//course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor)

// json 

// {
//     "name": "Vijay Singh Diggi",
//     "Coursename": "Js in Hindi",
//     "Price": "Free"
// }

[
    {},
    {},
    {},
    {}
]
