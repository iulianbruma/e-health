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

//plasare_intrebare
/* ************************************************************************************************ */

$( "#butonPlasareIntrebare" ).click(function() {
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
