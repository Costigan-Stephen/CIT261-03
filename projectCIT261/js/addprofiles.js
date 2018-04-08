function Profile(profile, user, password, email, notes) {
    this.profile = profile;
    this.user = user;
    this.password = password;
    this.email = email;
    this.notes = notes;
    this.done = false;
}

var profiles = new Array();

window.onload = init;

function init() {
    var saveButton = document.getElementById("Save");
    saveButton.onclick = getFormData;
    getProfileData();
}

function getProfileData() {
    var request = new XMLHttpRequest();
    request.open("GET", "profiles.json");
    request.onreadystatechange = function() {
        if (this.readyState == this.DONE && this.status == 200) {
            if (this.responseText) { 
                parseProfileItems(this.responseText);
                addProfilesToPage();
            }
            else {
                console.log("Error: Data is empty");
            }
        }
    };
    request.send();
}

function parseProfileItems(profilesJSON) {
    if (profilesJSON == null || profilesJSON.trim() == "") {
        return;
    }
    var profilesArray = JSON.parse(profilesJSON);
    if (profilesArray.length == 0) {
        console.log("Error: the profile list array is empty!");
        return;
    }
    for (var i = 0; i < profilesArray.length; i++) {
        var profileItem = profilesArray[i];
        profile.push(profileItem);
    }
}

function addProfilesToPage() {
    var ul = document.getElementById("profileList");
    for (var i = 0; i < profiles.length; i++) {
        var profileItem = profiles[i];
        var li = document.createElement("li");
        li.innerHTML =
            profileItem.profile + profileItem.user + profileItem.password + profileItem.email + profileItem.notes;
        ul.appendChild(li);
    }
}

function getFormData() {
    var profile = document.getElementById("profile").value;
    if (checkInputText(profile, "Please enter a Profile Name")) return;

    var user = document.getElementById("user").value;
    if (checkInputText(user, "Please enter a username")) return;

    var password = document.getElementById("password").value;
    if (checkInputText(password, "Please enter a password")) return;

    var email = document.getElementById("email").value;
    if (checkInputText(email, "Please enter an email")) return;
  
    var notes = document.getElementById("notes").value;
    if (checkInputText(notes, "Please enter any notes you will need concerning this profile.")) return;
  
    console.log("New profile: " + profile + user + password + email + notes);
    var profileItem = new Profile(profile, user, password, email, notes);
    profiles.push(profileItem);
    addProfileToPage(profileItem);
    saveProfileData();
}

function checkInputText(value, msg) {
    if (value == null || value == "") {
        alert(msg);
        return true;
    }
    return false;
}  

function addProfileToPage(profileItem) {
    var ul = document.getElementById("profileList");
    var li = document.createElement("li");
    li.innerHTML =
        profileItem.profile + profileItem.user + profileItem.password + profileItem.email + profileItem.notes;
    ul.appendChild(li);
    document.forms[0].reset();
}

function saveProfileData() {
    var profilesJSON = JSON.stringify(profiles);
    var request = new XMLHttpRequest();
    var URL = "save.php?data=" + encodeURI(profilesJSON);
    request.open("GET", URL);
    request.setRequestHeader("Content-Type",
                             "text/plain;charset=UTF-8");
    request.send();
}
