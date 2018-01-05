$(document).ready(function() {

    var pacienti = [];

    $.getJSON('data/pacienti.json', function(data) {
        $.each(data.pacienti, function(i, f) {
            var tblRow = "<tr>" +
                "<td>" + f.nrCrt + "</td>" +
                "<td>" + f.nume + "</td>" +
                "<td>" + f.prenume + "</td>" +
                "<td>" + f.email + "</td>" +
                "<td>" + f.dataNasterii + "</td>" +
                "<td>" + f.adresa + "</td>" +
                '<td><button type="button" onclick="window.location.href=\'vizualizare_date2.html\'" class="btn btn-lg btn-success">Alege</button></td>' +
                "</tr>";
            $(tblRow).appendTo(".pacientiTable tbody");
        });

    });

    $(".searchPacient").on("submit", function(){
        var searchPacientInput = $(".searchPacientInput").val();

        var pacientiTable = $(".pacientiTable tbody tr").remove();

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
                        '<td><button type="button" onclick="window.location.href=\'vizualizare_date2.html\'" class="btn btn-lg btn-success">Alege</button></td>' +
                        "</tr>";
                    $(tblRow).appendTo(".pacientiTable tbody");
                }
            });

        });

        return false;
    });

});