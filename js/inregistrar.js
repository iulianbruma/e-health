
$('#inregistrare').click(function() {
	var nume = document.getElementById("numeInput").value;
	var prenume = document.getElementById("prenumeInput").value;
	var email = document.getElementById("emailInput").value;
	var adresa = document.getElementById("adresaInput").value;
	var CNP = document.getElementById("cnpInput").value;
	var telefon = document.getElementById("telefonInput").value;
	var dn = document.getElementById("dnInput").value;
	var grupa = document.getElementById("grupaInput").value;
	var numep = document.getElementById("numepInput").value;
	var prenumep = document.getElementById("prenumepInput").value;
	var telefonp = document.getElementById("telefonpInput").value;
	
	
if (nume == "" && prenume == ""&& email == ""  && adresa == "" && CNP == "" && telefon == "" && dn == "" && numep == "" && prenumep == "" && telefonp == "" && grupa == "") {

	document.getElementById("numeError").style.display = "inline";
	document.getElementById("prenumeError").style.display = "inline";
	document.getElementById("emailError").style.display = "inline";
	document.getElementById("adresaError").style.display = "inline";
	document.getElementById("CNPError").style.display = "inline";
	document.getElementById("telefonError").style.display = "inline";
	document.getElementById("dnError").style.display = "inline";
	document.getElementById("grupaError").style.display = "inline";
	document.getElementById("numepError").style.display = "inline";
	document.getElementById("prenumepError").style.display = "inline";
	document.getElementById("telefonpError").style.display = "inline";
	$('#numeError').html('Câmpul Nume trebuie completat!');
	$('#prenumeError').html('Câmpul Prenume trebuie completat!');
	$('#emailError').html('Câmpul Nume trebuie completat!');
	$('#adresaError').html('Câmpul Adresa trebuie completat!');
	$('#CNPError').html('Câmpul CNP trebuie completat!');
	$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
	$('#dnError').html('Câmpul Data nașterii trebuie completat!');
	$('#grupaError').html('Alege grupa sanguină!');
	$('#numepError').html('Câmpul Nume trebuie completat!');
	$('#prenumepError').html('Câmpul Prenume trebuie completat!');
	$('#telefonpError').html('Câmpul Număr telefon trebuie completat!');
	}

else if (nume == "" || prenume == "" || email == ""  || adresa == "" || CNP == "" || telefon == "" || dn == "" || numep == "" || prenumep == "" || telefonp == "" || grupa == "") {
	document.getElementById("allError").style.display = "inline";
	$('#allError').html('Câmpurile marcate cu "*" trebuie completate!');
	document.getElementById("numeError").style.display = "none";
	document.getElementById("prenumeError").style.display = "none";
	document.getElementById("emailError").style.display = "none";
	document.getElementById("adresaError").style.display = "none";
	document.getElementById("CNPError").style.display = "none";
	document.getElementById("telefonError").style.display = "none";
	document.getElementById("dnError").style.display = "none";
	document.getElementById("grupaError").style.display = "none";
	document.getElementById("numepError").style.display = "none";
	document.getElementById("prenumepError").style.display = "none";
	document.getElementById("telefonpError").style.display = "none";

}
	else $('#inregistrareFinal').click();
});



$('#inregistrareFinal').click(function() {
      

 	var CNP = document.getElementById("cnpInput").value;
	

        $.getJSON('data/pacienti.json', function(data) {
            $.each(data.pacienti, function(i, f) {
                if(f.CNP.includes(CNP)){
					$('#inregistrareError').click();
				}
				else {
					$('#inregistrareSucc').click();
				}
	   });
	   });
});