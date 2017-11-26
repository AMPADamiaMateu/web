/*
var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
	accHD[i].addEventListener('click', toggleItem, false);
}
*/
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
	//var objControl=document.getElementById(id);
    //objControl.scrollIntoView();
}