(function($) { 
alert(1);
	jQuery.getScript('https://agora.xtec.cat/ceipdamiamateu/wp-includes/js/jquery/ui/accordion.min.js');

	jQuery(document).ready(function($)
	{  
	alert(3);
		jQuery( "#accordion" ).accordion();
	});
})( jQuery );