/*
1st ctreate a function named dwarves that accepts an array of names 
2st create a loop, to loop through the names array
3rd return string with names starting at number 1
 starting at 0 as the first item in the array, go from left to right
.length method to keep the loop dymamic, 
so it accepts any length of the array, keep increasing i(during the 
length of the array)*/

function dwarfRollCall(names){
  var str = ""; 
  /* created epty string so we could add items to it within a loop*/
  for(let i=0; i<names.length; i++){
  // resetting the value of the string, using it's current value
  //(i+1) gives us number 1, insted of 0
  //adding 1 to the index
  //names[i] acces the array to give us the name of dwarf within the array.
   str = str + (i+1) +". " + names[i] +" "
  }
  return str;
}

function summonCaptainPlanet(planeteerCalls){
  for(let i=0;i<planeteerCalls.length;i++){
    planeteerCalls[i]
    /*alreary captured the value, now we need to change it,reset it*/
    planeteerCalls[i] = planeteerCalls[i].toUpperCase() +"!"
  }
return planeteerCalls;  
}

function longPlaneteerCalls(calls){
  for (let i=0;i<calls.length; i++){
    if(calls[i].length > 4){
      return true
    }
  }
  return false
}
/*1st defined function that accepts an array
2nd crreated the for loop so it can check for the condition
3rd  if statement takes an array and checks it through the length and makes sure that it's bigger than 4
4th it returns true if the condition is met and the word is bigger than 4 letter, if not met it returns falls(the final return statement should be after the loop, so it can run the whole lenth of the array*/

function findTheCheese(arrayOfStrings){
  for (let i=0; i<arrayOfStrings.length;i++){
    if(arrayOfStrings[i] === "cheddar"||
    arrayOfStrings[i]==="gouda"||
    arrayOfStrings[i] ==="camembert"||
    arrayOfStrings[i] ==="swiss cheese"){
      return arrayOfStrings[i]
    }
  }
 return "no cheese!"
 }
 
 function workWithB(words){
   var newArray = [];
   for(i=0; i<words.length; i++){
     if((words[i][0])=="B"){
       newArray.push(words[i])
     }
     //will give the first characher of the words
    // return words[i];
    
   }
return newArray;}