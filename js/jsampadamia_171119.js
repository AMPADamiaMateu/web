var imgpreload = new Image();
imgpreload.src="https://raw.githubusercontent.com/AMPADamiaMateu/web/master/images/dm/dmcapcalera.png";
var divcontent = document.getElementById("header").getElementsByClassName('large-12')[0];
divcontent.innerHTML = "";
divcontent.style.background = "#087eb6";
divcontent.style.display = "block";
var div = document.createElement("div");
div.className = "large-12";
div.appendChild(imgpreload);
divcontent.appendChild(div);
(function($) { 
   //var divcontent=  $('#header > .row > .large-12');
   //divcontent.empty();
   //divcontent.attr("style","background-color:#087eb6;display:block");
   //var divImage = $("<div>").attr('class','large-12');
  // divImage.prepend(imgpreload); //at first
  // divcontent.append(divImage); //at end
})( jQuery );