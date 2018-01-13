$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

    var localS = localStorage.getItem("comentariiTratamentList");
    if(localS != null){
        $(localS).prependTo("#listaComentarii");
    }
});

$( "#adaugaComentariuButton" ).click(function() {
    var title, imagine, imageClass;
    title =$("title") .text();
    if(title==="Vizualizare tratament"){
        imagine = "http://placekitten.com/50/50";
        imageClass = "";
    }
    else{
        imagine = "http://placekitten.com/45/45";
        imageClass = "rounded-circle";
    }

    var adaugaComentariuInput = $("#adaugaComentariuInput").val();

    $("div#divLoading").addClass('show');
    setTimeout( function(){
        $("div#divLoading").removeClass('show');

        if(adaugaComentariuInput!=""){
            $("#adaugaComentariuInput").val("");

            var comentariuNou = '<li>' +
                '<div class="mr-2 float-left"> <img class="'+imageClass+'" src="'+imagine+'" /></div>' +
                '<p class="m-0">'+adaugaComentariuInput+'</p>' +
                '<small class="date text-muted">16 Ianuarie 2018</small>' +
                '</li>';
            var localS = localStorage.getItem("comentariiTratamentList");
            if(localS != null){
                localStorage.setItem("comentariiTratamentList", comentariuNou + localS);
            }
            else{
                localStorage.setItem("comentariiTratamentList", comentariuNou);
            }

            $(comentariuNou).prependTo("#listaComentarii");
        }
        else{
            $("#adaugareComentariuTratamentEroare").modal();
        }
    }, 1000);
});