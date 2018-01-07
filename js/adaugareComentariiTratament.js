$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$( "#adaugaComentariuButton" ).click(function() {
    var adaugaComentariuInput = $("#adaugaComentariuInput").val();

    $("div#divLoading").addClass('show');
    setTimeout( function(){
        $("div#divLoading").removeClass('show');

        if(adaugaComentariuInput!=""){
            $("#adaugaComentariuInput").val("");

            var comentariuNou = '<li>' +
                '<div class="mr-2 float-left"> <img src="http://placekitten.com/50/50" /></div>' +
                '<p class="m-0">'+adaugaComentariuInput+'</p>' +
                '<small class="date text-muted">16 Ianuarie 2018</small>' +
                '</li>';
            $(comentariuNou).prependTo("#listaComentarii");
        }
        else{
            $("#adaugareComentariuTratamentEroare").modal();
        }
    }, 1000);
});