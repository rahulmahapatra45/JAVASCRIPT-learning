//String Related
const name = "Samaresh"
const money = 500 
console.log(`my name is ${name} and i have ${money} rupees`);

const gameName = new String('hitesh hc v '); 
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'))

const newString = gameName.substring(1,4)
console.log(newString);

const OneStr = "     rahul    "
console.log(OneStr);  // string print with spaces
console.log(OneStr.trim()); // string print without starting and ending spaces

const url = "https://rahul.com/hitesh%20jckfhkd"
console.log(url.replace('%20','-'))  // replace %20 with '-'
console.log(url.includes('itesh')) // true

// convert  string  to  array
console.log(gameName.split(' ')); // split based on space gameName = 'hitesh hc v ' here . op- [ 'hitesh', 'hc', 'v', '' ]





