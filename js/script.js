$(document).ready(function($) {
	$('#modal').hide();
	$('#content').hide();

	$('.modal-link').click(function(e) {			
		$('#content').show();
		$('#modal').show();	
	});
			
	$('#modal').click(function(e) { 		
		$('#modal').hide();
		$('#content').hide();
	});

});