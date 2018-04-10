function startup(){
	
	//alert(window.localStorage.getItem('profiles'));
	if (localStorage){
		var data = loadStorage();
		var output = document.getElementById('outputDiv'); //only run where this element is present

		if (output) {
			var result = makeTableHTML(data);
			document.getElementById('outputDiv').innerHTML = result;
		}
	}else{	
		var data = defaultStorage();		
		var output = document.getElementById('outputDiv'); //only run where this element is present

		if (output) {
			var result = makeTableHTML(data);
			document.getElementById('outputDiv').innerHTML = result;
		}
	}
}

//################################################################################

function manualReset(){
	var data = defaultStorage();
	//var array = JSON.parse(data);
	var result = makeTableHTML(data);
	document.getElementById('outputDiv').innerHTML = result;
}

function loadStorage() {
	var obj = JSON.parse(window.localStorage.getItem('ids'));
	if (obj){
		var x = obj.length;
		
		var profile = new Array(x);
		
		for(var i=0; i < x; i++) { //All values in local storage
			profile[i] = obj[i];
		}
			
		var ids = [];
		
		for(var i=0; i < profile.length; i++) { //Only object ID's
			ids[i] = profile[i];
		}
	}else{
		var ids = defaultStorage();
	}
	return ids;
}

//################################################################################

function defaultStorage() {
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
	
	//--------------------------------------------------------------
	// STORING IDS IN LOCAL STORAGE
	
	var ids = [];
	
	for(var i=0; i < profile.length; i++) {
        ids[i] = profile[i].id;
    }
	var result = ids;
		
	var storage = JSON.stringify(ids);

	localStorage.setItem('ids', storage);	
	localStorage.getItem('ids');	
	
	//--------------------------------------------------------------
	// STORING USER IN LOCAL STORAGE
	
	var user = [];
	
	for(var i=0; i < profile.length; i++) {
        user[i] = profile[i].user;
    }
	
	storage = JSON.stringify(user);

	localStorage.setItem('user', storage);	
	localStorage.getItem('user');
	
	//--------------------------------------------------------------
	// STORING PASS IN LOCAL STORAGE
	
	var pass = [];
	
	for(var i=0; i < profile.length; i++) {
        pass[i] = profile[i].pass;
    }
	
	storage = JSON.stringify(pass);

	localStorage.setItem('pass', storage);	
	localStorage.getItem('pass');
	
	//--------------------------------------------------------------
	// STORING EMAIL IN LOCAL STORAGE
	
	var email = [];
	
	for(var i=0; i < profile.length; i++) {
        email[i] = profile[i].email;
    }
	
	storage = JSON.stringify(email);

	localStorage.setItem('email', storage);	
	localStorage.getItem('email');
	
	//--------------------------------------------------------------
	// STORING NOTES IN LOCAL STORAGE
	
	var notes = [];
	
	for(var i=0; i < profile.length; i++) {
        notes[i] = profile[i].notes;
    }
	
	storage = JSON.stringify(notes);

	localStorage.setItem('notes', storage);	
	localStorage.getItem('notes');
	
	return result;
}

//################################################################################

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

//################################################################################

function newProfile(){
	//Determine which layout is running the script
	var z = openProfile("x");
}

//################################################################################

function openProfile(x) {

	var profile = window.localStorage.getItem["ids"];
	sessionStorage.setItem("id", x);
	sessionStorage.getItem("id");	
	window.location.href = 'profileView.html';
	
}

//################################################################################

function showTrash(x) {
	// Hide/Show trash icon after swipe
	if (x.className == "trash"){
		x.className = "trashHide";
	}else if(x.className == "trashHide"){
		x.className = "trash";
	}
	
}

//################################################################################

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

//################################################################################

