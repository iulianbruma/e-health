var intrebari;
var userLogat = JSON.parse(localStorage.getItem('userLogat'));

$(function() {
     if (intrebari == null) {
        intrebari = JSON.parse(localStorage.getItem('intrebariList'));    
    }
});

$(document).ready(function() {
    var container;
    var comentarii;
    var countIntrebari = 0;
    $('#cautaIntrebDupaSpecialitate').val("");
    $.getJSON('data/intrebariPacienti.json', function(data) {
        $.each(intrebari, function(i, f) {
            var imagineIntreb = f.imagine;
        if (imagineIntreb == null) {
            container = 
                '<div class="row mb-3" style="position: relative;">' + 
                    '<img class="col-md-2 my-auto h-100 w-100" style="max-height: 100px; max-width: 100px;" src="' + pacienti.pacienti[f.pacientId - 1].imagine + '"/>' +
                    '<span style="background-color: honeydew;" class="col-md-10 border h-25 rounded py-2 text-justify"><i>' + f.intrebare + 
                    '</i><br> <b>Simptome:</b> <br>--> ' + f.simptome +
                    '<br><small><i>Nu sunt imagini atasate!</i></small>' + 
                    '</span>' + 
                '</div>' + 
                '<div class="comentariiIntrebare col-md-10 mr-auto ml-auto mb-4">';
        } else {
            container = 
                '<div class="row mb-3" style="position: relative;">' + 
                    '<img class="col-md-2 my-auto h-100 w-100" style="max-height: 100px; max-width: 100px;" src="' + pacienti.pacienti[f.pacientId - 1].imagine + '"/>' +
                    '<span style="background-color: honeydew;" class="col-md-10 border h-25 rounded py-2 text-justify"><i>' + f.intrebare + 
                    '</i><br> <b>Simptome:</b> <br>--> ' + f.simptome +
                    '<br><small><i>' + 
                    '<a download href="images/plasareIntrebare/' + imagineIntreb + 
                    '" title="ImageName">Imaginea atasata!' +
                    '</a>' + 
                    '</i></small>' + 
                    '</span>' + 
                '</div>' + 
                '<div class="comentariiIntrebare col-md-10 mr-auto ml-auto mb-4">';
        }
            comentarii = null;
            var count = 0;
            $.each(f.comentarii, function(i1, f1) {
                var comentariu = 
                    '<div class="row">' + 
                        '<div class="col-md-2 my-auto">' + 
                            '<img class="mx-auto d-block h-100 w-100" style="max-height: 50px; max-width: 50px;" src="' + medici.medici[f1.medicId - 1].imagine + '"/>' +
                            '<span class="d-block text-center">' + 
                            medici.medici[f1.medicId - 1].nume + 
                            '</span>' + 
                        '</div>' + 
                        '<span style="background-color: beige;" class="col-md-9 border h-25 rounded py-2 text-justify">' + f1.comentariu + '</span>';
                    
                var comentariu3 = '</div>' + 
                    '<hr>';
                
                count = count + 1;
                
                var comentariuFinal;
                
                comentariuFinal = comentariu + comentariu3;
                
                if (comentarii == null) {
                    comentarii = comentariuFinal;
                } else {
                    comentarii = comentarii + comentariuFinal;
                }
            });

            if (comentarii == null) {
                container = container; 
            } else {
                container = container + comentarii; 
            }
              
            $(container).appendTo('#tabelVizualIntrebari');
            countIntrebari = countIntrebari + 1;
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
    $('#vizIntrebariSpecs div').remove();
    var el1 = $( this ).val();
    var divSpec = 
            '<div class="col-md-12 border bg-white pre-scrollable" style="position: absolute; z-index: 1">';
    
    if (el1 != "") {
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
    } else {
        var specs;
        $.each(specialitati, function(i, f) {
            var spanSpec = '<span id="' + f.id +  
                    '" class="row specSpan" onclick="getSpecialitate(this.id)">' + f.nume + '</span>';
                if (specs == null) {
                    specs = spanSpec;
                } else {
                    specs = specs + spanSpec;
                }
        });
    }
    if (specs != null) {
        divSpec = divSpec + specs + '</div>';
        $(divSpec).appendTo('#vizIntrebariSpecs');
        $('#vizIntrebariSpecs div').show();
    }

});

function adaugareComentariuIntreb(id) {
    var user = JSON.parse(localStorage.getItem('userLogat'));
    var comment = $('#comentariuLaIntrebare').val();
    if (comment == "") {
        $('#modalCommentError').show();
        $('#modalCommentError').text("Acest câmp nu poate rămâne gol!");
    } else {
        $('#modalCommentError').hide();
        var comentariu = {medicId: parseInt(user.nrCrt), comentariu: comment};
        var idd = id - 1;
        intrebari[idd].comentarii.push(comentariu);
        localStorage.setItem("intrebariList", JSON.stringify(intrebari));
        $('#buttonDismisModal').click();
        window.location.href='vizualizare_intrebare.html';
    }
};

function adaugareComentariuLink(id) {
    $('#modalCommentError').hide();
    $('#modalIntrebareTitlu').text(intrebari[id - 1].intrebare);
    $('.adaugareComentariuButon').attr('id', id);
};

/*$('#cautaIntrebDupaSpecialitate').blur(function() {
    $('#vizIntrebariSpecs .pre-scrollable').hide();
});*/

function generateContainer(intrebList) {
    $.each(intrebList, function(i, f) {
        var imagineIntreb = f.imagine;
        if (imagineIntreb == null) {
            container = 
                '<div class="row mb-3" style="position: relative;">' + 
                    '<img class="col-md-2 my-auto h-100 w-100" style="max-height: 100px; max-width: 100px;" src="' + pacienti.pacienti[f.pacientId - 1].imagine + '"/>' +
                    '<span style="background-color: honeydew;" class="col-md-10 border h-25 rounded py-2 text-justify"><i>' + f.intrebare + 
                    '</i><br> <b>Simptome:</b> <br>--> ' + f.simptome +
                    '<br><small><i>Nu sunt imagini atasate!</i></small>' + 
                    '</span>' + 
                '</div>' + 
                '<div class="comentariiIntrebare col-md-10 mr-auto ml-auto mb-4">';
        } else {
            container = 
                '<div class="row mb-3" style="position: relative;">' + 
                    '<img class="col-md-2 my-auto h-100 w-100" style="max-height: 100px; max-width: 100px;" src="' + pacienti.pacienti[f.pacientId - 1].imagine + '"/>' +
                    '<span style="background-color: honeydew;" class="col-md-10 border h-25 rounded py-2 text-justify"><i>' + f.intrebare + 
                    '</i><br> <b>Simptome:</b> <br>--> ' + f.simptome +
                    '<br><small><i>' + 
                    '<a download href="images/plasareIntrebare/' + imagineIntreb + 
                    '" title="ImageName">Imaginea atasata!' +
                    '</a>' + 
                    '</i></small>' + 
                    '</span>' + 
                '</div>' + 
                '<div class="comentariiIntrebare col-md-10 mr-auto ml-auto mb-4">';
        }
        comentarii = null;
        var count = 0;
        $.each(f.comentarii, function(i1, f1) {
                var comentariu = 
                    '<div class="row">' + 
                        '<div class="col-md-2 my-auto">' + 
                            '<img class="mx-auto d-block h-100 w-100" style="max-height: 50px; max-width: 50px;" src="' + medici.medici[f1.medicId - 1].imagine + '"/>' +
                            '<span class="d-block text-center">' + 
                            medici.medici[f1.medicId - 1].nume + 
                            '</span>' + 
                        '</div>' + 
                        '<span style="background-color: beige;" class="col-md-9 border h-25 rounded py-2 text-justify">' + f1.comentariu + '</span>';
                var comentariu2;
            var intrebareId = parseInt(f.id) - 1;
                
                var comentariu3 = '</div>' + 
                    '<hr>';
                
                count = count + 1;
                
                var comentariuFinal;
                
                comentariuFinal = comentariu + comentariu3;
                
                if (comentarii == null) {
                    comentarii = comentariuFinal;
                } else {
                    comentarii = comentarii + comentariuFinal;
                }
            });

        if (comentarii == null) {
            container = container; 
        } else {
            container = container + comentarii; 
        }

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