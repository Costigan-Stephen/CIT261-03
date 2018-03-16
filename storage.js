function Local() {
	var data = document.getElementById('input').value;
	localStorage.setItem("key", data); 
	
	var test = localStorage.getItem("key");
    document.getElementById('local').value = test;
}	
function Session() {
	var data = document.getElementById('input').value;
	sessionStorage.setItem("key", data); 
	
	var test = sessionStorage.getItem("key");
    document.getElementById('session').value = test;
}