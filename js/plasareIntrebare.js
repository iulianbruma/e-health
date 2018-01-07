var intrebari;
var userLogat = JSON.parse(localStorage.getItem('userLogat'));

$(function() {
     if (intrebari == null) {
        intrebari = JSON.parse(localStorage.getItem('intrebariList'));    
    }
});

$("#butonPlasareIntrebare" ).click(function() {
	var intrebare = document.getElementById("intrebarePlasata").value;
    var specialitate = document.getElementById("specIntrebarePlasata").value;
    
	if (intrebare == "" && specialitate == "") {
		document.getElementById("intrebarePlasataError").style.display = "inline";
		$("#intrebarePlasataError").html("Câmpul dat nu poate fi gol! Plasează o întrebare");
        document.getElementById("specialitateIntrebError").style.display = "inline";
		$('#specialitateIntrebError').html('Trebuie să alegi o specialitate!');
	} else if (specialitate == "") {
        document.getElementById("intrebarePlasataError").style.display = "none";
        document.getElementById("specialitateIntrebError").style.display = "inline";
		$('#specialitateIntrebError').html('Trebuie să alegi o specialitate!');
	} else if (intrebare == "") {
        document.getElementById("specialitateIntrebError").style.display = "none";
        document.getElementById("intrebarePlasataError").style.display = "inline";
		$("#intrebarePlasataError").html("Câmpul dat nu poate fi gol! Plasează o întrebare");
    } else {
        document.getElementById("intrebarePlasataError").style.display = "none";
        document.getElementById("specialitateIntrebError").style.display = "none";
        var intrebareObj = {id: intrebari.length + 1, pacientId: userLogat.id, intrebare: intrebare,
                           specialitate: specialitate, comentarii: []};
        var simptome = $('#simptomeIntrebarePlasata').val();
        var numeFisier = $('#fisierAdaugat input')[0].value.split('\\').pop();
        
        if (simptome != "") {
            intrebareObj.simptome = simptome;
        }
        
        if (numeFisier != "") {
            intrebareObj.imagine = numeFisier;
        }
        intrebari.push(intrebareObj);
        localStorage.setItem("intrebariList", JSON.stringify(intrebari));
        $('#butonPlasIntrebConfirm').click();
    }
 });

$(document).ready(function() {
    var containerFinal;
    /*var comentarii;
    var countIntrebari = 0;*/
    /*var container = 
            '<option value="">Alege o specialitate!</option>';*/
    $.each(specialitati, function(i, f) {
        var container = 
            '<option value="' + f.nume + 
                '">' + f.nume + '</option>';
        
        /*if (containerFinal == null) {
                containerFinal = container;
            } else {
                containerFinal = containerFinal + container;
            }*/

        $(container).appendTo('#specIntrebarePlasata');
        //countIntrebari = countIntrebari + 1;
    });

});