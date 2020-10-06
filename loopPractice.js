
/** 
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
