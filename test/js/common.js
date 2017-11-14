$(function() {


	/***Slider***/
	var owl = $(".slide");
	owl.owlCarousel({
		loop: true,
		autoPlay: true,
		items: 1
	});


		/****Search****/
		 $('.click-search').click(function(){
			 $('.title-search').slideToggle();
		});


});

