
//Modal - distribuie conferinta adaugata
var shareModal = document.getElementById('shareModal');
var btnDistribuie = document.getElementById("distribuie");
var btnSalveaza = document.getElementById("salveaza");
var btnDistribuie1 = document.getElementById("distribuie1");
var spanClose = document.getElementsByClassName("close")[0];

var pacienti;
var medici;
var specialitati;

$.getJSON('data/medici.json', function(data) {
    medici = data;
});

$(function() {
    //folosim asta pentru a reseta intrebarile la cele din fisierul json
    //localStorage.removeItem('intrebariList');
    
    var localS = localStorage.getItem("intrebariList");
    console.log(localS);
    if (localS == null) {
        $.getJSON('data/intrebariPacienti.json', function(data) {
            localStorage.setItem("intrebariList", JSON.stringify(data));
        });
    }
});

$.getJSON('data/pacienti.json', function(data) {
    pacienti = data;
});

$.getJSON('data/specialitati.json', function(data) {
    specialitati = data;
});

$.getJSON('data/pacienti.json', function(data) {
        $.each(data.pacienti, function(i, f) {
            var tblRow = "<tr>" +
                "<td>" + f.nrCrt + "</td>" +
                "<td>" + f.nume + "</td>" +
                "<td>" + f.prenume + "</td>" +
                "<td>" + f.email + "</td>" +
                "<td>" + f.dataNasterii + "</td>" +
                "<td>" + f.adresa + "</td>" +
                '<td><button type="button" onclick="window.location.href=\'introducere_reteta2.html\'" class="btn btn-lg btn-success">Alege</button></td>' +
                "</tr>";
            $(tblRow).appendTo(".pacientiTable tbody");
        });

    });

$( "#loginId" ).click(function() {
	var username = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	
	if (username == "admin" && pass == "password") {
        localStorage.setItem("userLogat", JSON.stringify(medici.medici[0]));
		window.location.href = "medic.html";
	} else if (username == "pacient" && pass == "pacient") {
        localStorage.setItem("userLogat", JSON.stringify(pacienti.pacienti[4]));
		window.location.href="pacient.html";
	} else {
		window.location.href="404.html";
	}
 });
 
$( "#logout" ).click(function() {
    localStorage.removeItem("userLogat");
	window.location.href = "index.html";
});
 
$(function () {
    $('#datetimepicker1').datetimepicker();
});

$( "#adaugaComentariuButton" ).click(function() {
    var adaugaComentariuInput = $("#adaugaComentariuInput").val();
    if(adaugaComentariuInput!=""){
		$("#adaugaComentariuInput").val("");

		var comentariuNou = '<li>' +
			'<div class="mr-2 float-left"> <img src="http://placekitten.com/50/50" /></div>' +
			'<p class="m-0">'+adaugaComentariuInput+'</p>' +
			'<small class="date text-muted">16 Ianuarie 2018</small>' +
			'</li>';
		$(comentariuNou).prependTo("#listaComentarii");
    }
});

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

