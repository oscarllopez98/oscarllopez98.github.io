/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

 jQuery(document).ready(function($) {

/*----------------------------------------------------*/
/* FitText Settings
------------------------------------------------------ */

    setTimeout(function() {
	   $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	 }, 100);


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});


/*----------------------------------------------------*/
/* Highlight the current section in the navigation bar
------------------------------------------------------*/

	var sections = $("section");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({

      handler: function(event, direction) {

		   var active_section;

			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},
		offset: '35%'

	});


/*----------------------------------------------------*/
/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
   });


/*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

   $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var nav = $('#nav-wrap');

	   if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
	      nav.fadeOut('fast');
	   }
      else {
         if (y < h*.20) {
            nav.removeClass('opaque').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');
         }
      }

	});


/*----------------------------------------------------*/
/*	Modal Popup
------------------------------------------------------*/

    $('.item-wrap a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 200,
       showCloseBtn: false,
       mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });


/*----------------------------------------------------*/
/*	Flexslider
/*----------------------------------------------------*/
   $('.flexslider').flexslider({
      namespace: "flex-",
      controlsContainer: ".flex-container",
      animation: 'slide',
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false,
   });
});


//Custom JS


//- - - - - Portfolio Content - - - - -

//TrophyTeam Image on hover functions
//On hovering image, fade text to black
$("#portfolio-TrophyTeam").mouseenter(function() {
  $(".portfolio-text-TrophyTeam").css("color","#000000");
});
//On exiting hovering image, fade text back to gray
$("#portfolio-TrophyTeam").mouseleave(function() {
  $(".portfolio-text-TrophyTeam").css("color","#b3b3b3");
});


//HCI Image on hover functions
//On hovering image, fade text to black
$("#portfolio-HCI").mouseenter(function() {
  $(".portfolio-text-HCI").css("color","#000000");
});
//On exiting hovering image, fade text back to gray
$("#portfolio-HCI").mouseleave(function() {
  $(".portfolio-text-HCI").css("color","#b3b3b3");
});


//- - - - - Hobbies and Interests Content - - - - -

//Guitar Video on hover functions
//On hovering Video, fade text to black
$("#video-guitar").mouseenter(function() {
  $(".video-guitar-text").css("color","#000000");
});
//On exiting hovering video, fade text back to gray
$("#video-guitar").mouseleave(function() {
  $(".video-guitar-text").css("color","#b3b3b3");
});

//Standup Video on hover functions
//On hovering Video, fade text to black
$("#video-standup").mouseenter(function() {
  $(".video-standup-text").css("color","#000000");
});
//On exiting hovering image, fade text back to gray
$("#video-standup").mouseleave(function() {
  $(".video-standup-text").css("color","#b3b3b3");
});

//Improv Video on hover functions
//On hovering Video, fade text to black
$("#video-improv").mouseenter(function() {
  $(".video-improv-text").css("color","#000000");
});
//On exiting hovering image, fade text back to gray
$("#video-improv").mouseleave(function() {
  $(".video-improv-text").css("color","#b3b3b3");
});


