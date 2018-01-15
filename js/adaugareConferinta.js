var titlu = document.getElementById("titlu");
var locatie = document.getElementById("locatie");
var data = document.getElementById("data");
var domeniu = document.getElementById("domeniu");

var ok;
$(document).ready(function() {
    $("#eroareTitlu").hide();
    $("#eroareLocatie").hide();
    $("#eroareDomeniu").hide();
    $("#eroareData").hide();

    $("#salveaza").click(function(){
        $("#eroareTitlu").hide();
        $("#eroareLocatie").hide();
        $("#eroareDomeniu").hide();
        $("#eroareData").hide();
        validareCampuri();
        if(ok){
            $("#saveConfirmationModal").modal();
        }
    });

    $("#distribuie").click(function(){
        $("#eroareTitlu").hide();
        $("#eroareLocatie").hide();
        $("#eroareDomeniu").hide();
        $("#eroareData").hide();
        validareCampuri();
        if(ok){
            $("#shareModal").modal();
        }
    });
});

function validareCampuri() {
    ok = true;

    if(titlu.value==""){
        $("#eroareTitlu").show();
        ok=false;
    }

    if(locatie.value==""){
        $("#eroareLocatie").show();
        ok=false;
    }

    if(domeniu.options[domeniu.selectedIndex].text == ""){
        $("#eroareDomeniu").show();
        ok=false;
    }

    if(data.value==""){
        $("#eroareData").show();
        ok=false;
    }

}