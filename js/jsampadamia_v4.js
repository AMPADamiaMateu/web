var imgpreload = new Image;
imgpreload.src = "https://raw.githubusercontent.com/AMPADamiaMateu/web/master/images/dm/dmcapcalera.png";
var header = document.getElementById("header");
header.className += " hide-for-small";
var divcontent = header.getElementsByClassName("large-12")[0];
hide-for-small
divcontent.innerHTML = "";
divcontent.style.background = "#087eb6", divcontent.style.display = "block";
var div = document.createElement("div");
div.className = "large-12";
div.appendChild(imgpreload),
divcontent.appendChild(div);