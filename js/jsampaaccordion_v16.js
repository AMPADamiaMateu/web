/*
var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
	accHD[i].addEventListener('click', toggleItem, false);
}
*/
function toggleItem(myElement, id) {
	var itemClass = myElement.parentNode.className;
	for (i = 0; i < accItem.length; i++) {
		accItem[i].className = 'accordionItem close';
	}
	if (itemClass == 'accordionItem close') {
		myElement.parentNode.className = 'accordionItem open';
	}
	var objControl=document.getElementById(id);
    objControl.scrollTop = objControl.offsetTop;
}