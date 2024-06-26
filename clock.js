let clock = document.getElementById("myClock");
let nameSpan = document.getElementById("myName");
let name = prompt("Please enter your name",);

function showTime() {
	var d = new Date();
	var s = d.getSeconds();
	var m = d.getMinutes();
	var h = d.getHours();
	clock.innerHTML = 
	("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
	nameSpan.innerHTML = name;
}

setInterval(showTime, 1000);




