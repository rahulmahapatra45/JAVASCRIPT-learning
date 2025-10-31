const marvel_heros = ["thor", "IronMan", "Spiderman"]
const dc_heros = ["SuperMan", "Batman", "flash", "antMan"]
// spread operator
const all_new_heros = [...marvel_heros , ...dc_heros]
console.log(all_new_heros);

// 
const another_array = [1, 2, 3, [4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
/*[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
] */ // values are spread out from another_array to real_another_array

console.log(Array.isArray("Hitesh"));  // false

console.log(Array.from("Hitesh"))  // [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name : "Hitesh"})) // create empty array because compiler cant understand which array should create key or values


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]



