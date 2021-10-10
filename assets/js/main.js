    // WOW JS 
    new WOW().init();

    // home Slider

    $('.home-slider').slick({
    	infinite: true,
    	slidesToShow: 1,
    	slidesToScroll: 1,
    	arrows: false,
    	dots: true,
    	autoplay: true,
    	autoplaySpeed: 2000,
    	fade: true,
    	cssEase: 'linear'
    });
    // PeopleSay Slider

    $('.text-slider').slick({
    	slidesToShow: 1,
    	slidesToScroll: 1,
    	arrows: false,
    	fade: true,
    	asNavFor: '.slider-img'
    });
    $('.slider-img').slick({
    	slidesToShow: 5,
    	slidesToScroll: 1,
    	asNavFor: '.text-slider',
    	prevArrow: '.peolpeSay-arrow-left',
    	nextArrow: '.peolpeSay-arrow-right',
    	dots: false,
    	centerMode: true,
    	centerPadding: '0px',
    	focusOnSelect: true
    });


    // Venobox 

    $('.venobox').venobox({
    	framewidth: '550px',
    	frameheight: '400px',
    	border: '10px',
    	bgcolor: '#ffffff',
    	share: ['facebook', 'twitter', 'linkedin', 'download']
    });

    // Counter JS
    $('.counter').counterUp({
    	delay: 10,
    	time: 1000
    });


    // Magnific Images
    $('.click-link').magnificPopup({
    	type: 'image',
    	gallery: {
    		enabled: true
    	}
    });


    // Magnific Video
    $('.video-link').magnificPopup({
    	type: 'iframe'
    });

    // sticky top menu

    $(window).scroll(function () {
    	var scrolling = $(this).scrollTop();
    	var sticky = $('.sticky-top');
    	if (scrolling >= 100) {
    		sticky.addClass('nav-bg');
    	} else {
    		sticky.removeClass('nav-bg');
    	}
    });

    // scroll to top menu

    var scrolltotop = {
    	setting: {
    		startline: 100,
    		scrollto: 0,
    		scrollduration: 1e3,
    		fadeduration: [500, 100]
    	},
    	controlHTML: '<img src="../img/scrollTop.png" />',
    	controlattrs: {
    		offsetx: 5,
    		offsety: 5
    	},
    	anchorkeyword: "#top",
    	state: {
    		isvisible: !1,
    		shouldvisible: !1
    	},
    	scrollup: function () {
    		this.cssfixedsupport || this.$control.css({
    			opacity: 0
    		});
    		var t = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt(this.setting.scrollto);
    		t = "string" == typeof t && 1 == jQuery("#" + t).length ? jQuery("#" + t).offset().top : 0, this.$body.animate({
    			scrollTop: t
    		}, this.setting.scrollduration)
    	},
    	keepfixed: function () {
    		var t = jQuery(window),
    			o = t.scrollLeft() + t.width() - this.$control.width() - this.controlattrs.offsetx,
    			s = t.scrollTop() + t.height() - this.$control.height() - this.controlattrs.offsety;
    		this.$control.css({
    			left: o + "px",
    			top: s + "px"
    		})
    	},
    	togglecontrol: function () {
    		var t = jQuery(window).scrollTop();
    		this.cssfixedsupport || this.keepfixed(), this.state.shouldvisible = t >= this.setting.startline ? !0 : !1, this.state.shouldvisible && !this.state.isvisible ? (this.$control.stop().animate({
    			opacity: 1
    		}, this.setting.fadeduration[0]), this.state.isvisible = !0) : 0 == this.state.shouldvisible && this.state.isvisible && (this.$control.stop().animate({
    			opacity: 0
    		}, this.setting.fadeduration[1]), this.state.isvisible = !1)
    	},
    	init: function () {
    		jQuery(document).ready(function (t) {
    			var o = scrolltotop,
    				s = document.all;
    			o.cssfixedsupport = !s || s && "CSS1Compat" == document.compatMode && window.XMLHttpRequest, o.$body = t(window.opera ? "CSS1Compat" == document.compatMode ? "html" : "body" : "html,body"), o.$control = t('<div id="topcontrol">' + o.controlHTML + "</div>").css({
    				position: o.cssfixedsupport ? "fixed" : "absolute",
    				bottom: o.controlattrs.offsety,
    				right: o.controlattrs.offsetx,
    				opacity: 0,
    				cursor: "pointer"
    			}).attr({
    				title: "Scroll to Top"
    			}).click(function () {
    				return o.scrollup(), !1
    			}).appendTo("body"), document.all && !window.XMLHttpRequest && "" != o.$control.text() && o.$control.css({
    				width: o.$control.width()
    			}), o.togglecontrol(), t('a[href="' + o.anchorkeyword + '"]').click(function () {
    				return o.scrollup(), !1
    			}), t(window).bind("scroll resize", function (t) {
    				o.togglecontrol()
    			})
    		})
    	}
    };
    scrolltotop.init();

    // smooths scrolling js code use for menu bar here below code
    $('body').scrollSpy({
    	target: ".navbar",
    	offset: 50
    });

    // scrollSpy js code use for  menu bar smoothly use here below code
    var html_body = $('html,body');
    $('nav a').on('click', function () {
    	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    		location.hostname == this.hostname) {
    		var target = $(this.hash);
    		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    		if (target.length) {
    			html_body.animate({
    				scrollTop: target.offset().top - 50
    			}, 1500);
    			return false;
    		}
    	}
    });