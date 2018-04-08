document.addEventListener("DOMContentLoaded", function startup(){
	var data = loadDoc();
	var array = JSON.parse(data);
	var result = makeTableHTML(myArray);
	document.getElementById('outputDiv').innerHTML = result;
});

function loadDoc() {
	var xhr;
	async: true;
	
	xhr = new XMLHttpRequest();
	/*
	if (window.XMLHttpRequest) xhr = new XMLHttpRequest(); 		// all browsers except IE
	else xhr = new ActiveXObject("Microsoft.XMLHTTP"); 		// for IE
	*/
	xhr.open('GET', 'profiles.json', false);
	xhr.onreadystatechange = function () {
		if (xhr.readyState===4 && xhr.status===200) {			
			var items = JSON.parse(xhr.responseText);
			var array = [];
			for (var key in items) {
				array[key] = items[key].id;
			}
			return array;
		}
	}
	xhr.send();
}

function makeTableHTML(myArray) {
    var result = "<table class=\"table\"><br><br>";
	var tableStart = "";
	var tableEnd = "";
	
    for(var i=0; i < myArray.length; i++) {
        result += "<tr>";
		tableStart = "<td class=\"tableElm";
		tableEnd = "id=\"list"+ i +"\" onclick=\"showTrash(trash"+ i +")\">"+myArray[i]+"<img class=\"trashHide\" align=\"right\" id=\"trash"+i+"\" onclick=\"delete(list"+ i +")\" src=\"images/trash.png\"></td>";
		
		if(i % 2 == 0) {
           	result += tableStart + "A\"" + tableEnd;
		} else {
			result += tableStart + "B\"" + tableEnd;
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

function swipeList(x) {
	// Hide/Show trash icon after swipe
	if (x.className == "tableElmA"){
		x.className = "tableElmAHide";
	}else if(x.className == "tableElmAHide"){
		x.className = "tableElmA";
	}else if (x.className == "tableElmB"){
		x.className = "tableElmBHide";
	}else if(x.className == "tableElmBHide"){
		x.className = "tableElmB";
	}
}
