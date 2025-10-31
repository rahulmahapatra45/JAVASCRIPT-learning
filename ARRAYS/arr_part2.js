const marvel_heros = ["thor", "IronMan", "Spiderman"]
const dc_heros = ["SuperMan", "Batman", "flash", "antMan"]

// marvel_heros.push(dc_heros)  // But it takes arrys as a data
console.log(marvel_heros); 
 /* [
  'thor',
  'IronMan',
  'Spiderman',
  [ 'SuperMan', 'Batman', 'flash', 'antMan' ]
] */
//console.log(marvel_heros[3][3]); // o/p:-   antMan


// marge two arrays
const all_Heros = marvel_heros.concat(dc_heros)
console.log(all_Heros);
/*
[
  'thor',
  'IronMan',
  'Spiderman',
  'SuperMan',
  'Batman',
  'flash',
  'antMan'
]
  */





