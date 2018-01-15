$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $.getJSON('data/tratam.json', function(data) {
		 var tratamente = [];
        $.each(data.tratamente, function(i, f) {
			tratamente.push("<tr>");
			tratamente.push("<td>" + f.nrCrt + "</td>");
			tratamente.push("<td>" + f.dataConsultatiei + "</td>");
			tratamente.push("<td>" + f.medic + "</td>");
			tratamente.push("<td>" + f.diagnostic + "</td>");
			tratamente.push('<td><button type="button" onclick="window.location.href=\'vizTrat2.html\'" class="btn btn-lg btn-success">Vizualizare</button></td>');
			tratamente.push("<tr>");
        });
		$("<tbody/>", {html: tratamente.join("")}).appendTo('.tabelTratamente');
    });
});




 $(".cautaMedicament").on("click", function(){


		var tratamente = [];
        var medicam = $(".cautaMedicamInput").val();
        var mediciTable = $(".tabelTratamente tbody tr").remove();
       $.getJSON('data/tratam.json', function(data) {
           $.each(data.tratamente, function(i, f) {

                if(f.medicament.includes(medicam) ){
					tratamente.push("<tr>");
					tratamente.push("<td>" + f.nrCrt + "</td>");
					tratamente.push("<td>" + f.dataConsultatiei + "</td>");
					tratamente.push("<td>" + f.medic + "</td>");
					tratamente.push("<td>" + f.diagnostic + "</td>");
					tratamente.push('<td><button type="button" onclick="window.location.href=\'vizTrat2.html\'" class="btn btn-lg btn-success">Vizualizare</button></td>');
					tratamente.push("<tr>");
               }
           });
           $("<tbody/>", {html: tratamente.join("")}).appendTo('.tabelTratamente');
       });

       return false;

 });
 