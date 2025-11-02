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

//console.log(jsUser);
console.log(jsUser[mySym]);

// Function
jsUser.greetings = function(){
    console.log("HELLO JS USERS , WHATS UP !");
    
}
console.log(jsUser.greetings);  // [Function (anonymous)]
console.log(jsUser.greetings());  // HELLO JS USERS , WHATS UP !

jsUser.greetingsTwo = function(){
    console.log(`Hello js user ${this.name}`);
    
}
console.log(jsUser.greetings());       // HELLO JS USERS , WHATS UP !
console.log(jsUser.greetingsTwo());    //Hello js user Sangini



