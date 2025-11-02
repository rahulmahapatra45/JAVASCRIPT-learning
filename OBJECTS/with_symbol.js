// Here we take a symbol and define it and then put it in objects 

const mySym = Symbol("RRR")

const jsUser = {
    name : "Sangini",
    age : 21,
    location : "jaleswar",
    email : "sang66@gmail.com",
    isLoggedIn : false,
    LastloginDays : ["sunday", "Saturday"],
    [mySym] : "RRRJ"    //  [Symbol(RRR)]: 'RRRJ' output
}    // obj creation

console.log(jsUser);
console.log(jsUser[mySym]);  // access Symbol by object

//suppose you want to change object
jsUser.name = "Sambhunath"
console.log(jsUser.name);  // Sambhunath
//but if you want to freeze -> do not update or modify
Object.freeze(jsUser)
jsUser.name = "Subhankar" // not modify or updated because you freeze the jsUser
console.log(jsUser["name"]);  // Sambhunath will printed , the past value before freeze





