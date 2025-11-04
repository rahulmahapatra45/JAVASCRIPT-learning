
{
    let a = 10
    const b =20
    var c = 30
}
// console.log(a);    does not working because a is define under a scope, outside the scope let is not working
// console.log(b);    does not working because a is define under a scope, outside the scope const is not working
console.log(c);      // working o/p :- 30  ->the value of c

let g_variable = 300
{
    let g_variable = 30
    const another = 600
    console.log(`inner the scope g_variable value is ${g_variable}`); // inner the scope g_variable value is 30
    
}
console.log(`Outer the scope g_variable value is ${g_variable}`); //  Outer the scope g_variable value is 300

