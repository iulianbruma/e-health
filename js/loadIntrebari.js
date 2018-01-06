var intrebari;

$(function() {
     if (intrebari == null) {
        intrebari = JSON.parse(localStorage.getItem('intrebariList'));    
    }
});

$(document).ready(function() {
    console.log("intrat 1");
    
    console.log("trec 2");
    var container;
    var comentarii;
    
    $('#cautaIntrebDupaSpecialitate').val("");
    console.log("trecut 2");
    $.getJSON('data/intrebariPacienti.json', function(data) {
        console.log("intrat json");
        $.each(intrebari, function(i, f) {
            container = 
                '<div class="row mb-3" style="position: relative;">' + 
                    '<img class="col-md-2 my-auto h-100 w-100" style="max-height: 100px; max-width: 100px;" src="' + pacienti.pacienti[f.pacientId - 1].imagine + '"/>' +
                    '<span class="col-md-10 border h-25 rounded py-2 text-justify">' + f.intrebare + '</span>' + 
                '</div>' + 
                '<div class="comentariiIntrebare col-md-10 mr-auto ml-auto mb-4">';
            comentarii = null;
            $.each(f.comentarii, function(i1, f1) {
                var comentariu = 
                    '<div class="row">' + 
                        '<div class="col-md-2 my-auto">' + 
                            '<img class="mx-auto d-block h-100 w-100" style="max-height: 50px; max-width: 50px;" src="' + medici.medici[f1.medicId - 1].imagine + '"/>' +
                            '<span class="d-block text-center">' + 
                            medici.medici[f1.medicId - 1].nume + 
                            '</span>' + 
                        '</div>' + 
                        '<span class="col-md-10 border h-25 rounded py-2 text-justify">' + f1.comentariu + '</span>' +
                    '</div>' + 
                    '<hr>';
                if (comentarii == null) {
                    comentarii = comentariu;
                } else {
                    comentarii = comentarii + comentariu;
                }
            });

           var container2 = 
               '<div class="row">' + 
                    '<a id="' + f.pacientId + 
                    '" data-toggle="modal" onclick="adaugareComentariuLink(this.id)" href="#myModal">Adăugare comentariu</a>' + 
                '</div>' +
           '</div>';
            container = container + comentarii + container2;   

            $(container).appendTo('#tabelVizualIntrebari');
        });
        $('#tabelVizualIntrebari').addClass("border rounded");
    });

});

function getSpecialitate(id) {
    $('#vizIntrebariSpecs span').remove();
    $('#vizIntrebariSpecs div').hide();
    $('#cautaIntrebDupaSpecialitate').val(specialitati[id-1].nume);
};

$( "#cautaIntrebDupaSpecialitate" ).keyup(function() {
    $('#vizIntrebariSpecs span').remove();
    $('#vizIntrebariSpecs div').hide();
    var el1 = $( this ).val();
    if (el1 != "") {
        var divSpec = 
            '<div class="col-md-12 border bg-white pre-scrollable" style="position: absolute;">';
        var specs;

        $.each(specialitati, function(i, f) {

            if (f.nume.toLocaleLowerCase().includes(el1.toLocaleLowerCase())) {
                var spanSpec = '<span id="' + f.id +  
                    '" class="row specSpan" onclick="getSpecialitate(this.id)">' + f.nume + '</span>';
                if (specs == null) {
                    specs = spanSpec;
                } else {
                    specs = specs + spanSpec;
                }
            } 
        });
        if (specs != null) {
            divSpec = divSpec + specs + '</div>';
            $(divSpec).appendTo('#vizIntrebariSpecs');
            $('#vizIntrebariSpecs div').show();
        }
    } else {
        $('#vizIntrebariSpecs div').hide();
    }

});

function adaugareComentariuIntreb(id) {
    intrebari[id - 1]
};

function adaugareComentariuLink(id) {
    $('.modal-body span').text(intrebari[id - 1].intrebare);
    $('.adaugareComentariuButon').attr('id', id);
};

function generateContainer(intrebList) {
    $.each(intrebList, function(i, f) {
        container = 
            '<div class="row mb-3" style="position: relative;">' + 
                '<img class="col-md-2 my-auto h-100 w-100" style="max-height: 100px; max-width: 100px;" src="' + pacienti.pacienti[f.pacientId - 1].imagine + '"/>' +
                '<span class="col-md-10 border h-25 rounded py-2 text-justify">' + f.intrebare + '</span>' + 
            '</div>' + 
            '<div class="comentariiIntrebare col-md-10 mr-auto ml-auto mb-4">';
        comentarii = null;
        $.each(f.comentarii, function(i1, f1) {
            var comentariu = 
                '<div class="row">' + 
                    '<div class="col-md-2 my-auto">' + 
                        '<img class="mx-auto d-block h-100 w-100" style="max-height: 50px; max-width: 50px;" src="' + medici.medici[f1.medicId - 1].imagine + '"/>' +
                        '<span class="d-block text-center">' + 
                        medici.medici[f1.medicId - 1].nume + 
                        '</span>' + 
                    '</div>' + 
                    '<span class="col-md-10 border h-25 rounded py-2 text-justify">' + f1.comentariu + '</span>' +
                '</div>' + 
                '<hr>';
            if (comentarii == null) {
                comentarii = comentariu;
            } else {
                comentarii = comentarii + comentariu;
            }
        });

       var container2 = 
           '<div class="row">' + 
                '<a id="' + f.pacientId + 
                '" data-toggle="modal" onclick="adaugareComentariuLink(this.id)" href="#myModal">Adăugare comentariu</a>' + 
            '</div>' +
       '</div>';
        container = container + comentarii + container2;   

        $(container).appendTo('#tabelVizualIntrebari');
    });
    $('#tabelVizualIntrebari').show();
}

$("#butonIntrebari" ).click(function() {
	var specialitate = document.getElementById("cautaIntrebDupaSpecialitate").value;
    var exist = false;
    if (specialitate != "") {
        specialitati.forEach(function(item) {
            if (item.nume === specialitate) {
                exist = true;
            }
        });
        
        if (exist) {
            var intrebariSelect = [];
            
            intrebari.forEach(function(item) {
                if (item.specialitate == specialitate) {
                    intrebariSelect.push(item);
                }
            });
            
            
            if (intrebariSelect.length == 0) {
                $('#vizIntrebariSpecs span').remove();
                $('#vizIntrebariSpecs div').remove();
                $('#tabelVizualIntrebari').hide();
                $('#intrebariErrorMsg').text('Nu au fost găsite întrebări legate de această specialitate!');
                document.getElementById("intrebariErrorMsg").style.display = "block";
            } else {
                document.getElementById("intrebariErrorMsg").style.display = "none";
                $('#tabelVizualIntrebari div').remove();
                generateContainer(intrebariSelect);
            }            
        } else {
            $('#vizIntrebariSpecs span').remove();
            $('#vizIntrebariSpecs div').remove();
            $('#tabelVizualIntrebari').hide();
            $('#intrebariErrorMsg').text('Specialitatea nu a fost selectată corect. Încercați din nou!');
            document.getElementById("intrebariErrorMsg").style.display = "block";
        }
    } else {
        $('#vizIntrebariSpecs span').remove();
        $('#vizIntrebariSpecs div').remove();
        document.getElementById("intrebariErrorMsg").style.display = "none";
        $('#tabelVizualIntrebari div').remove();
        generateContainer(intrebari);
    }
	
 });