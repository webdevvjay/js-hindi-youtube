const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and CurrentValue: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, currval) => acc+currval, 0 )

console.log(myTotal)

const shoppingCart = [
    {
        itmeName: "js Course",
        price: 2999
    },

    {
        itmeName: "Android development Course",
        price: 5999
    },

    {
        itmeName: "Python Course",
        price: 999
    },

    {
        itmeName: "Data Science Course",
        price: 12999
    },
]


const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);