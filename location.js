function WhereareYou(position) {
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', "https://ipinfo.io/json", true);
	xhr.send();
	
	xhr.addEventListener("readystatechange", processRequest, false);
	
	function processRequest(x) {
	     if (xhr.readyState == 4 && xhr.status == 200) {
			var notify = JSON.parse(xhr.responseText);
			document.getElementById('OutputDiv').innerHTML = "You live in " + notify.city + ", " + notify.region + " right?";
		}
	}
    
}