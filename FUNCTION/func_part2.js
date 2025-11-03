function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Rahul")) // Rahul just logged in
console.log(loginUserMessage()) // if we dont pass value then o/p :- undefined just logged in

// function with default value
function loginUserMessage2(username ="nn"){
    return `${username} just logged in`
}

console.log(loginUserMessage2()); // if you dont pass any value then by default it takes nn 


