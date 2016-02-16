$(document).ready(function() {
	
$(this).scrollTop(0);
//var offsetz = 61.6;
//var offsetz = 63.2;
//var offsetz = 57;
var offsetz = $(".navigation").height() * 0.8;

/* NAVBAR SHRINK */
var shrink = false;
$(window).scroll(function () {
    if($(this).scrollTop() === 0) {
		$(".navigation").animate({zoom: '100%'}, '500');
		shrink = false;
    } 
	else {
		if(shrink === false)
		{
			$(".navigation").animate({zoom: '80%'}, '500');
			shrink = true;
		}
    }
});

/* SMOOTH SCROLLING */
$('.navigation li').click(function() {
	
	event.preventDefault();
	//$('.navigation li').removeClass('active');
	//$(this).addClass('active');

	if($(this).hasClass('nav1')) {
		$('html, body').animate({
			 scrollTop: $(".carouselContainer").offset().top - offsetz
			/* scrollTop: 0 */
		}, 1000);
	}
	if($(this).hasClass('nav2')) {
		$('html, body').animate({
			scrollTop: $(".experienceContainer").offset().top - offsetz
		}, 1000);
	}
	if($(this).hasClass('nav3')) {
		$('html, body').animate({
			scrollTop: $(".skillsContainer").offset().top - offsetz
		}, 1000);
	}
});

/* NAVBAR HOVER 
$('.navigation a').mouseenter(function() {

	$(this).animate({zoom: '110%'}, '500');
	
});

$('.navigation a').mouseleave(function() {
	
	$(this).animate({zoom: '100%'}, '0');

});
*/

/* SCROLL NAVBAR UPDATE */
$(window).scroll(function(){

	var nav1 = $(".carouselContainer").offset().top;
	var nav2 = $(".experienceContainer").offset().top;
	var nav3 = $(".skillsContainer").offset().top;
	var scrollTop = $(window).scrollTop() + offsetz;
	
	if(scrollTop - offsetz + $(window).height() == $(document).height()) {
		$('.navigation li').removeClass('active');
		$('.nav3').addClass('active');
	}
	else if(scrollTop - nav1 < 0) {
		$('.navigation li').removeClass('active');
		/* $('.nav1').addClass('active'); */
	}
	else if(scrollTop - nav2 < 0) {
		$('.navigation li').removeClass('active');
		$('.nav1').addClass('active');
	}
	else if(scrollTop - nav3 < 0) {
		$('.navigation li').removeClass('active');
		$('.nav2').addClass('active');
	}
	else {
		$('.navigation li').removeClass('active');
		$('.nav3').addClass('active');
	}
	
});

/* CAROUSEL */
var carousel = 2;
var currcar = "2";
var nextcar = "0";
$('.right').click(function() {
	
	event.preventDefault();
	
	currcar = ".car" + (carousel % 3).toString();
	carousel += 1;
	nextcar = ".car" + (carousel % 3).toString();

	$(currcar).fadeOut('slow', function() {
		$(nextcar).fadeIn('slow');
    });
	
});

$('.left').click(function() {
	
	event.preventDefault();
	
	currcar = ".car" + (carousel % 3).toString();
	carousel -= 1;
	if(carousel < 0)
		carousel += 3;
	nextcar = ".car" + (carousel % 3).toString();

	$(currcar).fadeOut('slow', function() {
		 $(nextcar).fadeIn('slow');
	});
	
});

});