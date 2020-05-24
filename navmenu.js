
    function prepareList() {
	    jQuery('#expList').find('li:has(ul)').unbind('click').click(
            function(event) {
                if(this == event.target) {
                    jQuery(this).toggleClass('expanded');
                    jQuery(this).children('ul').toggle('medium');
                }
                return false;
            }
        ).addClass('collapsed').addClass('expanded');
        //Hack to add links inside the cv
	jQuery('#expList a').unbind('click').click(function() {
		window.location = (jQuery(this).attr('href'));
		return false;
	});
	};
	 
	jQuery(document).ready( function() {
	    prepareList()
	});
