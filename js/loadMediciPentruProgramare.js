$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

 $.getJSON('data/medici.json', function(data) {
	 var medici = [];
     $.each(data.medici, function(i, f) {
		medici.push("<tr>");
		medici.push("<td>" + f.nume + "</td>");
		medici.push("<td>" + f.specialitate + "</td>");
		medici.push("<td>" + f.oras + "</td>");
		medici.push('<td><button type="button" onclick="window.location.href=\'programareConsult2.html\'" class="btn btn-lg btn-success">Alege</button></td>');
		medici.push("<tr>");
        });
		$("<tbody/>", {html: medici.join("")}).appendTo('.tabelMedici');
   });




    $(".cautaMedici").on("click", function(){
	
		var medici = [];
        var orasM = $(".orasM").val();
		var specialitateM = $(".specialitateM").val();
        var mediciTable = $(".tabelMedici tbody tr").remove();
		if (specialitateM=="all")
		{
            specialitateM="";
		}
		if(orasM=="allC"){
            orasM="";
		}
        $.getJSON('data/medici.json', function(data) {
            $.each(data.medici, function(i, f) {
                if(f.oras.includes(orasM) && f.specialitate.includes(specialitateM)){
                  	medici.push("<tr>");
					medici.push("<td>" + f.nume + "</td>");
					medici.push("<td>" + f.specialitate + "</td>");
					medici.push("<td>" + f.oras + "</td>");
					medici.push('<td><button type="button" onclick="window.location.href=\'programareConsult2.html\'" class="btn btn-lg btn-success">Alege</button></td>');
					medici.push("<tr>");
                }
            });
            $("<tbody/>", {html: medici.join("")}).appendTo('.tabelMedici');
        });

        return false;
    });

});