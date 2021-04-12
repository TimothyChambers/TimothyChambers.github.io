var button = document.getElementById("result");
var ul = document.querySelector("ul");
var times = document.getElementById("times")

function resetForm() {
	document.getElementById("form").reset();
}

function timesValue() {
	return parseInt(times.value);
}

function rollFunction() {
	var num0 = document.getElementById("dice").value; 
	var num1 = Math.floor((Math.random()*num0) + 1);
	var num2 = document.getElementById("prof").value;
	var num3 = document.getElementById("mod").value;
	var num4 = document.getElementById("oth").value;
	var roll = (num1+parseInt(num2)+parseInt(num3)+parseInt(num4));
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(roll));
	ul.appendChild(li);
}

function diceResult() {
for (i = 0; i < timesValue(); i++) { 
	rollFunction(); 
}
}
