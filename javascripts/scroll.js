console.log('linked');


$(function(){
	$('button[href^="#"]').click(function(e){
		var target = $(this).attr('href');
		var strip = target.slice(1);
		var anchor = $("section[name='" + strip + "']");

		e.preventDefault();

		$('html, body').animate({

			scrollTop: anchor.offset().top

		}, 'slow');

	});	
	console.log("this is working")
});


