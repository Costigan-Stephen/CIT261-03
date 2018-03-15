## Topics Covered

1. Loops, Conditional Statements, Functions, Variables, Parameters, Arrays, Associative Arrays			
2. Object Creation Functions, Inheritance, Properties, Methods, Instantiation

### Loops

Here os an example of Loops in action, this script attempts to take 2 to the Nth degree.  
For example, 2 to the 8 gives 256.  Feel free to enter a number and see what happens.

```Code
<!DOCTYPE HTML>
<html lang="en-us">
<head>
<meta charset="utf-8">
<title>Powers of Two and Binary</title>
<script type="text/javascript">

function calc() {

	// 		L03 COVERING
	// ------------------------
	// Loops, 
	// Conditional Statements, 
	// Functions, 
	// Variables, 
	// Parameters, 
	// Arrays, 
	// Associative Arrays
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
</script>
</head>

<body>
	<h1>Powers Of Two</h1>  
    <p>
	What is 2^<input type="text" id="txt1" size="3">? <button type="button" onclick="calc()">GO</button>
	</p>
	<div id="outputDiv"></div>
</body>
</html>
```

