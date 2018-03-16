function flip(x) {
	
	if (x.className == "flip coin"){
		x.className = "flip coin-active";

	}else if(x.className == "flip coin-active"){
		x.className = "flip coin";
		
	}
}