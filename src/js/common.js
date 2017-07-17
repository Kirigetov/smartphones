$(document).ready(function() {

	// hero slider
	$('.js-hero-slider').slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 700,
		fade: true,
		arrows: true,
		prevArrow: $('.slider-arrow_left'),
		nextArrow: $('.slider-arrow_right')
	});

	// product slider
	$('.js-product-slider').slick({
		dots: true,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.pr-slider-arrow_left'),
		nextArrow: $('.pr-slider-arrow_right')
	});


});