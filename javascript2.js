window.onload = SanghyunFunction;
function SanghyunFunction () {
	alert("Let's get started Sanghyun's Mad libs!!");

var myAuthor = prompt("What is your name?");
var hookOutputAuthorName = document.getElementById("outputAuthorName");
hookOutputAuthorName.innerHTML = myAuthor;

var myButton = document.getElementById("submitButton");
myButton.onclick = makeMadLib;
}
function makeMadLib () {
	var myAdjectiveOne = document.getElementById("inputAdjectiveOne").value;
	document.getElementById("adjectiveOne").innerHTML = myAdjectiveOne;
	
	var myVerbOne = document.getElementById("inputVerbOne").value;
	document.getElementById("verbOne").innerHTML = myVerbOne;
	
	var myAdjectiveTwo = document.getElementById("inputAdjectiveTwo").value;
	document.getElementById("adjectiveTwo").innerHTML = myAdjectiveTwo;
	
	var myPluralNounOne = document.getElementById("inputPluralNounOne").value;
	document.getElementById("pluralNounOne").innerHTML = myPluralNounOne;
	
	var myVerbTwo = document.getElementById("inputVerbTwo").value;
	document.getElementById("verbTwo").innerHTML = myVerbTwo;
	
	
}