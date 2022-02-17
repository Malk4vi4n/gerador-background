var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("myBody");

function colorSet() {
	body.style.background = "linear-gradient(to bottom right, " 
	+ color1.value 
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = "background: " + body.style.background + ";";
}

function copiaCss(){
	navigator.clipboard.writeText(css.textContent);
}

color1.addEventListener("input", colorSet);

color2.addEventListener("input", colorSet);