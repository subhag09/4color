(function ($) {
	"use strict";


	$('.tp-last-menu nav > ul > li').slice(-3).addClass('menu-last');

	var windowOn = $(window)
	///////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load', function () {
		$('#loading').fadeOut(500);
	});

	///////////////////////////////////////////////////
	// 02. SubMenu Dropdown Toggle
	if ($('.tp-main-menu nav > ul > li.has-dropdown > a').length) {
		$('.tp-main-menu nav > ul > li.has-dropdown > a').append('<i class="fal fa-angle-down"></i>');
	}

	$('.tp-business__content').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.tp-business__content').removeClass('active');
	});

	///////////////////////////////////////////////////
	// 03. scroll-to-target 
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 500) {
			$('.scroll-to-target').removeClass('open');

		} else {
			$('.scroll-to-target').addClass('open');
		}
	});

	///////////////////////////////////////////////////
	// 04. Scroll Up Js
	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1000);

		});
	}

	// 04. Scroll Up Js
	if ($('.scroll-to-target-2').length) {
		$(".scroll-to-target-2").on('click', function () {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1000);

		});
	}
	function smoothScrollTop() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 150
				}, 1000);
			}
		});
	}
	smoothScrollTop();

	///////////////////////////////////////////////////
	// 05. wow animation
	var wow = new WOW(
		{
			mobile: true,
		}
	);
	wow.init();
	var windowOn = $(window);

	///////////////////////////////////////////////////
	// 06. PreLoader Js
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
	});

	window.onload()


	///////////////////////////////////////////////////
	// 07. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 400) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});

	if ($('.tp-header-height').length > 0) {
		var headerHeight = document.querySelector(".tp-header-height");
		var setHeaderHeight = headerHeight.offsetHeight;
		$(".tp-header-height").each(function () {
			$(this).css({
				'height': setHeaderHeight + 'px'
			});
		});

		$(".tp-header-height.header-sticky").each(function () {
			$(this).css({
				'height': inherit,
			});
		});
	}


	$(window).on('load', function () {

		$('#preloader').delay(350).fadeOut('slow');

		$('body').delay(350).css({ 'overflow': 'visible' });

	})

	////////////////////////////////////////////////////
	// 09. Sidebar Js
	$(".tp-menu-bar").on("click", function () {
		$(".tpoffcanvas").addClass("opened");
		$(".body-overlay").addClass("apply");
	});
	$(".close-btn").on("click", function () {
		$(".tpoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});
	$(".body-overlay").on("click", function () {
		$(".tpoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});

	///////////////////////////////////////////////////
	// 10. Magnific Js
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	////////////////////////////////////////////////////
	// 11. Data CSS Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	////////////////////////////////////////////////////
	// 21. Counter Js
	if ($(".purecounter").length) {
		new PureCounter({
			filesizing: true,
			selector: ".filesizecount",
			pulse: 2,
		});
		new PureCounter();
	}

	////////////////////////////////////////////////////
	// 14. magnificPopup Js
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	////////////////////////////////////////////////////
	// 03. Search Js
	$(".search-open-btn").on("click", function () {
		$(".search__popup").addClass("search-opened");
	});

	$(".search-close-btn").on("click", function () {
		$(".search__popup").removeClass("search-opened");
	});


	// for header
	if ($("#tp-copyright__lang-toogle").length > 0) {
		window.addEventListener('click', function (e) {

			if (document.getElementById('tp-copyright__lang-toogle').contains(e.target)) {
				$(".tp-copyright__lang-submenu").toggleClass("open");
			}
			else {
				$(".tp-copyright__lang-submenu").removeClass("open");
			}
		});
	}

	// for header
	if ($("#tp-header-top-2__value-toogle").length > 0) {
		window.addEventListener('click', function (e) {

			if (document.getElementById('tp-header-top-2__value-toogle').contains(e.target)) {
				$(".tp-header-top-2__value-submenu").toggleClass("open");
			}
			else {
				$(".tp-header-top-2__value-submenu").removeClass("open");
			}
		});
	}
	// for header
	if ($("#tp-header-top-4__language-toogle").length > 0) {
		window.addEventListener('click', function (e) {

			if (document.getElementById('tp-header-top-4__language-toogle').contains(e.target)) {
				$(".tp-header-top-4__value-submenu").toggleClass("open");
			}
			else {
				$(".tp-header-top-4__value-submenu").removeClass("open");
			}
		});
	}
	// for header
	if ($("#tp-header-5__language-toogle").length > 0) {
		window.addEventListener('click', function (e) {

			if (document.getElementById('tp-header-5__language-toogle').contains(e.target)) {
				$(".tp-header-5__value-submenu").toggleClass("open");
			}
			else {
				$(".tp-header-5__value-submenu").removeClass("open");
			}
		});
	}

	// 09. brand-Slider js
	$('.tp-slider-text-2-active').slick({
		speed: 12000,
		autoplay: true,
		autoplaySpeed: 0,
		centerMode: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: true,
		initialSlide: 1,
		arrows: false,
		buttons: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
				}
			},
			{
				breakpoint: 992,
				settings: {
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	// 09. brand-Slider js
	$('.tp-brand-4-active').slick({
		speed: 10000,
		autoplay: true,
		autoplaySpeed: 0,
		centerMode: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: true,
		initialSlide: 1,
		arrows: false,
		buttons: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
				}
			},
			{
				breakpoint: 992,
				settings: {
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	// 09. brand-Slider js
	$('.tp-brand-3-active').slick({
		speed: 10000,
		autoplay: true,
		autoplaySpeed: 0,
		centerMode: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: true,
		initialSlide: 1,
		arrows: false,
		buttons: false,
		rtl:true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
				}
			},
			{
				breakpoint: 992,
				settings: {
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	// 09. brand-Slider js
	$('.tp-brand-5__active').slick({
		speed: 10000,
		autoplay: true,
		autoplaySpeed: 0,
		centerMode: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: true,
		initialSlide: 1,
		arrows: false,
		buttons: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
				}
			},
			{
				breakpoint: 992,
				settings: {
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	// 09. brand-Slider js
	$('.tp-slider-text-active').slick({
		speed: 12000,
		autoplay: true,
		autoplaySpeed: 0,
		centerMode: true,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: true,
		initialSlide: 1,
		arrows: false,
		buttons: false,
		rtl:true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
				}
			},
			{
				breakpoint: 992,
				settings: {
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	////////////////////////////////////////////////////
	// 13. Swiper Js
	const catagoriswiper = new Swiper('.tp-catagori__active', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
		autoplay: false,
		spaceBetween: 80,
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},

			a11y: false,
		},
		pagination: {
			el: ".tp-catagori-slider-dots",
			clickable: true,
		},
	});
	////////////////////////////////////////////////////
	// 13. Swiper Js
	const catagori2swiper = new Swiper('.tp-catagori-2__active', {
		// Optional parameters
		loop: true,
		slidesPerView: 6,
		autoplay: false,
		spaceBetween: 30,
		breakpoints: {
			'1400': {
				slidesPerView: 6,
			},
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 5,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 3,
			},
			'0': {
				slidesPerView: 1,
			},

			a11y: false,
		},
		navigation: {
			prevEl: '.slider-prev',
			nextEl: '.slider-next',
		},
	});
	////////////////////////////////////////////////////
	// 13. Swiper Js
	const instagramwiper = new Swiper('.tp-instagram-2-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 5,
		autoplay: true,
		spaceBetween: 0,
		breakpoints: {
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},

			a11y: false,
		},
		navigation: {
			prevEl: '.slider-prev',
			nextEl: '.slider-next',
		},
	});
	////////////////////////////////////////////////////
	// 13. Swiper Js
	const products5wiper = new Swiper('.tp-new-product-5__active', {
		// Optional parameters
		loop: true,
		slidesPerView: 6,
		autoplay: true,
		spaceBetween: 25,
		breakpoints: {
			'1600': {
				slidesPerView: 6,
			},
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},

			a11y: false,
		},
		navigation: {
			prevEl: '.slider-prev',
			nextEl: '.slider-next',
		},
	});
	////////////////////////////////////////////////////
	// 13. Swiper Js
	const product2swiper = new Swiper('.tp-new-product-5__active-2', {
		// Optional parameters
		loop: true,
		slidesPerView: 5,
		autoplay: true,
		spaceBetween: 25,
		breakpoints: {
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},

			a11y: false,
		},
		navigation: {
			prevEl: '.slider-prev',
			nextEl: '.slider-next',
		},
	});
	////////////////////////////////////////////////////
	// 13. Swiper Js
	const productswiper = new Swiper('.tp-product-2__active', {
		// Optional parameters
		loop: true,
		slidesPerView: 4,
		autoplay: false,
		spaceBetween: 30,
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},

			a11y: false,
		},
		navigation: {
			prevEl: '.slider-prev',
			nextEl: '.slider-next',
		},
	});
	////////////////////////////////////////////////////
	// 13. Swiper Js
	const serviceswiper = new Swiper('.tp-service__active', {
		// Optional parameters
		loop: true,
		slidesPerView: 4,
		autoplay: false,
		spaceBetween: 60,
		breakpoints: {
			'1600': {
				slidesPerView: 4,
			},
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},

			a11y: false,
		},
	});
	////////////////////////////////////////////////////
	// 13. Swiper Js
	const project3swiper = new Swiper('.tp-project-3__active', {
		// Optional parameters
		loop: true,
		slidesPerView: 5,
		autoplay: true,
		spaceBetween: 60,
		breakpoints: {
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView:3,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},

			a11y: false,
		},
	});

	////////////////////////////////////////////////////
	// 13. Swiper Js
	const detailsswiper = new Swiper('.tp-project__details-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 2,
		autoplay: true,
		spaceBetween: 30,
		breakpoints: {
			'1400': {
				slidesPerView: 2,
			},
			'1200': {
				slidesPerView: 2,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},

			a11y: false,
		},
		// Navigation arrows
		navigation: {
			nextEl: '.slider-next',
		},
	});
	////////////////////////////////////////////////////
	// 13. Swiper Js
	const teamswiper = new Swiper('.tp-team-4__active', {
		// Optional parameters
		loop: true,
		slidesPerView: 5,
		autoplay: true,
		spaceBetween: 60,
		breakpoints: {
			'1600': {
				slidesPerView:5,
			},
			'1400': {
				slidesPerView:4,
			},
			'1200': {
				slidesPerView:3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},

			a11y: false,
		},
	});
	////////////////////////////////////////////////////
	// 13. Swiper Js
	const testi3swiper = new Swiper('.tp-testimonial-3__active', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
		autoplay: false,
		spaceBetween: 60,
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},

			a11y: false,
		},
	});
	////////////////////////////////////////////////////
	// 13. Swiper Js
	const testi22swiper = new Swiper('.tp-testimonial-2__active-2', {
		// Optional parameters
		loop: true,
		slidesPerView: 3,
		autoplay: false,
		spaceBetween: 40,
		breakpoints: {
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},

			a11y: false,
		},
		// Navigation arrows
		navigation: {
			nextEl: '.test-prev',
		},
	});
	////////////////////////////////////////////////////
	// 13. Swiper Js
	const testi2swiper = new Swiper('.tp-testimonial-2__active', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
		autoplay: false,
		spaceBetween: 40,
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},

			a11y: false,
		},
	});
	////////////////////////////////////////////////////
	// 13. Swiper Js
	const testiswiper = new Swiper('.tp-testimonial__active', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
		autoplay: false,
		spaceBetween: 40,
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},

			a11y: false,
		},
		pagination: {
			el: ".tp-testimonial-slider-dots",
			clickable: true,
		},
	});



	////////////////////////////////////////////////////
	// 13. Swiper Js
	const slider5swiper = new Swiper('.tp-slider-5__active', {
		loop: true,
		slidesPerView: 1,
		arrows: true,
		autoplay: false,
		effect: 'fade',
		breakpoints: {
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
				arrows: false,
			},
			'0': {
				slidesPerView: 1,
				arrows: false,
			},
		},
		// Navigation arrows
		navigation: {
			nextEl: '.test-prev',
			prevEl: '.test-next',
		},

	});
	////////////////////////////////////////////////////
	////////////////////////////////////////////////////
	// 13. Swiper Js
	const tpslider2 = new Swiper('.tp-hero-2__active', {
		loop: true,
		slidesPerView: 1,
		arrows: true,
		autoplay: true,
		effect: 'fade',
		breakpoints: {
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
				arrows: false,
			},
			'0': {
				slidesPerView: 1,
				arrows: false,
			},
		},
		pagination: {
			el: ".tp-slider-2-dots",
			clickable: true,
		},
	});
	////////////////////////////////////////////////////

	/*$("#slider-range").slider({
		range: true,
		min: 0,
		max: 500,
		values: [75, 300],
		slide: function (event, ui) {
			$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
		}
	});
	$("#amount").val("$" + $("#slider-range").slider("values", 0) +
		" - $" + $("#slider-range").slider("values", 1));

	*/
	

	$('.tp-color-variation-btn').on('click', function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
	

	$('.tp-size-variation-btn').on('click', function () {
		$(this).addClass('active').siblings().removeClass('active');
	});


	// 20. Show Login Toggle Js
	$('#showlogin').on('click', function () {
		$('#checkout-login').slideToggle(900);
	});

	/*-------------------------

		showcoupon toggle function

	--------------------------*/

	$('#showcoupon').on('click', function () {

		$('#checkout_coupon').slideToggle(900);

	});


	/*-------------------------

		Create an account toggle function

	--------------------------*/

	$('#cbox').on('click', function () {

		$('#cbox_info').slideToggle(900);

	});



	/*-------------------------

		Create an account toggle function

	--------------------------*/

	$('#ship-box').on('click', function () {

		$('#ship-box-info').slideToggle(1000);

	});


	////////////////////////////////////////////////////
	// 15. MagnificPopup video view Js
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	////////////////////////////////////////////////////
	//26.isotope
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			layoutMode: 'fitRows',
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: 1,
			},

		});


		// filter items on button click
		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue,
				animationOptions: {
					duration: 10000,
					easing: "linear",
					queue: true
				}
			});

		});

		//for menu active class
		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});


	////////////////////////////////////////////////////
	// 03. Search Js
	$(".search-open-btn").on("click", function () {
		$(".search__popup").addClass("search-opened");
	});

	$(".search-close-btn").on("click", function () {
		$(".search__popup").removeClass("search-opened");
	});

	////////////////////////////////////////////////////
	// 16. Cart Quantity Js
	$('.tp-cart-minus').on('click', function () {
		var $input = $(this).parent().find('input');
		var count = Number($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});

	$('.tp-cart-plus').on('click', function () {
		var $input = $(this).parent().find('input');
		$input.val(Number($input.val()) + 1);
		$input.change();
		return false;
	});


	/* Price filter active */

	if ($("#slider-range").length) {

		$("#slider-range").slider({

			range: true,

			min: 0,

			max: 500,

			values: [75, 300],

			slide: function (event, ui) {

				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);

			}

		});

		$("#amount").val("$" + $("#slider-range").slider("values", 0) +

			" - $" + $("#slider-range").slider("values", 1));

		$('#filter-btn').on('click', function () {

			$('.filter-widget').slideToggle(1000);

		});

	}

	$('.tp-checkout-payment-item label').on('click', function () {
		$(this).siblings('.tp-checkout-payment-desc').slideToggle(400);
		
	});

	function tp_ecommerce() {
		$('.tp-cart-minus').on('click', function () {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});

		$('.tp-cart-plus').on('click', function () {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});

		////////////////////////////////////////////////////
		// 17. Show Login Toggle Js
		$('.tp-checkout-login-form-reveal-btn').on('click', function () {
			$('#tpReturnCustomerLoginForm').slideToggle(400);
		});

		////////////////////////////////////////////////////
		// 18. Show Coupon Toggle Js
		$('.tp-checkout-coupon-form-reveal-btn').on('click', function () {
			$('#tpCheckoutCouponForm').slideToggle(400);
		});
		
		////////////////////////////////////////////////////
		// 19. Create An Account Toggle Js
		$('#cbox').on('click', function () {
			$('#cbox_info').slideToggle(900);
		});

		////////////////////////////////////////////////////
		// 20. Shipping Box Toggle Js
		$('#ship-box').on('click', function () {
			$('#ship-box-info').slideToggle(1000);
		});

	}
	tp_ecommerce();

	// 08. Nice Select Js
	$('select').niceSelect();


	if($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length){
		let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
		let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
		mobileNavContainer.innerHTML = navContent;
	
	
		let arrow = $(".tp-main-menu-mobile .has-dropdown > a");
	
		arrow.each(function () {
			let self = $(this);
			let arrowBtn = document.createElement("BUTTON");
			arrowBtn.classList.add("dropdown-toggle-btn");
			arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";
	
			self.append(function () {
			  return arrowBtn;
			});
	
			self.find("button").on("click", function (e) {
			  e.preventDefault();
			  let self = $(this);
			  self.toggleClass("dropdown-opened");
			  self.parent().toggleClass("expanded");
			  self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
			  self.parent().parent().children(".tp-submenu").slideToggle();
			});
	
		});
	}

	$(".tp-category-menu-toggle").on("click", function () {
		$(".tp-category-menu > nav > ul").slideToggle();
	});


	// 04. Menu Controls JS
	if($('.tp-category-menu-content').length && $('.tp-category-mobile-menu').length){
		let navContent = document.querySelector(".tp-category-menu-content").outerHTML;
		let mobileNavContainer = document.querySelector(".tp-category-mobile-menu");
		mobileNavContainer.innerHTML = navContent;
	
		$('.tp-offcanvas-category-toggle').on('click', function(){
			$(this).siblings().find('nav').slideToggle();
		});
		
	
		let arrow = $(".tp-category-mobile-menu .has-dropdown > a");
	
		arrow.each(function () {
			let self = $(this);
			let arrowBtn = document.createElement("BUTTON");
			arrowBtn.classList.add("dropdown-toggle-btn");
			arrowBtn.innerHTML = "<i class='fa-regular fa-angle-right'></i>";
	
			self.append(function () {
				return arrowBtn;
			});
	
			self.find("button").on("click", function (e) {
				e.preventDefault();
				let self = $(this);
				self.toggleClass("dropdown-opened");
				self.parent().toggleClass("expanded");
				self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
				self.parent().parent().children(".tp-submenu").slideToggle();
				
	
			});
	
			});
		}

})(jQuery);


