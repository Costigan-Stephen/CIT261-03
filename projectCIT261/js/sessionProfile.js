function Start(){
	
	if (localStorage){
		
		if (sessionStorage.id){
			data = session();
		}
	}else{	
		var data = defaultStorage();
		//var array = JSON.parse(data);
		if (sessionStorage.id){
			data = session();
		}
	}
}

//################################################################################

function loadStorage() {
	var ids = JSON.parse(window.localStorage.getItem('ids'));
	var user = JSON.parse(window.localStorage.getItem('user'));
	var pass = JSON.parse(window.localStorage.getItem('pass'));
	var email = JSON.parse(window.localStorage.getItem('email'));
	var notes = JSON.parse(window.localStorage.getItem('notes'));
	
	var x = ids.length;
	
	var profile = new Array(x);
	
	for(var i=0; i < x; i++) { //All values in local storage
        profile[i].id 		= ids[i];
		profile[i].user 	= user[i];
		profile[i].pass 	= pass[i];
		profile[i].email 	= email[i];
		profile[i].notes 	= notes[i];
		
    }
		
	var array = [];
	
	for(var i=0; i < profile.length; i++) { //Only object ID's
        array[i] = profile[i].id;
    }
	return array;
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

function loadData() {

	var profile = new Array(5);
	
        profile[0] = JSON.parse(window.localStorage.getItem('ids'));
		profile[1] = JSON.parse(window.localStorage.getItem('user'));
		profile[2] = JSON.parse(window.localStorage.getItem('pass'));
		profile[3] = JSON.parse(window.localStorage.getItem('email'));
		profile[4] = JSON.parse(window.localStorage.getItem('notes'));

		
	return profile;
}

//################################################################################

function session(){
	
	var idN = sessionStorage.id;
	
	if (idN == "x"){ //clear fields, create new
	
		document.getElementById('profile').value = "";
		document.getElementById('user').value = "";
		document.getElementById('password').value = "";
		document.getElementById('email').value = "";
		document.getElementById('notes').value = "";
		
		var obj = JSON.parse(window.localStorage.getItem('ids'));
		var x = obj.length + 1;
		
		sessionStorage.setItem("id", x);
		sessionStorage.getItem("id");	
		
	}else{
		var val = loadData();
		var	id 		= JSON.parse(window.localStorage.getItem('ids'));
		var	user 	= JSON.parse(window.localStorage.getItem('user'));
		var	pass 	= JSON.parse(window.localStorage.getItem('pass'));
		var	email 	= JSON.parse(window.localStorage.getItem('email'));
		var	notes 	= JSON.parse(window.localStorage.getItem('notes'));
		var test = new Array(5);
		
			test[0] = id[idN];
			test[1] = user[idN];
			test[2] = pass[idN];
			test[3] = email[idN];
			test[4] = notes[idN];
		
		//var test = val[idN];
		
		if(test[0]){}else{ test[0]="";}	
		if(test[1]){}else{ test[1]="";}	
		if(test[2]){}else{ test[2]="";}	
		if(test[3]){}else{ test[3]="";}	
		if(test[4]){}else{ test[4]="";}	
				
		if (test){
			document.getElementById('profile').value 	= test[0];
			document.getElementById('user').value 		= test[1];
			document.getElementById('password').value 	= test[2];
			document.getElementById('email').value 		= test[3];
			document.getElementById('notes').value 		= test[4];
			
		}
	}
}
