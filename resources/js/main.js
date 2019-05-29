// Go to top of the Webpage after Refresh

$(window).on('beforeunload', function() {
   	$(window).scrollTop(0);
});

//Scroll to different sections of page on clicking a button/link

$(document).ready(function() {   
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
        return false;
    });

    $('.js--scroll-to-skills').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-skills').offset().top}, 1000);
        return false;
    });

    $('.js--scroll-to-meals').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-meals').offset().top - 100}, 1000);
        return false;
    });

    $('.js--scroll-to-steps').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-steps').offset().top}, 1000);
        return false;
    });

	$('.js--scroll-to-cities').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-cities').offset().top - 50}, 1000);
        return false;
    });

	$('.js--scroll-to-feedback').click(function() {
    	$('html, body').animate({scrollTop: $('.js--section-feedback').offset().top - 50}, 1000);
        return false;
    });

    /* Mobile Navigation */

	$('.js--nav-icon').click(function() {
		const nav = $('.js--main-nav');
		const icon = $('.js--nav-icon i');

		nav.slideToggle(200);

		if (icon.hasClass('ion-navicon-round')) {
			icon.addClass('fas fa-times')
			icon.removeClass('ion-navicon-round')
		} else {
			icon.addClass('ion-navicon-round')
			icon.removeClass('fas fa-times')
		}

	})

	/* Animations on Scroll */

	$('.js--wp-1').waypoint(function(direction) {
		$('.js--wp-1').addClass('animated fadeIn');
	}, {
		offset: '50%'
	})

	$('.js--wp-2').waypoint(function(direction) {
		$('.js--wp-2').addClass('animated fadeInUp');
	}, {
		offset: '50%'
	})

	$('.js--wp-3').waypoint(function(direction) {
		$('.js--wp-3').addClass('animated fadeIn');
	}, {
		offset: '50%'
	})

	$('.js--wp-4').waypoint(function(direction) {
		$('.js--wp-4').addClass('animated pulse');
	}, {
		offset: '50%'
	})
});

// ===== Scroll to Top ==== 
$(document).ready(function() {
	$(window).scroll(function() {
    	if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        	$('#back-to-top').fadeIn(200);    // Fade in the arrow
    	} else {
        	$('#back-to-top').fadeOut(200);   // Else fade out the arrow
    	}
	});
	$('#back-to-top').click(function() {      // When arrow is clicked
    	$('body,html').animate({
        	scrollTop : 0                       // Scroll to top of body
    	}, 600);
	});
})

/* Toggling the Sticky Navbar */ 

$(document).ready(function() {
	$('.js--section-skills').waypoint(function(direction) {
		if (direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
		offset: '60px;'
	})
});
