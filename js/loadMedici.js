$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    var title,buttonOnClickHref;
    title =$("title") .text();
    if(title==="Adăugare feedback"){
        buttonOnClickHref = "adaugare_feedback2.html";
    }

    $(".searchMedic").on("submit", function(){
        var searchMedicInput = $(".searchMedicInput").val();

        var mediciTable = $(".mediciTable tbody tr").remove();

        loadTable(buttonOnClickHref,searchMedicInput);

        return false;
    }).submit();
});

function loadTable(buttonOnClickHref, searchMedicInput){
    var medici = [];

    $.getJSON('data/medici.json', function(data) {
        $.each(data.medici, function(i, f) {
            if(f.nume.includes(searchMedicInput) || f.ocupatie.includes(searchMedicInput)){
                var tblRow = "<tr>" +
                    "<td>" + f.nrCrt + "</td>" +
                    "<td>" + f.nume + "</td>" +
                    "<td>" + f.ocupatie + "</td>" +
                    "<td>" + f.nota + "</td>" +
                    "<td class='text-warning'>" + f.stele + "</td>" +
                    '<td><button type="button" onclick="window.location.href=\''+buttonOnClickHref+'?nume='+f.nume+'\'" class="btn btn-lg btn-success">Adaugă recenzii</button></td>' +
                    "</tr>";
                $(tblRow).appendTo(".mediciTable tbody");
            }
        });

    });
}