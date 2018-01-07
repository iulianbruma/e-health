$(document).ready(function() {
    var title,buttonOnClickHref;
    title =$("title") .text();
    if(title==="Introducere rețetă"){
        buttonOnClickHref = "introducere_reteta2.html";
    }
    else if(title==="Vizualizare date"){
        buttonOnClickHref = "vizualizare_date2.html";
    }

    $(".searchPacient").on("submit", function(){
        var searchPacientInput = $(".searchPacientInput").val();

        var pacientiTable = $(".pacientiTable tbody tr").remove();

        loadTable(buttonOnClickHref,searchPacientInput);

        return false;
    }).submit();
});

function loadTable(buttonOnClickHref, searchPacientInput){
    var pacienti = [];

    $.getJSON('data/pacienti.json', function(data) {
        $.each(data.pacienti, function(i, f) {
            if(f.nume.includes(searchPacientInput) || f.prenume.includes(searchPacientInput)){
                var tblRow = "<tr>" +
                    "<td>" + f.nrCrt + "</td>" +
                    "<td>" + f.nume + "</td>" +
                    "<td>" + f.prenume + "</td>" +
                    "<td>" + f.email + "</td>" +
                    "<td>" + f.dataNasterii + "</td>" +
                    "<td>" + f.adresa + "</td>" +
                    '<td><button type="button" onclick="window.location.href=\''+buttonOnClickHref+'?nume='+f.nume+'&prenume='+f.prenume+'&varsta='+(2017-parseInt(f.dataNasterii.split(".").pop()))+'\'" class="btn btn-lg btn-success">Alege</button></td>' +
                    "</tr>";
                $(tblRow).appendTo(".pacientiTable tbody");
            }
        });

    });
}