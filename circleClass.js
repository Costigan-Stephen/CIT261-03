function cir(x) {
	
	if (x.className == "BoxA"){
		x.className = "BoxB";

	}else if(x.className == "BoxB"){
		x.className = "BoxA";
		
	}
}