// loop thru the array of dwarves and build up a string containing the ordinal num,ber (1, 2, 3...) and the name.
//
  function dwarfRollCall(dwarves) {
    var result= ""; // our intending returned value (a place to hold the computed value)
        for (let i=0; i<dwarves.length; i++){
          result += (i+1) + ". " + dwarves[i] + " "; 
          // add a number and name for the next dwarf to the result so far
        }
    return result;
  }
  /* */
function summonCaptainPlanet(planeteerCalls){
  let result = [];// our intending returned value (a place to hold the computed value)
  for (let i = 0; i< planeteerCalls.length; i++){
    result[i]= planeteerCalls[i].toUpperCase() + "!";
    // create a new array element with a capitalized name and an added "!"
  }
  return result;
}

function longPlaneteerCalls(words) {
  for ( let i = 0; i< words.length; i++){ // loop thru array
  if (words[i].length>4){ // find any word having more than 4 charcaters
    return true;
  }
  }
  return false; // did not find one
}

function findTheCheese (foods) {
  for (let i= 0; i<foods.length; i++){ //  loop thru array
    if (foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert"){
      // find a value in the cheese list, and return first one found
      return foods[i];
    }
  }
 return "no cheese!"; // none found
}