$(window).on("load", function() {
	var fn = {

    /*
		Launch
	*/

	Launch: function () {
        fn.IntroCanvas();
	},

    /*
        Intro Canvas
    */

    IntroCanvas: function() {

        const canvas = document.getElementById('intro__canvas');
        if(canvas) {
            const ctx = canvas.getContext('2d');
            let width = canvas.width = canvas.offsetWidth;
            let height = canvas.height = canvas.offsetHeight;

            const colours = JSON.parse( canvas.getAttribute('data-colors') );

            const maxParticles = 200;
            let particles = [];

            // init client x and y values
            let cx = width / 2;
            let cy = height / 2;

            /*window.addEventListener('mousemove', (e) => {
                var bounds = canvas.getBoundingClientRect();

                cx = e.clientX - bounds.left;
                cy = e.clientY - bounds.top;
            });*/


            class Particle {
                constructor(x, y, vx, vy, radius, colour) {
                    this.x = x;
                    this.y = y;
                    this.vx = vx;
                    this.vy = vy;
                    this.radius = radius;
                    this.colour = colour;
                }
                move() {
                    // Reset particle if it goes off screen
                    if (this.y > height || this.y < 0 || this.x > width || this.x < 0) {
                        this.reset();
                    }
                    // Move particles with respect to velocity vectors
                    this.x += this.vx;
                    this.y += this.vy;
                }
                reset() {
                    this.x = cx;
                    this.y = cy;
                    this.vx = 2 + Math.random() * - 4;
                    this.vy = 2 + Math.random() * - 4;
                    this.radius = 1 + Math.random() * 3;
                }
                draw(ctx) {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
                    ctx.fillStyle = this.colour;
                    ctx.fill();
                }
            }

            function initParticles() {
                for (let i = 0; i < maxParticles; i++) {
                    setTimeout(createParticle, 10 * i, i);
                }
            }

            function createParticle(i) {
                let p = new Particle(
                    Math.floor(Math.random() * width), // x
                    Math.floor(Math.random() * height), // y
                    1.5 + Math.random() * - 3, // vx
                    1.5 + Math.random() * - 3, // vy
                    1 + Math.random(), // radius
                    colours[Math.floor(Math.random() * colours.length)]
                );
                particles.push(p);
            }


            function loop() {
                ctx.clearRect(0, 0, width, height);
                for (let particle of particles) {
                    particle.move();
                    particle.draw(ctx);
                }
                requestAnimationFrame(loop);
            }

            // Start animation
            initParticles();
            loop();


            // Resize canvas - responsive
            window.addEventListener('resize', resize);
            function resize() {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
            }
        }
    },
};

fn.Launch();
    setTimeout(function() {

        function n() {
            S.animate({
                d: "M1010.1,64C1137.4,64,1350,0,1350,0H0C0,0,839.3,64,1010.1,64z"
            }, 8e3, mina.easeinout, o)
        }

        function o() {
            S.animate({
                d: "M287,64C414.3,64,1350,0,1350,0H0C0,0,116.2,64,287,64z"
            }, 8e3, mina.easeinout, n)
        }

        function a() {
            y.animate({
                d: "M1076.6,118.4C1247.4,118.4,1350,0.2,1350,0.2H0C0,0.2,908.6,118.4,1076.6,118.4z"
            }, 12e3, mina.easeinout, i)
        }

        function i() {
            y.animate({
                d: "M307.1,118.4C477.8,118.4,1350,0.2,1350,0.2H0C0,0.2,139.5,118.4,307.1,118.4z"
            }, 12e3, mina.easeinout, a)
        }

        function c() {
            M.animate({
                d: "M317.9,76C467,76,1350,0.2,1350,0.2H0C0,0.2,1,76,317.9,76z"
            }, 9e3, mina.easeinout, d)
        }

        function d() {
            M.animate({
                d: "M954,76c149,0,396-75.8,396-75.8H0C0,0.2,637,76,954,76z"
            }, 9e3, mina.easeinout, c)
        }

        function l() {
            z.animate({
                d: "M474,67c168,0,876-66.8,876-66.8H0C0,0.2,168.1,67,474,67z"
            }, 11e3, mina.easeinout, r)
        }

        function r() {
            z.animate({
                d: "M904,67c168,0,446-66.8,446-66.8H0C0,0.2,598.2,67,904,67z"
            }, 11e3, mina.easeinout, l)
        }

        function u() {
            H.animate({
                d: "M327,38C478.3,38,1350,0.1,1350,0.1H0C0,0.1,0,38,327,38z"
            }, 14e3, mina.easeinout, m)
        }

        function m() {
            H.animate({
                d: "M857,38c151.3,0,493-37.9,493-37.9H0C0,0.1,530,38,857,38z"
            }, 14e3, mina.easeinout, u)
        }

        function C() {
            L.animate({
                d: "M1175,103c169,0,175-102.9,175-102.9H0C0,0.1,1007,103,1175,103z"
            }, 8e3, mina.easeinout, p)
        }

        function p() {
            L.animate({
                d: "M688,103c169,0,662-102.9,662-102.9H0C0,0.1,520,103,688,103z"
            }, 8e3, mina.easeinout, C)
        }
        $window = $(window);
        var f = $window.height() / 2,
            h = $("#container-general"),
            g = $("#section-quote").offset().top - f
        $(document).on('click','#section-quote .container-pe-quote .pp-quote',function() {
            var e = $(this).data("textquote");
            $("#section-quote .container-pe-quote .pp-quote").removeClass("active"),
                $(this).addClass("active"), $("#section-quote .container-quote").removeClass("carousel-on"),
                $("#section-quote .container-quote .quote.show").removeClass("show").addClass("hide-bottom"),
                $("." + e).removeClass("hide-bottom hide-top").addClass("show")
        })
    }, 150);


        setInterval(function () {
            var maxVal= $("#section-quote .container-pe-quote .pp-quote").length;
            var randomVal = Math.floor((Math.random() * maxVal)+1);
            var count = 1;


            $('.pp-quote').each( function(){
                var obj = $(this);
                if(count==randomVal){
                    var dataRR = obj.attr('data-textquote');
                    $(".pp-quote[data-textquote="+dataRR+"]").click();
                }
                count++;
            });
        },4000);

});

