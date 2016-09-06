/**
* Inlämningsuppgift 1
* Magnus Sundström
* 2016-09-06
**/

"use strict";

// Uppgift 1
console.log( 5 * 2 <  12 );
console.log( 55 >  22 );
console.log( 16 / 4 ==  4 );
console.log( 8 + 2  <= 128 );
console.log( 32 * 8  != 255 );


// Uppgift 2
var tisdag = "Tisdag";
var hamburgare = "Hamburgare";
var illBeBack = "I'll be back";
console.log(tisdag.substring(0, 3));
console.log(hamburgare.substring(3));
console.log(illBeBack.substring(5));


// Uppgift 3
var itsLearning = "It's Learning";
var jsGoodParts = "JavaScript: The Good Parts";
console.log(itsLearning.substring(5).toUpperCase());
console.log(jsGoodParts.substring(16).toLowerCase());


// Uppgift 4
var numbers = [128, 256, 512, 1024, 2048];
var sumOfNumbers = 0
var length = numbers.length
for (var i = 0; i < length; i++) {
	sumOfNumbers += numbers[i];
}
var avgNumber = sumOfNumbers / length;
numbers.push(sumOfNumbers);
console.log("Sum: " + sumOfNumbers);
console.log("Avg: " + avgNumber);
console.log("Arr: " + numbers);


// Uppgift 5
var countries = ["Sweden", "Denmark", "Finland", "Norway"];
console.log(countries[1].substring(0, 3));

var numLetters = 0;
var numCountries = countries.length;
for (var i = 0; i < numCountries; i++) {
	numLetters += countries[i].length;
}
var avgLetters = numLetters / numCountries;
console.log("Avg num of letters: " + avgLetters);


// Uppgift 6
var values = [3, 5, "Jane", true, 144, false];
console.log(values.reverse());


// Uppgift 7
var names = ["Jane", "Joe", "Eliza"];
var ages = [21, 34, 22];
var hasPet = [true, false, true];
var multipleArrays = names.concat(ages).concat(hasPet);
console.log(multipleArrays);


// Uppgift 8
var actors = ["Sherlock", "Watson", "Bo"];
console.log(actors.join(" - "));


// Uppgfit 9
var amount = 60;
if (amount < 50) {
	console.log("Less then 50!");
} else if (amount < 65) {
	console.log("Optimal range for the amount!");
} else {
	console.log("Too much!");
}


// Uppgift 10
var result = "";

for (var i = 0; i < 8; i++) {
	result += "#";
	console.log(result);
}