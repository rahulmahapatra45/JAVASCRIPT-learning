// Datatype -> 1) primitive 2) non primitive 


/*
Primitive datatype has 7 types.
primitive datatypes are :-
String , Number , Boolean , null , undefined, Symbol , BigInt
Symbol - unique
*/

/*
Reference(Non primitive)
Arrays , Objects , Functions
*/

// javascript dynamically typed language or statically type language??
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);   // false , Symbols are unique
