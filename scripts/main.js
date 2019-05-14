var mainNav = document.getElementById("js-menu");
var nav = document.getElementById("myNav");

document.getElementsByClassName('closebtn')[0].onclick = function () {
	nav.style.width = "0%";
	document.getElementsByClassName('fa-bars')[0].style.display = "inline";
}

document.getElementsByClassName('fa-bars')[0].onclick = function () {
	nav.style.width = "100%";
	document.getElementsByClassName('fa-bars')[0].style.display = "none";
}


////////////////////////////////////////////////////////////////////////////////////////////
var x = window.matchMedia("(min-width: 1024px)")
click(x) // Call listener function at run time
x.addListener(click)

//if ()

document.getElementsByClassName('nav-links')[0].onclick = function click() {
	nav.style.width = "0%";
	document.getElementsByClassName('fa-bars')[0].style.display = "inline";
}

document.getElementsByClassName('nav-links')[1].onclick = function click(){
	if (x.matches) { // If media query matches
		nav.style.width = "100%";
	} 
	else {
		nav.style.width = "0%";
		document.getElementsByClassName('fa-bars')[0].style.display = "inline";
	}
}

document.getElementsByClassName('nav-links')[2].onclick = function click() {
	if (x.matches) { // If media query matches
		nav.style.width = "100%";
	} 
	else {
		nav.style.width = "0%";
		document.getElementsByClassName('fa-bars')[0].style.display = "inline";
	}
}

document.getElementsByClassName('nav-links')[3].onclick = function click() {
	if (x.matches) { // If media query matches
		nav.style.width = "100%";
	} 
	else {
		nav.style.width = "0%";
		document.getElementsByClassName('fa-bars')[0].style.display = "inline";
	}
}
//////////////////////////////////////////////////////////////////////////////////////
