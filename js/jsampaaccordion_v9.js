(function($) { 
$('.dmtoggle').click(function(e) {
  	e.preventDefault();
  
    var $this = $(this);
  
    if ($this.next().hasClass('dmshow')) {
        $this.next().removeClass('dmshow');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .dminner').removeClass('dmshow');
        $this.parent().parent().find('li .dminner').slideUp(350);
        $this.next().toggleClass('dmshow');
        $this.next().slideToggle(350);
    }
});
})( jQuery );