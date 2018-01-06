
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
		window.location.href="pacient.html";
	} else {
		window.location.href="404.html";
	}
 });
 
$( "#logout" ).click(function() {
    localStorage.removeItem("userLogat");
	window.location.href = "index.html";
});

//plasare_intrebare
/* ************************************************************************************************ */

$("#butonPlasareIntrebare" ).click(function() {
	var intrebare = document.getElementById("intrebarePlasata").value;
    var specialitate = document.getElementById("specIntrebarePlasata").value;
    
	if (intrebare == "" && specialitate == "") {
		document.getElementById("intrebarePlasataError").style.display = "inline";
		$("#intrebarePlasataError").html("Câmpul dat nu poate fi gol! Plasează o întrebare");
        document.getElementById("specialitateIntrebError").style.display = "inline";
		$('#specialitateIntrebError').html('Trebuie să alegi o specialitate!');
	} else if (specialitate == "") {
        document.getElementById("intrebarePlasataError").style.display = "none";
        document.getElementById("specialitateIntrebError").style.display = "inline";
		$('#specialitateIntrebError').html('Trebuie să alegi o specialitate!');
	} else if (intrebare == "") {
        document.getElementById("specialitateIntrebError").style.display = "none";
        document.getElementById("intrebarePlasataError").style.display = "inline";
		$("#intrebarePlasataError").html("Câmpul dat nu poate fi gol! Plasează o întrebare");
    } else {
        document.getElementById("intrebarePlasataError").style.display = "none";
        document.getElementById("specialitateIntrebError").style.display = "none";
        $('#butonPlasIntrebConfirm').click();
    }
 });

/* ************************************************************************************************ */
 
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
