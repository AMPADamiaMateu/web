//afegim capcalera ampa
var imgpreload = new Image;
imgpreload.src = "https://raw.githubusercontent.com/AMPADamiaMateu/web/master/images/dm/dmcapcalera.png";
var header = document.getElementById("header");
header.className += " hide-for-small";
var divcontent = header.getElementsByClassName("large-12")[0];
divcontent.innerHTML = "";
divcontent.style.background = "#087eb6";
divcontent.style.display = "block";
var div = document.createElement("div");
div.className = "large-12";
div.appendChild(imgpreload),
divcontent.appendChild(div);

function addDMJS(head , nameJS){
	var link  = document.createElement('link');
	link.rel  = "stylesheet";
	link.type = "text/css";
	link.href = "https://cdn.rawgit.com/AMPADamiaMateu/web/master/css/" + nameCSS;
	link.media = "all";
	head.appendChild(link);
}

function addDMCSS(head, nameCSS) {
	var link  = document.createElement('link');
	link.rel  = "stylesheet";
	link.type = "text/css";
	link.href = "https://cdn.rawgit.com/AMPADamiaMateu/web/master/css/" + nameCSS;
	link.media = "all";
	head.appendChild(link);
}