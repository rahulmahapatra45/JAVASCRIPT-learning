// OBJECTS PART TWO

const tinderUser_Deafult = {}  // non singleton object 
const tinderUser = new Object() // singleton object 

tinderUser_Deafult.id ="123bbj"
tinderUser_Deafult.name = "Rahul Mahapatra"
tinderUser_Deafult.isLoggedIn = false 

console.log(tinderUser_Deafult); // o/p :- { id: '123bbj', name: 'Rahul Mahapatra', isLoggedIn: false }

const regular_user = {
    email : "gggy784y8@gmail.com",
    fullName : {
        userfullname : {
            firstName : "Rahul",
            LastName : "Mahapatra"
        }
    }
}

console.log(regular_user.fullName.userfullname.LastName); // Mahapatra

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d" }
// NOW COMBINE TWO OBJECTS 
const obj3 = {obj1,obj2}
console.log(obj3);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// see two types 
const obj4 = Object.assign({},obj1 , obj2) // target = {}
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj4 === obj1); // false

const obj5 = {1 : "a", 2 : "b"}
const obj6 = {3 : "c", 4 : "d" }
//now target is obj5
const obj7 = Object.assign(obj5, obj6) // here we dont use {} empty object as a target 
console.log(obj7 === obj5);  // true


const users = [
    {
        id : 1,
        name : "Rahul"
    },
    {
        id : 2,
        name : "Sohan"
    }
] // Array of objects
console.log(users[0].name);  // Rahul is the output

// find keys and values of a object
console.log(Object.keys(tinderUser_Deafult));  // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser_Deafult)); // [ '123bbj', 'Rahul Mahapatra', false ]












