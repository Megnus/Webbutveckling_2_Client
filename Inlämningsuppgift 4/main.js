/**
* Inlämningsuppgift 3
* Magnus Sundström
* 2016-09-09
**/


"use strict";

// Objekt för att hantera AJAX
var omdbAPI = new XMLHttpRequest();
// Den URL vi ska använda oss av (obs. att denna har förvalt "the revenant")
var omdbURL = "http://www.omdbapi.com/?t=the%20revenant&type=movie";

// Vad vill vi göra när vi fått ett svar?
omdbAPI.addEventListener("load", function() {
    // Konvertera resultatet från JSON
    var result = JSON.parse(this.responseText);
    // Skriv ut resultatet
    console.log(result);
});

// Ange vilken metod (get) samt URL vi ska skicka med
omdbAPI.open("get", omdbURL, true);
// Skicka förfrågan
omdbAPI.send();


// // Uppgift 1
// var messageBox = document.getElementById('message-box');
// document.getElementById('success').addEventListener('click', event);
// document.getElementById('error').addEventListener('click', event);
// document.getElementById('info').addEventListener('click', event);

// function event(e) {
// 	messageBox.className = e.target.id;
// }


// // Uppgift 2
// var ul = document.getElementById("items");
// document.getElementById('add-item').addEventListener('click', function() {
// 	var text = prompt("Please create a item: ");
// 	var li = document.createElement("li");
// 	var textNode = document.createTextNode(text);
// 	li.appendChild(textNode);
// 	ul.appendChild(li);
// });


// // Uppgift 3
// document.getElementById('remove-item').addEventListener('click', function() {
// 	ul.removeChild(ul.lastElementChild);
// });


// // Uppgift 4
// var buttons = document.getElementsByClassName("remove-list-item");

// for (var i = 0; i < buttons.length; i++) {
// 	buttons[i].addEventListener('click', function() {
// 		// this.parentNode.remove(); <-- he method node.remove() is implemented in the DOM 4 specification.
// 		// Workaround for the expression above.
// 		var node = this.parentNode;
// 		node.parentNode.removeChild(node);
// 	});
// }


// // Uppgift 5
// var form = document.getElementById('apply-for-pet');

// form.addEventListener('submit', function(event) {
// 	// Del 1
// 	var inputs = this.getElementsByTagName('input');
// 	for (var i = 0; i < inputs.length; i++) {
// 		console.log(inputs[i].name + " : " + inputs[i].value);	
// 	}
	
// 	// Del 2
// 	var firstnameCharLenght = inputs.firstname.value.lenght;
// 	var lastnameCharLenght = inputs.lastname.value.lenght;
// 	var age = parseFloat(inputs.age.value);
// 	var emailCharLenght = inputs.email.value.lenght;
// 	var checked = false;
// 	var valid = false;

// 	for (var i = 0; i < inputs.length; i++) {
// 		if (inputs[i].type === 'radio') {
// 			checked = checked || inputs[i].checked;
// 		}
// 	}

// 	if (firstnameCharLenght > 0 && firstnameCharLenght < 50) {
// 		alert("Firstname can only be between 0 to 50 characters!");
// 	} else if (lastnameCharLenght > 0 && lastnameCharLenght < 50) {
// 		alert("Lastname can only be between 0 to 50 characters!");
// 	} else if (isNaN(age) || age < 0) {
// 		alert("Age is not a valid number!");
// 	} if (emailCharLenght > 0 && emailCharLenght < 50) {
// 		alert("E-mail can only be between 0 to 50 characters!");
// 	} else if (!checked) {
// 		alert("Not pet has been picked!");
// 	} else {
// 		event.target.submit();
// 	}

//     event.preventDefault();  
// }
// );