$(document).ready(function() {

    var medici = [];

    $.getJSON('data/medici.json', function(data) {
        $.each(data.medici, function(i, f) {
            var tblRow = "<tr>" +
                "<td>" + f.nrCrt + "</td>" +
                "<td>" + f.nume + "</td>" +
                "<td>" + f.ocupatie + "</td>" +
                "<td>" + f.nota + "</td>" +
                "<td class='text-warning'>" + f.stele + "</td>" +
                '<td><button type="button" onclick="window.location.href=\'adaugare_feedback2.html\'" class="btn btn-lg btn-success">Adaugă recenzii</button></td>' +
                "</tr>";
            $(tblRow).appendTo(".mediciTable tbody");
        });

    });

    $(".searchMedic").on("submit", function(){
        var searchMedicInput = $(".searchMedicInput").val();

        var mediciTable = $(".mediciTable tbody tr").remove();

        $.getJSON('data/medici.json', function(data) {
            $.each(data.medici, function(i, f) {
                if(f.nume.includes(searchMedicInput)){
                    var tblRow = "<tr>" +
                        "<td>" + f.nrCrt + "</td>" +
                        "<td>" + f.nume + "</td>" +
                        "<td>" + f.ocupatie + "</td>" +
                        "<td>" + f.nota + "</td>" +
                        "<td class='text-warning'>" + f.stele + "</td>" +
                        '<td><button type="button" onclick="window.location.href=\'adaugare_feedback2.html\'" class="btn btn-lg btn-success">Adaugă recenzii</button></td>' +
                        "</tr>";
                    $(tblRow).appendTo(".mediciTable tbody");
                }
            });

        });

        return false;
    });

});