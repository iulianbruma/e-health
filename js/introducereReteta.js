$(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);

    $("#numePacient").text("Nume: "+urlParams.get("nume")+" "+urlParams.get("prenume")+".");
    $("#varstaPacient").text("Vârsta: "+urlParams.get("varsta")+".");

    $("#introducereRetetaButon").click(function(){
        $("div#divLoading").addClass('show');
        setTimeout( function(){
            $("div#divLoading").removeClass('show');

            var succes = true;
            $.each($(".numeMedicament"), function(i, f) {
                if($(f).val().includes("algocalmin")){
                    succes = false;
                }
            });
            if(succes){
                $("#introducereRetetaModalSucces").modal();
            }
            else {
                $("#introducereRetetaModalEroare").modal();
            }
        }, 1000);
    });
});

$( "#adaugareMedicamentNou" ).click(function() {
    var tblRow = '<tr>' +
        '<td><input type="text" class="form-control numeMedicament" value="" /></td>' +
        '<td><input type="text" class="form-control" value="" /></td>' +
        '<td><input type="text" class="form-control" value="" /></td>' +
        '<td><button type="button" onclick="deleteRowFunction(this)" class="btn btn-lg btn-danger">Șterge</button></td>' +
        '</tr>';
    $(tblRow).appendTo("#introducereReteta tbody");
});

function deleteRowFunction(o) {
    var p=o.parentNode.parentNode;
    p.parentNode.removeChild(p);
}