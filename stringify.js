function string() {

	var make = document.getElementById('txt1').value;
	var model = document.getElementById('txt2').value;
	var year = document.getElementById('txt3').value;
	var mileage = document.getElementById('txt4').value;
	
	var cars = {Make:make,Model:model,Year:year,Mileage:mileage}
	var string = JSON.stringify(cars)

	document.getElementById('outputDiv').innerHTML = string;
}
function string2() {
	
	var cars = {Make:"Ford",Model:"Falcon",Year:"1998",Mileage:"150000"}
	var string = JSON.stringify(cars)

	document.getElementById('outputDiv').innerHTML = string;
}
