document.addEventListener("DOMContentLoaded", function startup(){
	
	if (window.localStorage.length){	
		var data = loadStorage();

	}else{
		var id = sessionStorage[id];
		document.getElementById('profile').value = localStorage[profiles[id].id];
		document.getElementById('user').value = localStorage[profiles[id].user];
		document.getElementById('password').value = localStorage[profiles[id].pass];
		document.getElementById('email').value = localStorage[profiles[id].email];
		document.getElementById('notes').value = localStorage[profiles[id].notes];
	}
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