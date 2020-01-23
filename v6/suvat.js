function showSuvat(){
	/*
	- Pull suvat values from html elements with name attribute 'vars',
	pushing variables into an array and outputting variables as an array.
	- Output placeholder image for projectile canvas.
	*/
	var varList = [];
	document.getElementById("projectileSimulation").src = "assets/tempCanvas.png";

	for (i=0;i<5;i++){
		var val_variable = document.getElementsByName("vars")[i].value;
		if (val_variable == ""){
			val_variable = null // If no value is entered, enter empty index into array
		}

		varList.push(val_variable);
	}
	document.getElementById("demo").innerHTML = varList
}

