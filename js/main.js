jQuery(document).ready(function($){
		var $scrollTop = $('.goto-top');
		if ($scrollTop.length > 0) {
			if ($scrollTop.length < 600) {
				$scrollTop.removeClass('visible');
			}
			$(window).on('scroll', function(){
	    		if ($(window).scrollTop() > 600) {
	      			$scrollTop.addClass('visible');
	    		} else {
	      			$scrollTop.removeClass('visible');
	    		}
		});
		$scrollTop.on('click', function(e){
			e.preventDefault();
			$('body').animate({
				scrollTop:0
			},800);
		});
		};
});