function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

$('#salveazaProgramareFirst').click(function() {
		var nume = document.getElementById("numeInput").value;
		var prenume = document.getElementById("prenumeInput").value;
		var email = document.getElementById("emailInput").value;
		var telefon = document.getElementById("telefonInput").value;
		var calendar = document.getElementById("calendarInput").value;
		var letters=/^[a-zA-Z]*$/;
		var pattern = /^([0-9]{10})$/;
		
		
	if (nume == "" && prenume == ""&& email == ""  && telefon == ""  && calendar == "" ) {

		document.getElementById("numeError").style.display = "block";
		document.getElementById("prenumeError").style.display = "inline";
		document.getElementById("emailError").style.display = "inline";
		document.getElementById("telefonError").style.display = "inline";
		document.getElementById("calendarError").style.display = "inline";

		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	
	else 	if (nume == "" && prenume == ""&& email == ""  && telefon == ""  ) {

		document.getElementById("numeError").style.display = "inline";
		document.getElementById("prenumeError").style.display = "inline";
		document.getElementById("emailError").style.display = "inline";
		document.getElementById("telefonError").style.display = "inline";
		document.getElementById("calendarError").style.display = "none";

		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	
	else	if (nume == "" && prenume == ""&& email == ""   && calendar == "" ) {

		document.getElementById("numeError").style.display = "inline";
		document.getElementById("prenumeError").style.display = "inline";
		document.getElementById("emailError").style.display = "inline";
		document.getElementById("telefonError").style.display = "none";
		document.getElementById("calendarError").style.display = "inline";

		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	
	else	if (nume == "" && prenume == ""  && telefon == ""  && calendar == "" ) {


		document.getElementById("numeError").style.display = "inline";
		document.getElementById("prenumeError").style.display = "inline";
		document.getElementById("emailError").style.display = "none";
		document.getElementById("telefonError").style.display = "inline";
		document.getElementById("calendarError").style.display = "inline";

		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	
	else	if (nume == "" &&  email == ""  && telefon == ""  && calendar == "" ) {

		document.getElementById("numeError").style.display = "inline";
		document.getElementById("prenumeError").style.display = "none";
		document.getElementById("emailError").style.display = "inline";
		document.getElementById("telefonError").style.display = "inline";
		document.getElementById("calendarError").style.display = "inline";

		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	else	if ( prenume == ""&& email == ""  && telefon == ""  && calendar == "" ) {

		document.getElementById("numeError").style.display = "none";
		document.getElementById("prenumeError").style.display = "inline";
		document.getElementById("emailError").style.display = "inline";
		document.getElementById("telefonError").style.display = "inline";
		document.getElementById("calendarError").style.display = "inline";

		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	
	
	///////////////////////////////////////////////////////////////////////////////////3333333
	else if(nume == "" && prenume == ""&& email == ""  )
	{
	
		document.getElementById("numeError").style.display = "inline";
		document.getElementById("prenumeError").style.display = "inline";
		document.getElementById("emailError").style.display = "inline";
		document.getElementById("telefonError").style.display = "none";
		document.getElementById("calendarError").style.display = "none";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	else if(nume == "" && prenume == "" && telefon == "")
	{
		document.getElementById("numeError").style.display = "inline";
		document.getElementById("prenumeError").style.display = "inline";
		document.getElementById("emailError").style.display = "none";
		document.getElementById("telefonError").style.display = "inline";
		document.getElementById("calendarError").style.display = "none";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	else if(nume == "" && prenume == "" && calendar == "")
	{
		document.getElementById("numeError").style.display = "inline";
		document.getElementById("prenumeError").style.display = "inline";
		document.getElementById("emailError").style.display = "none";
		document.getElementById("telefonError").style.display = "none";
		document.getElementById("calendarError").style.display = "inline";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	
	else if(nume == "" && email == ""  && telefon == "" )
	{
		document.getElementById("numeError").style.display = "inline";
		document.getElementById("prenumeError").style.display = "none";
		document.getElementById("emailError").style.display = "inline";
		document.getElementById("telefonError").style.display = "inline";
		document.getElementById("calendarError").style.display = "none";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	else if(nume == "" && email == ""  && calendar == "" )
	{
		document.getElementById("numeError").style.display = "inline";
		document.getElementById("prenumeError").style.display = "none";
		document.getElementById("emailError").style.display = "inline";
		document.getElementById("telefonError").style.display = "none";
		document.getElementById("calendarError").style.display = "inline";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
		else if(prenume == "" && email == ""  && telefon == "" )
	{
		
		document.getElementById("numeError").style.display = "none";
		document.getElementById("prenumeError").style.display = "inline";
		document.getElementById("emailError").style.display = "inline";
		document.getElementById("telefonError").style.display = "inline";
		document.getElementById("calendarError").style.display = "none";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	
		else if(prenume == "" && email == ""  && calendar == "" )
	{
		document.getElementById("numeError").style.display = "none";
		document.getElementById("prenumeError").style.display = "inline";
		document.getElementById("emailError").style.display = "inline";
		document.getElementById("telefonError").style.display = "none";
		document.getElementById("calendarError").style.display = "inline";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	
			else if(nume == "" && telefon == ""  && calendar == "" )
	{
		document.getElementById("numeError").style.display = "inline";
		document.getElementById("prenumeError").style.display = "none";
		document.getElementById("emailError").style.display = "none";
		document.getElementById("telefonError").style.display = "inline";
		document.getElementById("calendarError").style.display = "inline";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
				else if(prenume == "" && telefon == ""  && calendar == "" )
	{
		document.getElementById("numeError").style.display = "none";
		document.getElementById("prenumeError").style.display = "inline";
		document.getElementById("emailError").style.display = "none";
		document.getElementById("telefonError").style.display = "inline";
		document.getElementById("calendarError").style.display = "inline";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
					else if(email == "" && telefon == ""  && calendar == "" )
	{
		document.getElementById("numeError").style.display = "none";
		document.getElementById("prenumeError").style.display = "none";
		document.getElementById("emailError").style.display = "inline";
		document.getElementById("telefonError").style.display = "inline";
		document.getElementById("calendarError").style.display = "inline";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	
	
	/////////////////////////////////////////////////////////////////////////////////22222222222
	else if(nume == "" && prenume == ""  )
	{
		document.getElementById("numeError").style.display = "inline";
		document.getElementById("prenumeError").style.display = "inline";
		document.getElementById("emailError").style.display = "none";
		document.getElementById("telefonError").style.display = "none";
		document.getElementById("calendarError").style.display = "none";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	else if(nume == "" && email == ""  )
	{
		document.getElementById("numeError").style.display = "inline";
		document.getElementById("prenumeError").style.display = "none";
		document.getElementById("emailError").style.display = "inline";
		document.getElementById("telefonError").style.display = "none";
		document.getElementById("calendarError").style.display = "none";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	else if(nume == "" && telefon == ""  )
	{
		document.getElementById("numeError").style.display = "inline";
		document.getElementById("prenumeError").style.display = "none";
		document.getElementById("emailError").style.display = "none";
		document.getElementById("telefonError").style.display = "inline";
		document.getElementById("calendarError").style.display = "none";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	else if(nume == "" && calendar == ""  )
	{
		document.getElementById("numeError").style.display = "inline";
		document.getElementById("prenumeError").style.display = "none";
		document.getElementById("emailError").style.display = "none";
		document.getElementById("telefonError").style.display = "none";
		document.getElementById("calendarError").style.display = "inline";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	//////////////////////////////////////////////////////////////////////
	else if(email == "" && prenume == ""  )
	{
		document.getElementById("numeError").style.display = "none";
		document.getElementById("prenumeError").style.display = "inline";
		document.getElementById("emailError").style.display = "inline";
		document.getElementById("telefonError").style.display = "none";
		document.getElementById("calendarError").style.display = "none";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	else if(prenume == "" && telefon == ""  )
	{
		document.getElementById("numeError").style.display = "none";
		document.getElementById("prenumeError").style.display = "inline";
		document.getElementById("emailError").style.display = "none";
		document.getElementById("telefonError").style.display = "inline";
		document.getElementById("calendarError").style.display = "none";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
		else if(prenume == "" && calendar == ""  )
	{
		document.getElementById("numeError").style.display = "none";
		document.getElementById("prenumeError").style.display = "inline";
		document.getElementById("emailError").style.display = "none";
		document.getElementById("telefonError").style.display = "none";
		document.getElementById("calendarError").style.display = "inline";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	else if(email == "" && telefon == ""  )
	{
		document.getElementById("numeError").style.display = "none";
		document.getElementById("prenumeError").style.display = "none";
		document.getElementById("emailError").style.display = "inline";
		document.getElementById("telefonError").style.display = "inline";
		document.getElementById("calendarError").style.display = "none";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	else if(email == "" && calendar == ""  )
	{
		document.getElementById("numeError").style.display = "none";
		document.getElementById("prenumeError").style.display = "none";
		document.getElementById("emailError").style.display = "inline";
		document.getElementById("telefonError").style.display = "none";
		document.getElementById("calendarError").style.display = "inline";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	else if(telefon == "" && calendar == ""  )
	{
		document.getElementById("numeError").style.display = "none";
		document.getElementById("prenumeError").style.display = "none";
		document.getElementById("emailError").style.display = "none";
		document.getElementById("telefonError").style.display = "inline";
		document.getElementById("calendarError").style.display = "inline";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	else if(nume == "" )
	{
		document.getElementById("numeError").style.display = "inline";
		document.getElementById("prenumeError").style.display = "none";
		document.getElementById("emailError").style.display = "none";
		document.getElementById("telefonError").style.display = "none";
		document.getElementById("calendarError").style.display = "none";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	else if(prenume == "" )
	{
		
		document.getElementById("numeError").style.display = "none";
		document.getElementById("prenumeError").style.display = "inline";
		document.getElementById("emailError").style.display = "none";
		document.getElementById("telefonError").style.display = "none";
		document.getElementById("calendarError").style.display = "none";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	else if(email == "" )
	{
		document.getElementById("numeError").style.display = "none";
		document.getElementById("prenumeError").style.display = "none";
		document.getElementById("emailError").style.display = "inline";
		document.getElementById("telefonError").style.display = "none";
		document.getElementById("calendarError").style.display = "none";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	else if(telefon == "" )
	{
		document.getElementById("numeError").style.display = "none";
		document.getElementById("prenumeError").style.display = "none";
		document.getElementById("emailError").style.display = "none";
		document.getElementById("telefonError").style.display = "inline";
		document.getElementById("calendarError").style.display = "none";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	
	else if(calendar == "" )
	{
		document.getElementById("numeError").style.display = "none";
		document.getElementById("prenumeError").style.display = "none";
		document.getElementById("emailError").style.display = "none";
		document.getElementById("telefonError").style.display = "none";
		document.getElementById("calendarError").style.display = "inline";
		
		$('#numeError').html('Câmpul Nume trebuie completat!');
		$('#prenumeError').html('Câmpul Prenume trebuie completat!');
		$('#emailError').html('Câmpul Email trebuie completat!');
		$('#telefonError').html('Câmpul Număr telefon trebuie completat!');
		$('#calendarError').html('Alegeți o dată!');
	}
	


    else {
		var ok=true;
		var oke=true;
		var okn=true;
		var okp=true;
		var okt=true;
        $.getJSON('data/calendar.json', function(data) {
			
            $.each(data.calendar, function(i, f) {
                if(f.dataOcupata.includes(calendar)){
					ok=false;
					document.getElementById("numeError").style.display = "none";
					document.getElementById("prenumeError").style.display = "none";
					document.getElementById("emailError").style.display = "none";
					document.getElementById("telefonError").style.display = "none";
	
					document.getElementById("calendarError").style.display = "inline";
					$('#calendarError').html('Alegeți o alta dată!Aceasta este ocupată!');
				}
				 });
	 });
				if(!validateEmail(email))
					{
						oke=false;
					document.getElementById("numeError").style.display = "none";
					document.getElementById("prenumeError").style.display = "none";
					document.getElementById("emailError").style.display = "inline";
					document.getElementById("telefonError").style.display = "none";
					document.getElementById("calendarError").style.display = "none";
					$('#emailError').html('Emailul trebuie sa aibă structura corectă!');
					}
					 
				else if  (!letters.test(nume) || nume.length<3 )
					{
							
					okn=false;
					document.getElementById("numeError").style.display = "inline";
					document.getElementById("prenumeError").style.display = "none";
					document.getElementById("emailError").style.display = "none";
					document.getElementById("telefonError").style.display = "none";
	
					document.getElementById("calendarError").style.display = "none";
					$('#numeError').html('Numele trebuie sa conțină cel puțin trei litere!');
						
					}

				else if  (!letters.test(prenume) || prenume.length<3 )
					{
					okp=false;
					document.getElementById("numeError").style.display = "none";
					document.getElementById("prenumeError").style.display = "inline";
					document.getElementById("emailError").style.display = "none";
					document.getElementById("telefonError").style.display = "none";
	
					document.getElementById("calendarError").style.display = "none";
					$('#prenumeError').html('Prenumele trebuie sa conțină cel puțin trei litere!');
						
					}
					
				else if  (!pattern.test(telefon) )
					{
					okt=false;
					document.getElementById("numeError").style.display = "none";
					document.getElementById("prenumeError").style.display = "none";
					document.getElementById("emailError").style.display = "none";
					document.getElementById("telefonError").style.display = "inline";
	
					document.getElementById("calendarError").style.display = "none";
					$('#telefonError').html('Numărul de telefon trebuie aibă structura corectă!');
						
					}
					
				else if(ok==true && okn==true && okp==true && oke==true && okt==true){
					document.getElementById("numeError").style.display = "none";
					document.getElementById("prenumeError").style.display = "none";
					document.getElementById("emailError").style.display = "none";
					document.getElementById("telefonError").style.display = "none";
	
					document.getElementById("calendarError").style.display = "none";
					$('#salveazaProgramare').click();
				}
				
	 
	}
	
});