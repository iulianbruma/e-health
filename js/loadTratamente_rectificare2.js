var medicamente;
var userLogat = JSON.parse(localStorage.getItem('userLogat'));

var pacientId;
var tratamentId;

$(function() {
     if (medicamente == null) {
        medicamente = JSON.parse(localStorage.getItem('medicamenteList'));    
    }
});

$(document).ready(function() {
    pacientId = getUrlParameter('pacientId');
    tratamentId = getUrlParameter('tratamentId');
    var pacientNume = pacienti.pacienti[pacientId - 1].nume + " " + pacienti.pacienti[pacientId - 1].prenume;
    
    var tratament = tratamente.tratamente[tratamentId - 1];
    
    $('.pacientNume').text(pacientNume);
    $('.dataTrat').text(tratament.dataConsultatiei);
    $('.diagnostTrat').text(tratament.diagnostic);
    
    var medicamenteFinal;
    var count = 0;
    $.each(medicamente, function(i, f) {
        count = count + 1;
        var trMedicamente = '<tr>' + 
            '<td class="col-md-1 align-middle">' + count + '</td>' + 
            '<td class="col-md-2 align-middle">' + f.medicament + '</td>' + 
            '<td class="col-md-4 align-middle text-justify">' + f.modAdministrare  + '</td>' + 
            '<td class="col-md-3 align-middle text-justify"><i>' + f.observații  + '</i></td>' + 
            '<td class="col-md-2.5 align-middle">' +
                '<div class="col-md-12 mx-auto">' + 
                    '<input id="' + count + '_edit" type="button" class="w-75 btn btn-success" onclick="editareMedicament(this.id)" value="Editare">' + 
                '</div>' + 
                '<div class="col-md-12 mt-2 mx-auto">' + 
                    '<a id="' + count + 
                    '_delete" class="w-75 btn btn-success" data-toggle="modal" onclick="stergereMedicamentModal(this.id)" href="#stergeMedicament">Șterge</a>' + 
                '</div>' + 
            '</td>' +
            '</tr>';
        if (medicamenteFinal == null) {
            medicamenteFinal = trMedicamente;
        } else {
            medicamenteFinal = medicamenteFinal + trMedicamente;
        }
    });
    if (medicamenteFinal == null) {
        $('.tabelMedicamente').hide();
        $('#noTratamenteMsg').text("Nu sunt medicamente pentru această persoană!");
        $('#noTratamenteMsg').show();
    } else {
        $('.tabelMedicamente').show();
        $(medicamenteFinal).appendTo('.tabelMedicamente tbody');
    }
});

/*
function getBackTrat() {
    window.location.href='rectificare_tratament.html?pacientId=' + pacientId; 
}
*/

function stergeMedicament(id) {
    var idd = id.split("_");
    var idMed = parseInt(idd[0]);
    medicamente.splice(idMed - 1 , 1);
    localStorage.setItem("medicamenteList", JSON.stringify(medicamente));
    $('#buttonDismisModal').click();
    window.location.href='rectificare_tratament2.html?pacientId=' + pacientId + '&tratamentId=' + tratamentId;
}

function editareMedicament(id) {
    console.log(id);
};

function stergereMedicamentModal(id) {
    var numeMedicament = medicamente[parseInt(id)-1].medicament;
    
    $('#medicamStersModalMsg').text('Vreți să ștergeți "' + numeMedicament + '" din lista de medicamente?');
    $('.acceptStergereMed').attr("id", id);
    console.log(id);
};