const accountId = 144553
let accountEmail = "vijay@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"


//accountId = 2 // not allowed with const
accountEmail = "vjy@gamil.com"
accountPassword ="3487598"
accountCity = "Jamshedpur"
let accountState;

console.log(accountId);

/*
prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])