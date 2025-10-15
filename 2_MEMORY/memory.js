// Memories are two types :- 1) stack 2) heap
// Stack (primitive)    Heap (Non primitive)
// when you used stack memory compiler gives a copy of that variable
// when you use Heap memory copiler gives the reference of the variable

// Example of Stack memory , where we use copy of a variable not references
let myYoutubename = " rrgigabyte" 
let newName = myYoutubename
newName = "my poetry"
console.log("myYoutubename is :- "+myYoutubename);
console.log("newName is "+ newName);

// Example of Heap memory where we use references so the main value will change if we assign this obj to another obj
let userOne = {
    email : "hcv@gmail.com",
    upi : "hdfc@ybl",
    Password : "12bb56cc3"
}
let userTwo = userOne
userTwo.email = "rahul#@gmail.com"

console.log("both the email are same because of they share references ");

console.log(userOne.email);
console.log(userTwo.email);



