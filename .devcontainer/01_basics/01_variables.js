const accountID = 144553
let accountEmail = "divya.singh28@gmail.com"
var accountPassword = "123345"
accountCity = "Sikar"
let accountState

// accountID = 2 // not allowed

accountEmail = "hchc@gmail.com"
accountPassword = "212345"
accountCity = "Ranchi"

console.log(accountID);

/*
Prefer not to use var
Because of issue in block and functional scope.
*/

console.table([accountID,accountEmail,accountPassword,accountCity,accountState])
