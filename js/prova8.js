var imgpreload = new Image();
imgpreload.src="https://image.ibb.co/m9PQYG/dmcapcalera.png";
(function($) { 
	var divContentImage = $("#header .row .large-12 .box-image .box-content");
	divContentImage.empty();
	divContentImage.append(imgpreload);
	divContentImage.attr("style","background-color:#087eb6;display:visible!important");
/*
	var divImage = $(".CoverImage.FlexEmbed.FlexEmbed--3by1");
	divImage.attr("style","background-color:#087eb6;background-image:url(https://image.ibb.co/m9PQYG/dmcapcalera.png)");
	var boxImage = $("#header .row  .large-12 .box-image");
	boxImage.attr("style","display:visible");
*/

/*
   var divcontent=  $('#header > .row > .large-12');
   divcontent.empty();
   divcontent.attr("style","background-color:#087eb6");
   var divImage = $("<div>").attr('class','hide-for-small large-12');
   divImage.prepend(imgpreload);
   divcontent.append(divImage);
*/
})( jQuery );

