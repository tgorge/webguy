/*
 * Attitude
 * Author: WPlook Studio
 *
*/
;(function ($) {
	"use strict";

	var attitude = {

		/* ===== Start Functions ===== */
		startAtt: function () {
			attitude.FoundationAtt();
			attitude.StickyHeaderAtt();
			attitude.OpacityFadeAtt();
			attitude.OwlCarouselAtt();
			attitude.SliderEnrichedAtt();
		},


		/* ===== Init Foundatio Site ===== */
		FoundationAtt: function () {
			jQuery(document).foundation();
		},


		/* ===== Sticky Header ===== */
		StickyHeaderAtt: function() {
			$(".sticky-header").headroom({
				"tolerance": 15,
				"offset": 50,
				"tolerance": 5,
				"classes": {
					"initial": "animated",
					"pinned": "slideDown",
					"notTop" : "gradient-a-80",
					"unpinned": "slideUp",
					"top": "headroom--top",
				}
			});
		},


		/* ===== Opacity for hiding elements ===== */
		OpacityFadeAtt: function() {
			var fadeStart = 10,
				fadeEnd = 600,
				fade = $('.heading');
			$(window).on('scroll', function() {
				var offset = $(document).scrollTop(),
					opacity = 0;
				if (offset <= fadeStart) {
					opacity = 1;
				} else if (offset <= fadeEnd) {
					opacity = 1 - offset / fadeEnd;
				}
				fade.css('opacity', opacity);
			});
		},


		/* ===== Owl Carousel Settings ===== */
		OwlCarouselAtt: function() {
			/* ===== Owl carousel TEAM Section ===== */
			$('.owl-carousel-team').owlCarousel({
				loop:true,
				margin:40,
				responsive:{
					0:{
						items:1
					},
					640:{
						items:2
					},
					1024:{
						items:4
					}
				}
			});

			/* ===== Owl carousel Post Section ===== */
			$('.owl-carousel-post').owlCarousel({
				loop:true,
				margin:5,
				responsive:{
					0:{
						items:1
					},
					640:{
						items:2
					},
					1024:{
						items:3
					}
				}
			});

			/* ===== Owl carousel Projects Section ===== */
			$('.owl-carousel-projects').owlCarousel({
				loop:true,
				margin:30,
				responsive:{
					0:{
						items:1
					},
					640:{
						items:2
					},
					1024:{
						items:3
					}
				}
			});

			/* ===== Owl carousel Sponsor Section ===== */
			$('.owl-carousel-sponsor').owlCarousel({
				loop:true,
				margin:5,
				responsive:{
					0:{
						items:2
					},
					400:{
						items:3
					},
					640:{
						items:5
					},
					1024:{
						items:6
					}
				}
			});
	
			/* ===== Owl carousel Testimonials Section ===== */
			$('.owl-carousel-testimonials').owlCarousel({
				loop:true,
				margin:0,
				responsive:{
					0:{
						items:1
					},
					640:{
						items:2
					}
				}
			});

			/* ===== Owl carousel Slider Teaser ===== */
			$('.slider-intro .slides').owlCarousel({
				loop: true,
				autoplay: true,
				autoplayHoverPause : true,
				autoplayTimeout: 5000,
				smartSpeed: 500,
				nav: true,
				lazyLoad : true,
				navContainer: '.slider-intro .slider-actions',
				navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
				items: 1,
				margin: 0
			});
		},


		/* ===== Slider classes ===== */
		SliderEnrichedAtt: function() {
			$(document).on('changed.zf.slider', function(e, $handle) {
				
				$("#js-contribution-value").text($handle["0"].attributes[7].value);
				var current_procent = parseInt($handle["0"].style.left.replace(/data-/g,''),10);
				current_procent >   1 ? $( "#dot-0"   ).addClass( "full" ) : $( "#dot-0"   ).removeClass( "full" );
				current_procent >= 25 ? $( "#dot-25"  ).addClass( "full" ) : $( "#dot-25"  ).removeClass( "full" );
				current_procent >= 50 ? $( "#dot-50"  ).addClass( "full" ) : $( "#dot-50"  ).removeClass( "full" );
				current_procent >= 75 ? $( "#dot-75"  ).addClass( "full" ) : $( "#dot-75"  ).removeClass( "full" );
				current_procent >  99 ? $( "#dot-100" ).addClass( "full" ) : $( "#dot-100" ).removeClass( "full" );

			});	
		},

	};

	jQuery(document).ready(function () {
		attitude.startAtt();
	});

})(jQuery);