/* 
JAVASCRIPT VARIABLES
Complete the required JavaScript code underneath each "EXERCISE". In the end, you will have 5 statements logged to the console using: console.log()
*/

//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."

let jobTitle;
jobTitle = "X";
 let geographicLocation = 'Y'
 let annualSalary = '$N';
 let companyName = 'Z';
 console.log(`You will be a ` + jobTitle + `in ` + geographicLocation +`, making ` +annualSalary +` for ` +companyName);

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.

let currentYear = 2020;
let birthYear = 1965;
console.log(`They are ` + (currentYear-birthYear) +` years old`)


//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

let currentAge = 30;
let maximumAge = 100;
let ammountPerDay = 2;

console.log(`you will need `+ (maximumAge-currentAge) * ammountPerDay +` to last you until the ripe old age of `+ maximumAge)


//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

let circleRadius = 5;
let pi = 3.14;
console.log(`The circumference is `+ 2 * (pi * circleRadius))
console.log(`The area is `+ pi *(circleRadius*circleRadius))



//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let celsiusTemp = 30;
console.log(celsiusTemp +`C`+` is `+ (celsiusTemp * (9/5) + 32) +`F`);

