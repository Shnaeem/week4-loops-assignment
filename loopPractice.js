/** A)
***1) Given the array,
Loop through the array to find the longest word by how many letters each string contains.
Which other variables will you be needing?  
2) Print the length of the longest word to the console.
3) Print the longest word to the console.  
4) Now what if the array was 
Since all the words are in one string together, how would you solve this? 

*/

let lunchArray= [ 'Burger', 'Salad', 'Lasagna', 'Sushi', 'Meatloaf'];

function findLongestWord(str) {
  let strSplit = str;
  let longestWordlength = 0;
  for(let i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWordlength){
    longestWordlength = strSplit[i].length;
    lngwrd = strSplit[i]
     }
  }
  console.log(longestWordlength);
  console.log(lngwrd);
  return longestWordlength;
}

findLongestWord(lunchArray);

//if the array was one whole string.

let lunchArray= 'Burger Salad Lasagna Sushi Meatloaf';

function findLongestWord(str) {
  let strSplit = str.split(' ');
  let longestWordlength = 0;
  for(let i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWordlength){
    longestWordlength = strSplit[i].length;
    lngwrd = strSplit[i]
     }
  }
  console.log(longestWordlength);
  console.log(lngwrd);
  return longestWordlength;
}

findLongestWord(lunchArray);


/**
B) Write a function that returns elements on odd positions in a list. 
*/

let array = [1,2,3,4,5];
console.log(array.filter(function(el, ind){
  return ind % 2 === 0;
}));

/**
C) Compute the factorial of any given number.
 */
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(let i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  let n = 4;
  answer = factorial(n)
  console.log("The factorial of " + n + " is " + answer);



/** 
 * 
 * D)
Conditional Practice
Write an if statement and determine a condition where:
If mpg is less than or equal to 10, console “gas guzzler”
If mpg is  between 11 - 16, console “Planet still frowns upon this, and so does your wallet”
If mpg is between 17-20, console “ it’s palpable”
If mpg is between 21-29, console “ Atmosphere smiles at your decision”
If mpg is between 30-35, console “ Not many gas stops will be taken”
If mpg is above 35 console “ The fish of the sea smile at your conservation”
If mpg is 120 console “/if you are using the Tom Ogle fuel system, props”
After testing each one, change the mpg variable to ensure it is good. 
*/

let mpg = `500`;
if (mpg <= 10) {
  console.log(`it's palpable`);
} else if (mpg >= 11 && mpg <= 16) {
  console.log(`planet frowns upon this, so does wallet.`);
} else if (mpg >= 17 && mpg <= 20) {
  console.log(`It's palpable.`);
} else if (mpg >= 21 && mpg <= 29) {
  console.log(`atmosphere smiles at your decision.`);
} else if (mpg >= 30 && mpg <= 35) {
  console.log(`Not many gas stops will be taken.`);
} else if (mpg >= 35 && mpg <= 119) {
  console.log(`the fish of the sea smile at your conservation.`);
} else if (mpg == 120) {
  console.log(`if youre using the Tom Ogle fuel system, props`);
} else {
  console.log(`Too high`);
}
