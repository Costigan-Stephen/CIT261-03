	// 		L03 COVERING
	// ------------------------
	// Loops, 
	// Conditional Statements, 
	// Functions, 
	// Variables, 
	// Parameters, 
	// Arrays, 
	// Associative Arrays (HERE)
	// ------------------------	

	function miles(){
	
		var t1 = document.getElementById('txt1').value;
		var t2 = document.getElementById('txt2').value;
		var t3 = document.getElementById('txt3').value;
		var t4 = document.getElementById('txt4').value;
		
		if(t4.length > 0){
		t4 = parseFloat(t4);
		}
		
		var output;
		
		//Regular Array >> var cars = ["Ford", "Falcon", "2010", 80000];
		//var cars {Make: "ford", Model: "falcon", Year: 2010, Mileage: 80000}
		var cars = {Make: t1, Model: t2, Year: t3, Mileage: t4};
		
		if(cars.Mileage > 100000){
			output = "Wow, over 100,000 miles! You might want to start saving up for a new car";
		}else if(cars.Mileage.length == 0){
			output = "";
		}else{
			output = "Only " + cars.Mileage + " miles, You're still good";
		}
		
		document.getElementById('output').innerHTML = output;
	}
