let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate); // Object

let myCreateDate = new Date("01-14-2023")
let myTimeStamp = Date.now()
console.log(myTimeStamp); // give outputs in milisecond
console.log(myCreateDate.getTime());
console.log(Math.floor((Date.now()/1000))) // 

let newDate = new Date()
console.log(newDate.getMonth()); // 0 -> january 9-> october .... 0 based indexing type
console.log(newDate.getDay());   // 0 -> sunday 4-> thursday

console.log(newDate.toLocaleString('default', {
    weekday : "long",
}))                                           // Thursday





