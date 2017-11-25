var accItem = document.getElementsByClassName('dmaccordionItem');
    var accHD = document.getElementsByClassName('dmaccordionItemHeading');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'dmaccordionItem dmclose';
        }
        if (itemClass == 'dmaccordionItem dmclose') {
            this.parentNode.className = 'dmaccordionItem dmopen';
        }
    }