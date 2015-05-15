// PIXEL ART

// **Creates the whole grid** // 

	for (var i=0; i < 1012; i++) {
		var tile = document.createElement("div");
		var body = document.querySelector("body");
			body.appendChild(tile);
			tile.style.width = "2%";
			tile.style.float = "left";
			tile.style.paddingBottom = "2%";
			tile.style.border = "1px solid grey";
			tile.style.margin = "0.5px";

	} //for loop



// **Creates the different tile palette** // 


	var colorsArr = ["darkred", "firebrick", "red", 
					 "tomato", "coral", "lightsalmon", "orange",
					 "gold", "yellow", "greenyellow", "lime", "palegreen",  
					 "aquamarine", "aqua","darkturquoise", "royalblue", "blue", "indigo",
					 "darkorchid", "mediumorchid", "violet", "deeppink", "black", "white"];

		colorsArr.forEach(function(color) {
			var newDiv = document.createElement("DIV");
				body.appendChild(newDiv);
				newDiv.style.width = "2%";
				newDiv.style.float = "left";
				newDiv.style.paddingBottom = "2%";
				newDiv.style.border = "1px solid grey";
				newDiv.style.margin = "0.5px";
				newDiv.style.backgroundColor = color;

			newDiv.addEventListener("click", function() {
				currentColor = this.style.backgroundColor;
			});

		}) //forEach


			var title = document.createElement("IMG");
			body.appendChild(title);
				title.style.width = "17%";
				title.style.float = "right";
				title.style.paddingRight = '22px';
				title.style.paddingTop = '3px';
				title.style.margin = "0.5px";
				title.setAttribute("src", "pxlogo.jpg")

			title.addEventListener("click", function() {
				window.location.reload();
			});


// **Change color of the selected tiles** // 

	var divs = document.querySelectorAll("div");


		for(var i=0; i < divs.length; i++) {
			divs[i].addEventListener("click", function() {
			this.style.backgroundColor = currentColor;
		});	

			divs[i].addEventListener("dragenter", function() {
			this.style.backgroundColor = currentColor;
		});
	} //for loop


// .MD
		
  


