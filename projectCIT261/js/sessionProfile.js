function Start(){
	if (localStorage.profiles.id){
		//nothing
	}else{	
		var data = loadStorage();
		//var array = JSON.parse(data);
		if (sessionStorage.id){
			var idN = sessionStorage.id;
		
			var test = [localStorage.getItem(profiles[idN].id),localStorage.getItem(profiles[idN].user),localStorage.getItem(profiles[idN].pass),localStorage.getItem(profiles[idN].email),localStorage.getItem(profiles[idN].notes)];
			alert (test);
			
			if (test){
				document.getElementById('profile').value = localStorage.getItem(profiles[idN].id);
				document.getElementById('user').value = localStorage.getItem(profiles[idN].user);
				document.getElementById('password').value = localStorage.getItem(profiles[idN].password);
				document.getElementById('email').value = localStorage.getItem(profiles[idN].email);
				document.getElementById('notes').value = localStorage.getItem(profiles[idN].notes);
			}
		}
	}
}

function loadStorage() {
	
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
	localStorage.getItem("profiles");	
		
	var array = [];
	
	for(var i=0; i < profile.length; i++) {
        array[i] = profile[i].id;
    }
	return array;
}
