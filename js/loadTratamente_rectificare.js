$(document).ready(function() {
    $('#noTratamenteMsg').hide();
    $('#cautaIntrebDupaSpecialitate').val("");
    $.getJSON('data/tratam.json', function(data) {
		 var tratamenteFinal;
        $.each(data.tratamente, function(i, f) {
            var trTratamente = '<tr>' + 
                '<td class="col-md-2">' + f.nrCrt + '</td>' + 
                '<td class="col-md-3">' + f.dataConsultatiei + '</td>' + 
                '<td class="col-md-4">' + f.diagnostic  + '</td>' + 
                '<td class="col-md-3" id="' + f.id + '"> <input type="button" class="w-50 btn btn-success" onclick="getDateTratament(this.id)" value="Rectifică"></td>'
                '</tr>';
            if (tratamenteFinal == null) {
                tratamenteFinal = trTratamente;
            } else {
                tratamenteFinal = tratamenteFinal + trTratamente;
            }
        });
        if (tratamenteFinal == null) {
            $('.tabelTratamente').hide();
            $('#noTratamenteMsg').text("Nu sunt tratamente pentru această persoană!");
            $('#noTratamenteMsg').show();
        } else {
            $('.tabelTratamente').show();
            $(tratamenteFinal).appendTo('.tabelTratamente tbody');
        }
    });
});

function getPacient(id) {
    $('#vizTratamentPacient span').remove();
    $('#vizTratamentPacient div').hide();
    var pacient = pacienti.pacienti[id-1];
    $('#cautaTratamenteDupaPacient').val(pacient.nume + " " + pacient.prenume);
};

$('#butonTratament').click(function() {
   window.location.href="rectificare_tratament.html"; 
});

$( "#cautaTratamenteDupaPacient" ).keyup(function() {
    $('#vizTratamentPacient span').remove();
    $('#vizTratamentPacient div').remove();
    var el1 = $( this ).val();
    var divTrat = 
            '<div class="col-md-12 border bg-white pre-scrollable" style="position: absolute; z-index: 1">';
    
    if (el1 != "") {
        var tratamente;
        $.each(pacienti.pacienti, function(i, f) {
            var numeComplet = f.nume + " " + f.prenume;
            if (numeComplet.toLocaleLowerCase().includes(el1.toLocaleLowerCase())) {
                var spanTrat = '<span id="' + f.id +  
                    '" class="row specSpan" onclick="getPacient(this.id)">' + numeComplet + '</span>';
                if (tratamente == null) {
                    tratamente = spanTrat;
                } else {
                    tratamente = tratamente + spanTrat;
                }
            } 
        });
    } else {
        var tratamente;
        $.each(pacienti.pacienti, function(i, f) {
            var numeComplet = f.nume + " " + f.prenume;
            var spanTrat = '<span id="' + f.id +  
                    '" class="row specSpan" onclick="getPacient(this.id)">' + numeComplet + '</span>';
                if (tratamente == null) {
                    tratamente = spanTrat;
                } else {
                    tratamente = tratamente + spanTrat;
                }
        });
    }
    if (tratamente != null) {
        divTrat = divTrat + tratamente + '</div>';
        $(divTrat).appendTo('#vizTratamentPacient');
        $('#vizTratamentPacient div').show();
    }

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
					$("<tbody/>", {html: tratamente.join("")}).appendTo('.tabelTratamente');
               }
           });
       });

       return false;

 });