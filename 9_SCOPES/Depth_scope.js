function one(){
    const username = "Rahul"

    function two(){
        const website = "Youtube"
        console.log(username);
        
    }
    //console.log(website);
    two()
    
}
one()

if(true){
    const username = "Samiran"
    if(username === "Samiran"){
        const website = "Youtube"
        console.log(username + website);
        
    }
    //console.log(website);  // website does not work outside the scope
    
}
//console.log(username);  // username also does not work outside the scope
  

// Interesting concept
// case 1
console.log(addone(5))    // in that case no error but see in case 2
function addone(num){
    return num + 1
}

//case 2
// in that type of function declarion if we call function before declare then error occures
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))   // o/p : 7


