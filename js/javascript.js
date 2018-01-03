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
