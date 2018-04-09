document.addEventListener("DOMContentLoaded", function startup(){
	var data = loadStorage();
	//var array = JSON.parse(data);
	var result = makeTableHTML(data);
	document.getElementById('outputDiv').innerHTML = result;
});

function loadStorage() {
	if (window.localStorage.length){
		var obj = { 
			"profiles" : [
			{ 
				"id"  : "Facebook",
				"user" : "jacksonavery@gmail.com",
				"pass" : "ilovefacebook",
				"email" : "jacksonavery@gmail.com",
				"notes" : ""
			},
			{ 
				"id"  : "Hotmail",
				"user" : "janesmith@hotmail.com",
				"pass" : "janesmith54321",
				"email" : "janesmith@hotmail.com",
				"notes" : ""
			},
			{ 
				"id"  : "Gmail",
				"user" : "johndoe@gmail.com",
				"pass" : "johndoe12345",
				"email" : "johndoe@gmail.com",
				"notes" : ""
			},
			{ 
				"id"  : "BYUI",
				"user" : "student",
				"pass" : "letsStudyCIT261",
				"email" : "student@byui.edu",
				"notes" : ""
			}
		]};
		var profile = new Array(4);
			profile[0] = obj.profiles[0];
			profile[1] = obj.profiles[1];
			profile[2] = obj.profiles[2];
			profile[3] = obj.profiles[3];
		
		localStorage.setItem("profiles", profile);	
	}else{
		var profile = localStorage["profiles"];
	}
	
	
	var array = [];
	
	for(var i=0; i < profile.length; i++) {
        array[i] = profile[i].id;
    }
	return array;
}

function makeTableHTML(myArray) {
    var result = "<table class=\"table\"><br><br>";
	var tableStart = "";
	var tableEnd = "";
	
    for(var i=0; i < myArray.length; i++) {
        result += "<tr>";
		tableStart = "<td class=\"tableElm";
		tableEnd = "id=\"list"+ i +"\" draggable=\"true\" ondrag=\"swipeList(list"+ i +")\"  onclick=\"openProfile("+ i +")\">"+myArray[i]+"<img class=\"trashHide\" align=\"right\" id=\"trash"+i+"\" onclick=\"delete(list"+ i +")\" src=\"images/trash.png\"></td>";
		
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

function openProfile(x) {
	// Hide/Show trash icon after swipe
	var profile = localStorage["profiles"];
	sessionStorage.setItem("profiles", profile);	
	window.location.href = 'profileView.html';
	
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
	
	var filtered = parseInt(x);
	
	var img = "trash" + filtered;
	
	// Hide/Show trash icon after swipe
	if (x.className == "tableElmA"){
		x.className = "tableElmAHide";
		//document.getElementById(img).classList.add('trashHide');
	}else if(x.className == "tableElmAHide"){
		x.className = "tableElmA";
		//document.getElementById(img).classList.add('trash');
	}else if (x.className == "tableElmB"){
		x.className = "tableElmBHide";
		//document.getElementById(img).classList.add('trashHide');
	}else if(x.className == "tableElmBHide"){
		x.className = "tableElmB";
		//document.getElementById(img).classList.add('trash');
	}
}

function Local() {
	var data = document.getElementById('profile').value;
	localStorage.setItem("key", data); 
  
  var data = document.getElementById('user').value;
	localStorage.setItem("key", data); 
  
  var data = document.getElementById('pass').value;
	localStorage.setItem("key", data); 
  
  var data = document.getElementById('email').value;
	localStorage.setItem("key", data); 
  
  var data = document.getElementById('notes').value;
	localStorage.setItem("key", data); 
	
	var test = localStorage.getItem("key");
    document.getElementById('outputDiv').value = test;
}	
