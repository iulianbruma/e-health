$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

        $.getJSON('data/conferinte.json', function(data) {
        $.each(data.conferinte, function(i, f) {
                var tblRow = "<tr>" +
                    "<td>" + f.nrCrt + "</td>" +
                    "<td>" + f.titlu + "</td>" +
                    "<td>" + f.domeniu + "</td>" +
                    "<td>" + f.locatie + "</td>" +
                    "<td>" + f.data + "</td>" +
                    "<td>" + f.nrPart + "</td>"+
                     "</tr>";
                
        });
            $(tblRow).appendTo(".conferinteTable tbody");
    });

    $(".searchConferinta").on("submit", function(){
        var searchConferintaInput = $(".searchConferintaInput").val();

        var conferinteTable = $(".conferinteTable tbody tr").remove();

        loadTable(searchConferintaInput);

        return false;
    }).submit();
});

function loadTable(searchConferintaInput){
    var conferinte = [];

    $.getJSON('data/conferinte.json', function(data) {
        $.each(data.conferinte, function(i, f) {
            if(f.titlu.includes(searchConferintaInput) ||
                f.locatie.includes(searchConferintaInput)){

                var tblRow = "<tr>" +
                    "<td>" + f.nrCrt + "</td>" +
                    "<td>" + f.titlu + "</td>" +
                    "<td>" + f.domeniu + "</td>" +
                    "<td>" + f.locatie + "</td>" +
                    "<td>" + f.data + "</td>" +
                    "<td>" + f.nrPart + "</td>"+
                     "</tr>";
                $(tblRow).appendTo(".conferinteTable tbody");
            }
        });

    });
}