function getList(){
	var myArray = readJson(); //Change this to the PHP values
	var result = makeTableHTML(myArray);
	document.getElementById('outputDiv').innerHTML = result;
}

function readJson(){
	var mydata = JSON.parse(data);
	var array = [];
	
	for(var i=0; i < Object.keys(data).length; i++) {
        array[i] = mydata.id[i];
    }
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
