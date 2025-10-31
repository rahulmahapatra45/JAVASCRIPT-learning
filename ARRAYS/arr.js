// Arrays 
const myArr = [0, 1, 2, 3, 4, 5] // elements can be different like example 2
// example 2 ->const a = ["hitesh", "sagnik", 3 , 2 , 1.5 , "ram ", 'a1']
// in js arrays are resizable

//access element
console.log(myArr[2]); 
/* js array-copy-operations create shallow copies. all standard built in copy operatins
with any js objects create shallow copies , rather than deep copies. */

// shallow copies share the same reference but deep copies do not share the same references.
const myArray2 = new Array(1,2,3,4,5)

// Array methods
myArr.push(6)      // add 6 at the end of the array
//console.log(myArr);
myArr.pop()        // delete last element
//console.log(myArr);

// shift and unshift
myArr.unshift(9)   // // 9 add in the first 
//console.log(myArr); 
myArr.shift()      // remove element from first
//console.log(myArr); 

console.log(myArr.includes(9));  // false -- because 9 is not present in array
console.log(myArr.indexOf(9));  // if present then return index if not then return -1

// .join()
const newArr = myArr.join()   // newArr stores string version of myArr
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//slice & splice   (important for interviews)
console.log("A ",myArr);

const myn1 = myArr.slice(1,4)  // take elements from index 1 to 3 here in that case
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3) // take elements from index 1 index 2 index 3 
// original array [0, 1, 2, 3, 4, 5]
console.log(myArr);  // [ 0, 4, 5 ] now in original array outside the range elements are present
console.log(myn2);   //  [ 1, 2, 3 ] 
















