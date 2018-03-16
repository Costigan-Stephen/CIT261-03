function alternate(x) {
	
	if (x.className == "shape1"){
		x.className = "shape2";
	}else if(x.className == "shape2"){
		x.className = "shape1";
	}
}