function Local() {
	var obj = JSON.parse(window.localStorage.getItem('ids'));
	var x = obj.length + 1;
	var y = sessionStorage.getItem("id");
	
	
	//--------------------------------------------------------------
	// RETRIEVING DATA FROM FIELDS
	
	var data = new Array(5);
		data[0] = document.getElementById('profile').value;
	 	data[1] = document.getElementById('user').value;
		data[2] = document.getElementById('password').value;
		data[3] = document.getElementById('email').value;
		data[4] = document.getElementById('notes').value;
	
	//--------------------------------------------------------------
	// STORING DATA IN LOCAL STORAGE
	
	if (y < x){  //Replace existing values
		var id 		= storageArray(1);
		var user 	= storageArray(2);
		var pass 	= storageArray(3);
		var email 	= storageArray(4);
		var notes 	= storageArray(5);
		
			id[y] 		= data[0];
			user[y] 	= data[1];
			pass[y] 	= data[2];
			email[y] 	= data[3];
			notes[y] 	= data[4];
		
		var storage = JSON.stringify(id);
			localStorage.setItem("ids", storage); 
			localStorage.getItem("ids")
			
			storage = JSON.stringify(user);
			localStorage.setItem("user", storage); 
			localStorage.getItem("user")
			
			storage = JSON.stringify(pass);
			localStorage.setItem("pass", storage); 
			localStorage.getItem("pass")
			
			storage = JSON.stringify(email);
			localStorage.setItem("email", storage); 
			localStorage.getItem("email")
			
			storage = JSON.stringify(notes);
			localStorage.setItem("notes", storage); 
			localStorage.getItem("notes")
			
			sessionStorage.setItem("id", y);
			sessionStorage.getItem("id");
	
	//--------------------------------------------------------------		
	}else{ //Create new values
		var id 		= storageArray(1);
		var user 	= storageArray(2);
		var pass 	= storageArray(3);
		var email 	= storageArray(4);
		var notes 	= storageArray(5);
			
			x -= 1;
			
			id[x] 		= data[0];
			user[x] 	= data[1];
			pass[x] 	= data[2];
			email[x] 	= data[3];
			notes[x] 	= data[4];
		
		var storage = JSON.stringify(id);
			localStorage.setItem("ids", storage); 
			localStorage.getItem("ids")
			
			storage = JSON.stringify(user);
			localStorage.setItem("user", storage); 
			localStorage.getItem("user")
			
			storage = JSON.stringify(pass);
			localStorage.setItem("pass", storage); 
			localStorage.getItem("pass")
			
			storage = JSON.stringify(email);
			localStorage.setItem("email", storage); 
			localStorage.getItem("email")
			
			storage = JSON.stringify(notes);
			localStorage.setItem("notes", storage); 
			localStorage.getItem("notes")
			
			sessionStorage.setItem("id", x);
			sessionStorage.getItem("id");
	}
	//--------------------------------------------------------------
	alert("Changes Saved")
	window.location.replace('ProfileList.html');
}	

//################################################################################

function deleteProfile(){
		
	var idN = sessionStorage.id
	
	if (idN == "x"){
		var clear = newProfile();
	}else{
		var obj = JSON.parse(window.localStorage.getItem('ids'));
		var x = obj.length;
		
		var id 		= storageArray(1);
		var user 	= storageArray(2);
		var pass 	= storageArray(3);
		var email 	= storageArray(4);
		var notes 	= storageArray(5);
		
		var z = x - 1;
		
		var id2 	= new Array(z);
		var user2 	= new Array(z);
		var pass2 	= new Array(z);
		var email2 	= new Array(z);
		var notes2 	= new Array(z);
		var d = 0;
		
		for(var i=0; i < x; i++) { //All values in local storage
			if(idN != i){
				id2[d] = id[i];
				user2[d] = user[i];
				pass2[d] = pass[i];
				email2[d] = email[i];
				notes2[d] = notes[i];
				d++;
			}
		}
		
		var storage = JSON.stringify(id2);
			localStorage.setItem("ids", storage); 
			localStorage.getItem("ids")
			
			storage = JSON.stringify(user2);
			localStorage.setItem("user", storage); 
			localStorage.getItem("user")
			
			storage = JSON.stringify(pass2);
			localStorage.setItem("pass", storage); 
			localStorage.getItem("pass")
			
			storage = JSON.stringify(email2);
			localStorage.setItem("email", storage); 
			localStorage.getItem("email")
			
			storage = JSON.stringify(notes2);
			localStorage.setItem("notes", storage); 
			localStorage.getItem("notes")
			
			sessionStorage.setItem("id", z);
			sessionStorage.getItem("id");
			
			window.location.replace('ProfileList.html');
			var result = makeTableHTML(data);
			document.getElementById('outputDiv').innerHTML = result;
			
	}
}

//################################################################################

function loadArray(data) { //Depreciated
	
	var obj = JSON.parse(window.localStorage.getItem('ids'));
	var x = obj.length + 1;
	
	var result = new Array(x);
	
	for(var i=0; i < x; i++) { //turn values into an array
        result[i] = data[i];
    }
		
	return result;
}

//################################################################################

function storageArray(z) {
	
	if(z == 1){
		var data =  JSON.parse(window.localStorage.getItem('ids'));
	}else if(z == 2){
		var data =  JSON.parse(window.localStorage.getItem('user'));
	}else if(z == 3){
		var data =  JSON.parse(window.localStorage.getItem('pass'));
	}else if(z == 4){
		var data =  JSON.parse(window.localStorage.getItem('email'));
	}else if(z == 5){
		var data =  JSON.parse(window.localStorage.getItem('notes'));
	}
	
	var x = data.length;
	
    var result = new Array(x);
	
    for(var i=0; i < x; i++) {
		result[i] = data[i] ;
    }
	
	return result;
}
