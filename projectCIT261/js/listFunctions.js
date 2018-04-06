function getList(){
	var myArray = ["Facebook", "Hotmail", "GMail", "BYUI"];
	
	var result = makeTableHTML(myArray);
	
	document.getElementById('outputDiv').innerHTML = result;
}

function makeTableHTML(myArray) {
    var result = "<table class=\"table\"><br><br>";
	
    for(var i=0; i < myArray.length; i++) {
        result += "<tr>";
        
		if(i % 2 == 0) {
           	result += "<td class=\"tableElmB\" onclick=\"showTrash(trash"+ i +")\">"+myArray[i]+"<img class=\"trashHide\" align=\"right\" id=\"trash"+i+"\" src=\"images/trash.png\"></td>";
		} else {
			result += "<td class=\"tableElmA\" onclick=\"showTrash(trash"+ i +")\">"+myArray[i]+"<img class=\"trashHide\" align=\"right\" id=\"trash"+i+"\" src=\"images/trash.png\"></td>";
		}
        
        result += "</tr>";
    }
    result += "</table>";

	return result;
}


function showTrash(x) {
	
	// Hide/Show trash icon after swipe
	if (x.className == "trash"){
		x.className = "trashHide";

	}else if(x.className == "trashHide"){
		x.className = "trash";
	}
}