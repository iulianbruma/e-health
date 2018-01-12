var pacientSelectat;

$(document).ready(function() {
    $('.table').hide();
    $('.main').css("margin-bottom", "22%");
    $('#noTratamenteMsg').hide();
    $('#cautaTratamenteDupaPacient').val("");
    
});

function getDateTratament(tratId) {
    window.location.href='rectificare_tratament2.html?pacientId=' + pacientSelectat.id + '&tratamentId=' + tratId; 
};

function getPacient(id) {
    $('#vizTratamentPacient span').remove();
    $('#vizTratamentPacient div').hide();
    pacientSelectat = pacienti.pacienti[id-1];
    $('#cautaTratamenteDupaPacient').val(pacientSelectat.nume + " " + pacientSelectat.prenume);
};

$('#butonTratament').click(function() {
    var pacientInput = $('#cautaTratamenteDupaPacient').val();
    //var pacientAles = pacientSelectat.nume + " " + pacientSelectat.prenume;
    $('.main').css("margin-bottom", "22%");
    if (pacientInput == "") {
        $('#noTratamenteMsg').text("Te rog să alegi un pacient înainte de toate!");
        $('#noTratamenteMsg').show(); 
        $('table').hide();
    } else if (pacientSelectat == null) {
        $('#noTratamenteMsg').text("Alege un pacient din lista afișată mai jos de câmpul de scris!");
        $('#noTratamenteMsg').show(); 
        $('table').hide();
    } else if(pacientInput != pacientSelectat.nume + " " + pacientSelectat.prenume) {
        $('#noTratamenteMsg').text("Te rog să alegi un nume de pacient fără ca acesta să fie modificat ulterior!");
        $('#noTratamenteMsg').show(); 
        $('table').hide();
    } else {
        $('.main').css("margin-bottom", "0");
        $('#noTratamenteMsg').hide();
        $('table').show();
        $.getJSON('data/tratam.json', function(data) {
            var tratamenteFinal;
            $.each(data.tratamente, function(i, f) {
                var trTratamente = '<tr>' + 
                    '<td class="col-md-2">' + f.nrCrt + '</td>' + 
                    '<td class="col-md-3">' + f.dataConsultatiei + '</td>' + 
                    '<td class="col-md-4">' + f.diagnostic  + '</td>' + 
                    '<td class="col-md-3"> <input id="' + f.id + '" type="button" class="w-50 btn btn-success" onclick="getDateTratament(this.id)" value="Rectifică"></td>'
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
    }
    
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