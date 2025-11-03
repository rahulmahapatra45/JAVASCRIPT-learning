// Rest operator , used for passing multiple value in function
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400));  // [ 200, 300, 400 ] -> o/p


function different(val1 , val2 , val3, ...num2){
    return num2
}
different(200,300,400,500,600,700) // val1 = 200 , val2 = 300, val3 = 400 , num2 = rest
console.log(different(22,33,44,55,66,77,88)); // [ 55, 66, 77, 88 ] because function return num2 only
// here num2 = 55,66,77,88

const user ={
    username : "Sangita",
    price : "50000"
}
function handle_object(any_obj){
    console.log(`Username is ${any_obj.username} and price is ${any_obj.price}`);
    
}
handle_object(user)  // Username is Sangita and price is 50000

// you can directly pass object like :-
function object_handling(obj){
    console.log(`Username is ${obj.username} and price is ${obj.price}`);
}
// call method with object creation
object_handling({
    username : "Shayam",
    price : "6667"
})  // Username is Shayam and price is 6667


// with arrays
const newArray = [200 , 300 , 400 ,500 , 600]
function return_2nd_value(getarray){
    return getarray[3]
}
console.log(return_2nd_value(newArray)); // 500




