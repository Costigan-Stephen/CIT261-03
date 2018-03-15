	// 		L03 COVERING
	// ------------------------
	// Conditional Statements,
	// Functions,
	// Parameters,
	// Arrays,
	// ------------------------	

		/* 
		* Input: 		Take string of text from user
		* Processing: 	Convert text into string, separate by commas, clear spaces
						Put into function addEnds to find sum of each end of array
		* Output: 		display calculated value in text field
		*/
	function main(press){
		
		var list = document.getElementById('numb').value;
		list = list.replace(/\s+/g, '');		// Clear Spaces
		list = list.split(",");					// Convert comma separated values to string
		
		if (press == "ends"){
			var sumVal = addEnds(list);
		}else if (press == "mid") {
			var sumVal = getMiddle(list);
		}


		document.getElementById('answ').value = sumVal;

	}
	function addEnds(list){
		
		var len = list.length - 1 ;
		var num1 = parseFloat ( list[0] );
		var num2 = parseFloat ( list[len] );
		var answ = num1 + num2;
		
		return (answ);

	}
	function getMiddle(list){
		
		if (list.length %2 == 0) {
											// Find average of 2 middle numbers
			var mid = parseFloat(list.length) / 2;
			var mid2 = parseFloat (mid) - 1;
			var num1 = parseFloat ( list[mid] );
			var num2 = parseFloat ( list[mid2] );
			var answ = ( num1 + num2 )/ 2;
		} else {
											// Only one middle number, minus 0.5 to reach it.
			var len = parseFloat(list.length);
			var mid = ((len) / 2 )- 0.5;
			var answ = list[mid];
		}

		return (answ);

	}
	function clearText(){
		
											// clear text fields
		document.getElementById('numb').value = "";
		document.getElementById('answ').value = "";		
	}