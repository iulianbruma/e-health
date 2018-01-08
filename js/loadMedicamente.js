$(document).ready(function() {

    var medicamente = [];
    $.getJSON('data/medicam.json', function(data) {
        $.each(data.medicamente, function(i, f) {
			medicamente.push("<tr>");
			medicamente.push( "<td>" + f.medicament + "</td>" );
			medicamente.push( "<td>" + f.modAdministrare + "</td>" );
			medicamente.push("<td>" + f.observații + "</td>");
			medicamente.push("<tr>");
        });
		$("<tbody/>", {html: medicamente.join("")}).appendTo('.tabelMedicamente');
    });
 });