var originButton= document.getElementById("originButton");
originButton.addEventListener("click", origin);
var extinctionButton=document.getElementById("extinctionButton");
extinctionButton.addEventListener("click", extinction);

function origin() {
	var leftText=document.getElementById("originText");
	if (leftText.style.visibility == "hidden") {
		leftText.style.visibility = "visible"
	}
	else {
		leftText.style.visibility = "hidden"
	}
}
function extinction() {
	var rightText=document.getElementById("extintionText");
	if (rightText.style.visibility == "hidden") {
		rightText.style.visibility = "visible"
	}
	else {
		rightText.style.visibility = "hidden"
	}
}

var span=document.getElementsByClassName("close");
var totalPics=span.length;

for(var i=0; i<totalPics; i++) {
	span[i].addEventListener("click", closePic);
}

function closePic() {
	var deletePic=this.getAttribute("name");
	this.style.display="none";
	document.getElementById(deletePic).style.display="none";
}

var redisplay=document.getElementById("redisplayButton");
redisplay.addEventListener("click", redisplayPics);

function redisplayPics() {
	for (var i=0; i<totalPics; i++) {
		var pic=span[i].getAttribute("name");
		span[i].style.display="inline-block";
		document.getElementById(pic).style.display="inline-block";
	}
}
