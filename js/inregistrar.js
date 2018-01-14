var pacienti;

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


$(function() {
     if (pacienti == null) {
        pacienti = JSON.parse(localStorage.getItem('pacientiList'));    
    }
});
		var letters=/^[a-zA-Z]*$/;
		var pattern = /^([0-9]{10})$/;
		var patternCNP = /^([0-9]{13})$/;
		var interzis=/[@#$%^&*]/;
		
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


	
	
else{

			
	  $.getJSON('data/pacienti.json', function(data) {
			$.each(data.pacienti, function(i, f) {
                if(f.CNP.includes(CNP)){
						document.getElementById("allError").style.display = "none";
						document.getElementById("numeError").style.display = "none";
						document.getElementById("prenumeError").style.display = "none";
						document.getElementById("emailError").style.display = "none";
						document.getElementById("adresaError").style.display = "none";
						document.getElementById("CNPError").style.display = "inline";
						document.getElementById("telefonError").style.display = "none";
						document.getElementById("dnError").style.display = "none";
						document.getElementById("grupaError").style.display = "none";
						document.getElementById("numepError").style.display = "none";
						document.getElementById("prenumepError").style.display = "none";
						document.getElementById("telefonpError").style.display = "none";
						
						$('#CNPError').html('Pacient deja înregistrat!');
						//$('#inregistrareError').click();
						return false;
					
				}
	
			});
	   
	   });
				
					 
				 if  (!letters.test(nume) || nume.length<3 )
					{
							
						
						document.getElementById("allError").style.display = "none";
						document.getElementById("numeError").style.display = "inline";
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
						
						$('#numeError').html('Numele trebuie sa conțină cel puțin trei litere!');
						
					}

				else if  (!letters.test(prenume) || prenume.length<3 )
					{
						
						document.getElementById("allError").style.display = "none";
						document.getElementById("numeError").style.display = "none";
						document.getElementById("prenumeError").style.display = "inline";
						document.getElementById("emailError").style.display = "none";
						document.getElementById("adresaError").style.display = "none";
						document.getElementById("CNPError").style.display = "none";
						document.getElementById("telefonError").style.display = "none";
						document.getElementById("dnError").style.display = "none";
						document.getElementById("grupaError").style.display = "none";
						document.getElementById("numepError").style.display = "none";
						document.getElementById("prenumepError").style.display = "none";
						document.getElementById("telefonpError").style.display = "none";
						$('#prenumeError').html('Prenumele trebuie sa conțină cel puțin trei litere!');
						
					}
					
					else if(!validateEmail(email))
					{
						
						document.getElementById("allError").style.display = "none";
						document.getElementById("numeError").style.display = "none";
						document.getElementById("prenumeError").style.display = "none";
						document.getElementById("emailError").style.display = "inline";
						document.getElementById("adresaError").style.display = "none";
						document.getElementById("CNPError").style.display = "none";
						document.getElementById("telefonError").style.display = "none";
						document.getElementById("dnError").style.display = "none";
						document.getElementById("grupaError").style.display = "none";
						document.getElementById("numepError").style.display = "none";
						document.getElementById("prenumepError").style.display = "none";
						document.getElementById("telefonpError").style.display = "none";
						$('#emailError').html('Emailul trebuie sa aibă structura corectă!');
					}
					
					
					else if  (interzis.test(adresa) )
					{
						
						
						document.getElementById("allError").style.display = "none";
						document.getElementById("numeError").style.display = "none";
						document.getElementById("prenumeError").style.display = "none";
						document.getElementById("emailError").style.display = "none";
						document.getElementById("adresaError").style.display = "inline";
						document.getElementById("CNPError").style.display = "none";
						document.getElementById("telefonError").style.display = "none";
						document.getElementById("dnError").style.display = "none";
						document.getElementById("grupaError").style.display = "none";
						document.getElementById("numepError").style.display = "none";
						document.getElementById("prenumepError").style.display = "none";
						document.getElementById("telefonpError").style.display = "none";
						$('#adresaError').html('Caractere interzise pentru adresă!');
						
					}
					
					
						else if  (!patternCNP.test(CNP) )
					{
						
						document.getElementById("allError").style.display = "none";
						document.getElementById("numeError").style.display = "none";
						document.getElementById("prenumeError").style.display = "none";
						document.getElementById("emailError").style.display = "none";
						document.getElementById("adresaError").style.display = "none";
						document.getElementById("CNPError").style.display = "inline";
						document.getElementById("telefonError").style.display = "none";
						document.getElementById("dnError").style.display = "none";
						document.getElementById("grupaError").style.display = "none";
						document.getElementById("numepError").style.display = "none";
						document.getElementById("prenumepError").style.display = "none";
						document.getElementById("telefonpError").style.display = "none";
						$('#CNPError').html('CNP trebuie aibă structura corectă!');
						
					}
					
				else if  (!pattern.test(telefon) )
					{
					
						document.getElementById("allError").style.display = "none";
						document.getElementById("numeError").style.display = "none";
						document.getElementById("prenumeError").style.display = "none";
						document.getElementById("emailError").style.display = "none";
						document.getElementById("adresaError").style.display = "none";
						document.getElementById("CNPError").style.display = "none";
						document.getElementById("telefonError").style.display = "inline";
						document.getElementById("dnError").style.display = "none";
						document.getElementById("grupaError").style.display = "none";
						document.getElementById("numepError").style.display = "none";
						document.getElementById("prenumepError").style.display = "none";
						document.getElementById("telefonpError").style.display = "none";
						$('#telefonError').html('Numărul de telefon trebuie aibă structura corectă!');
						
					}
					
					
					
				else if  (!letters.test(numep) || numep.length<3 )
					{
							
					
						document.getElementById("allError").style.display = "none";
						document.getElementById("numeError").style.display = "none";
						document.getElementById("prenumeError").style.display = "none";
						document.getElementById("emailError").style.display = "none";
						document.getElementById("adresaError").style.display = "none";
						document.getElementById("CNPError").style.display = "none";
						document.getElementById("telefonError").style.display = "none";
						document.getElementById("dnError").style.display = "none";
						document.getElementById("grupaError").style.display = "none";
						document.getElementById("numepError").style.display = "inline";
						document.getElementById("prenumepError").style.display = "none";
						document.getElementById("telefonpError").style.display = "none";
						
						$('#numepError').html('Numele trebuie sa conțină cel puțin trei litere!');
						
					}

				else if  (!letters.test(prenumep) || prenumep.length<3 )
					{
						
						document.getElementById("allError").style.display = "none";
						document.getElementById("numeError").style.display = "none";
						document.getElementById("prenumeError").style.display = "none";
						document.getElementById("emailError").style.display = "none";
						document.getElementById("adresaError").style.display = "none";
						document.getElementById("CNPError").style.display = "none";
						document.getElementById("telefonError").style.display = "none";
						document.getElementById("dnError").style.display = "none";
						document.getElementById("grupaError").style.display = "none";
						document.getElementById("numepError").style.display = "none";
						document.getElementById("prenumepError").style.display = "inline";
						document.getElementById("telefonpError").style.display = "none";
						$('#prenumepError').html('Prenumele trebuie sa conțină cel puțin trei litere!');
						
					}
					
				else if  (!pattern.test(telefonp) )
					{
						
						document.getElementById("allError").style.display = "none";
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
						document.getElementById("telefonpError").style.display = "inline";
						$('#telefonpError').html('Numărul de telefon trebuie aibă structura corectă!');
						
					}
					
				
					
					
				else {
						
						document.getElementById("allError").style.display = "none";
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
                        
                        var pacient = {};
                        pacient.nume = nume;
                        pacient.prenume = prenume;
                        pacient.email = email;
                        pacient.dataNasterii=dn;
                        pacient.adresa=adresa;
                        pacient.CNP=CNP;
                        pacienti.push(pacient);
                        localStorage.setItem("pacientiList", JSON.stringify(pacienti));
						$('#inregistrareSucc').click();
				}
	
}

});



