//Modal - distribuie conferinta adaugata
var shareModal = document.getElementById('shareModal');
var btnDistribuie = document.getElementById("distribuie");
var btnSalveaza = document.getElementById("salveaza");
var btnDistribuie1 = document.getElementById("distribuie1");
var spanClose = document.getElementsByClassName("close")[0];

$( "#loginId" ).click(function() {
	var username = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	
	if (username == "admin" && pass == "password") {
		window.location.href = "medic.html";
	} else if (username == "pacient" && pass == "pacient") {
		window.location.href="pacient.html";
	} else {
		window.location.href="404.html";
	}
 });
 
 $( "#logout" ).click(function() {
	window.location.href = "index.html";
 });
 
function validateData() {
	var username = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	
	if (username == "admin" && pass == "password") {
		console.log("aliluia");
		//window.location.redirect="contact.html";
		window.location.href = "contact.html";
	} else {
		window.location="../404.html";
	}
}

function checkName(elementId) {
	var nameValue = document.getElementById(elementId).value;
	
	if (nameValue != "") {
		if (nameValue.length > 3 && nameValue.match("^[a-zA-Z._]+$")) {
			colorInput(elementId, "white");
			nume = true;
		} else {
			colorInput(elementId, "orange");
			nume = false;
		}
	} else {
		colorInput(elementId, "orange");
		nume = false;
	}
}

function checkAddress(elementId) {
	var nameValue = document.getElementById(elementId).value;
	
	if (nameValue != "") {
		
		if (nameValue.length > 3 && nameValue.match(/^\w[^\@\#\$\%\^\&\*]+$/) &&  nameValue.match(/[0-9]/)) {
			colorInput(elementId, "white");
			adresa = true;
		} else {
			colorInput(elementId, "orange");
			adresa = false;
		}
	} else {
		colorInput(elementId, "orange");
		adresa = false;
	}
}


function checkDate(elementId) {
	var nameValue = document.getElementById(elementId).value;
	
	if (nameValue != "") {
		if (nameValue.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)) {
			colorInput(elementId, "white");
			data = true;
		} else {
			colorInput(elementId, "orange");
			data = false;
		}
	} else {
		colorInput(elementId, "orange");
		data = false;
	}
}

function checkTelefon(elementId) {
	var nameValue = document.getElementById(elementId).value;
	
	if (nameValue != "") {
		if (nameValue.match(/^(\d{3})[\-](\d{9})$/)) {
			colorInput(elementId, "white");
			telefon = true;
		} else {
			colorInput(elementId, "orange");
			telefon = false;
		}
	} else {
		colorInput(elementId, "orange");
		telefon = false;
	}
}

function checkEmail(elementId) {
	var nameValue = document.getElementById(elementId).value;
	
	if (nameValue != "") {
		if (nameValue.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)) {
			colorInput(elementId, "white");
			telefon = true;
		} else {
			colorInput(elementId, "orange");
			telefon = false;
		}
	} else {
		colorInput(elementId, "orange");
		telefon = false;
	}
}

function resetFields() {
	var inputs = document.querySelectorAll("input[type=text]");
	
	for (i = 0; i < inputs.length; i++) {
		inputs[i].value = "";
		inputs[i].style.backgroundColor = "orange";
	}
	nume = false;
	adresa = false;
	data = false;
	telefon = false;
	email = false;
	document.getElementById("infoText").style.display = "none";
}

function trimite() {
	document.getElementById("infoText").style.display = "flex";
	if (nume && adresa && data && telefon && email) {
		document.getElementById("#infoText").innerHTML = "Datele au fost introduse corect!";
	}
}