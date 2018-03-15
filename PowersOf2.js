function calc() {

	// 		L03 COVERING
	// ------------------------
	// Loops, 
	// Conditional Statements, 
	// Functions, 
	// Variables, 
	// Parameters, 
	// ------------------------	


   	/* 		Defining Table
	* Input: 		None.
	* Processing: 	Determine all values between 2^0 to 2^31.
	* Output: 		Display result of calculation.
	*/     
	var cal = 0;
	var i = 0;
	var output = "";
	var t1 = document.getElementById('txt1').value;
	t1 = parseFloat(t1);
	
	//Only run when t1 > 0
	if (t1 > 0){
		while(i <= t1){
			cal = Math.pow(2, i);
			output += "2^" + i + " = " + cal + "<br/>";
			i += 1;
		}
	}

	document.getElementById('outputDiv').innerHTML = output;
}
