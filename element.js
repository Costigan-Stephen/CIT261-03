function add() {
	
	var x = "";
	var v = sessionStorage.getItem("v");
	v = parseInt(v);
	
	if(v > 0 && v < 5){

	if ( v == 1){
		v = 2;
		x = "CSS";
	}else if(v == 2){
		v = 3;
		x = "HTML";
	}else if(v == 3){
		v = 4;
		x = "JSON";
	}else if(v == 4){
		v = 1;
		x = "JAVASCRIPT";
	}
	
	}else{
		v = 1;
		x = "JAVASCRIPT";
	}
	
	sessionStorage.setItem("v",v);
    var ListElement = document.createElement("LI");
    var add = document.createTextNode(x);
    ListElement.appendChild(add);
    document.getElementById("ItemList").appendChild(ListElement);
}

function insert() {
	
	var x = "";
	var v = sessionStorage.getItem("v");
	v = parseInt(v);
	
	if(v > 0 && v < 5){

	if ( v == 1){
		v = 2;
		x = "CSS";
	}else if(v == 2){
		v = 3;
		x = "HTML";
	}else if(v == 3){
		v = 4;
		x = "JSON";
	}else if(v == 4){
		v = 1;
		x = "JAVASCRIPT";
	}
	
	}else{
		v = 1;
		x = "JAVASCRIPT";
	}
	
	sessionStorage.setItem("v",v);
	var ListElement = document.createElement("LI");
	
    var before = document.createTextNode(x);
    ListElement.appendChild(before);

    var list = document.getElementById("ItemList");
    list.insertBefore(ListElement, list.childNodes[0]);
}

function remove() {
    var list = document.getElementById("ItemList");
    list.removeChild(list.childNodes[0]);
}
