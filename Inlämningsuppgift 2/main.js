/**
* Inlämningsuppgift 2
* Magnus Sundström
* 2016-09-07
**/


"use strict";

// Uppgift 1
function max(a, b) {
	return a > b ? a : b;
}

function min(a, b) {
	return a < b ? a : b;
}


// Uppgift 2
function range(n) {
	var result = [];
	for (var i = 0; i < n; i++) {
		result.push(i);
	}
	return result;
}


// Uppgift 3
function sum(numbers) {
	var sum = 0;
	for (var i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum;
}


// Uppgift 4
function countCharacter(string, char) {
	var count = 0;
	for (var i = 0; i < string.length; i++) {
		if (string[i] === char) {
			count++;
		}
	}
	return count;
}


// Uppgift 5
function palindrome(string) {
	return string === string.split("").reverse().join(""); // Woho! Oneline code!
}


// Uppgift 6
var person = {
	firstname : "Magnus",
	lastname : "Sundström",
	age : 38,
	family : ["Niels", "Maria", "Loe"]
}


// Uppgift 7
function printPerson(person) {
	console.log("Fullname: " + person.firstname + " " + person.lastname + ", Age:" + person.age);
	console.log("Family: " + person.family.join(", "));
}


// Uppgift 8
function createBox(height, width) {
	var box = new Object();
	box.height = height;
	box.width = width;
	return box;
}


// Uppgfit 9
function Triangle(height, width) {
	var triangle = new Object();
	triangle.height = height;
	triangle.width = width;
	triangle.area = function() {
		return height * width / 2;
	}
	return triangle;
}


// Uppgift 10
function attributes(object) {
	var attributeArray = new Array();
	for (var attribute in object) {
		attributeArray.push(attribute);
	}
	return attributeArray;
}