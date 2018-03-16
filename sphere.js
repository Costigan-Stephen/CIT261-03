function move(x) {
	
	if (x.className == "circle transform"){
		x.className = "circle transform-active";
	}else if(x.className == "circle transform-active"){
		x.className = "circle transform";
	}
}