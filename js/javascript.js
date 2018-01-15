var pacienti;
var medici;
var specialitati;
var tratamente;

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

$.getJSON('data/medici.json', function(data) {
    medici = data;
});

$(function() {
    //folosim asta pentru a reseta intrebarile la cele din fisierul json
    //localStorage.removeItem('intrebariList');
    
    var localS = localStorage.getItem("intrebariList");
    if (localS == null) {
        $.getJSON('data/intrebariPacienti.json', function(data) {
            localStorage.setItem("intrebariList", JSON.stringify(data));
        });
    }
});

$(function() {
    //folosim asta pentru a reseta medicamentele la cele din fisierul json
    //localStorage.removeItem('medicamenteList');
    
    var localS = localStorage.getItem("medicamenteList");
    if (localS == null) {
        $.getJSON('data/medicam.json', function(data) {
            localStorage.setItem("medicamenteList", JSON.stringify(data.medicamente));
        });
    }
});

$.getJSON('data/pacienti.json', function(data) {
    pacienti = data;
});

$.getJSON('data/tratam.json', function(data) {
    tratamente = data;
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

$(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    $("#numePacient").text(urlParams.get("nume")+" "+urlParams.get("prenume"));
});

$(".searchTratament").on("submit", function(){
    var searchTratamentInput = $(".searchTratamentInput").val();

    if(searchTratamentInput>="1" && searchTratamentInput<="8"){
        window.location.href = "vizTrat2.html";
    }
    else{
        $("#cautareTratamentEroare").modal();
    }

    return false;
});

$( "#rectificareTratament" ).click(function() {
    window.location.href="rectificare_tratament.html"+'?pacient='+document.getElementById("numePacient").innerHTML;
});

