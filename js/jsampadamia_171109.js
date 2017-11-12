var imgpreload = new Image();
imgpreload.src="https://image.ibb.co/m9PQYG/dmcapcalera.png";
(function($) { 
   var divcontent=  $('#header > .row > .large-12');
   divcontent.empty();
   divcontent.attr("style","background-color:#087eb6");
   var divImage = $("<div>").attr('class','hide-for-small large-12');
   divImage.prepend(imgpreload);
   divcontent.append(divImage);
})( jQuery );

