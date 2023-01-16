/*Inici Capcalera */
/*
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
*/
/*Fi Capcalera*/
/*Inici Accordion*/
function scrollToElement(pageElement) {    
    var positionX = 0,         
        positionY = 0;    

    while(pageElement != null){        
        positionX += pageElement.offsetLeft;        
        positionY += pageElement.offsetTop;        
        pageElement = pageElement.offsetParent;        
        window.scrollTo(positionX, positionY);    
    }
}
function toggleItem(myElement, id) {
	var accItem = document.getElementsByClassName('accordionItem');
	var itemClass = myElement.parentNode.className;
	for (i = 0; i < accItem.length; i++) {
		accItem[i].className = 'accordionItem close';
	}
	if (itemClass == 'accordionItem close') {
		myElement.parentNode.className = 'accordionItem open';
	}
	var pageElement = document.getElementById(id);
    scrollToElement(pageElement);
}
/*Fi Accordion*/
