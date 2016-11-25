/**
* Inlämningsuppgift 4
* Magnus Sundström
* 2016-11-14
**/

/*
* Helpful sites:
* https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Sending_forms_through_JavaScript
* https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started
*/

"use strict";

window.addEventListener("load", function () {
	var form = document.getElementById("search-form");
	var container = document.getElementById("result");

	form.addEventListener("submit", function (event) {
		event.preventDefault();
		var query = form.elements["query"].value;
		sendData(query);
	});

	function sendData(movieTitle) {
		var omdbAPI = new XMLHttpRequest(),
			omdbURL = "http://www.omdbapi.com/?s=" + movieTitle + "&type=movie";
		omdbAPI.open("get", omdbURL, true);
		omdbAPI.send();
		omdbAPI.addEventListener("load", function() {
			var result = JSON.parse(this.responseText);
			updateMovies(result.Search)
		});
	}

	function clearMovies() {
		while (container.hasChildNodes()) {
			container.removeChild(container.lastChild);
		}
	}

	function fetchMovies(searchResult) {
		for (var index in searchResult) {
			var movieTitle = searchResult[index].Title,
				movieYear = searchResult[index].Year,
				movieText = movieTitle + " (" + movieYear + ")";
			fetchElement(movieText);
		}
	}

	function fetchElement(text) {
		var element = document.createElement("p"),
			textNode = document.createTextNode(text);
		element.appendChild(textNode);
		container.appendChild(element);
	}

	function updateMovies(searchResult) {
		clearMovies();
		if (searchResult !=  undefined) {
			fetchMovies(searchResult);
		} else {
			fetchElement("There are no films in the database!");
		}
	}
});