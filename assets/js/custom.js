(function ($) {
    "use strict";
    //For Navbar
    $(window).on("scroll",function () {

        if ($(document).scrollTop() > 0) {
            $("header").addClass("scroll");
            $("header").addClass("fixed-top");
            $('.custom-btn3').addClass('custom-color', $(this).scrollTop() > 0);
            $('.custom-btn3').removeClass('hvr-left-white', $(this).scrollTop() > 0);
            $('.custom-btn3').addClass('left-black', $(this).scrollTop() > 0);
            $('.custom-btn3').addClass('txt-hvr-black', $(this).scrollTop() > 0);
        } 
        else {
            $("header").removeClass("scroll");
            $("header").removeClass("fixed-top");
            $('.custom-btn3').removeClass('txt-hvr-black', $(this).scrollTop() > 0);
            $('.custom-btn3').removeClass('custom-color', $(this).scrollTop() > 0);
            $('.custom-btn3').removeClass('left-black', $(this).scrollTop() > 0);
            $('.custom-btn3').addClass('hvr-left-white', $(this).scrollTop() > 0);
        }

    });

    // OWL Carousel

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeOut: 2000,
        animateIn: 'fadeIn',
        // animateOut: 'fadeOut',
        stopOnHover: true,
        responsiveClass: true,
        autoWidth: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    //Counter Up JS 


    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // AOS Initialization
    AOS.init();

    // WOW JS Initialization 
    new WOW().init();


    //parallax
    var bgtxt = document.querySelector('.bg-text');
    new simpleParallax(bgtxt, {
        delay: .6,
        transition: 'cubic-bezier(0,0,0,1)',
        orientation: 'up',
        scale: 1.3,
        overflow: true
    });
    var portimg = document.querySelectorAll('.portImg');
    new simpleParallax(portimg);

    var visitimg = document.querySelector('.vImg');
    new simpleParallax(visitimg, {
        delay: .6,
        transition: 'cubic-bezier(0,0,0,1)',
        orientation: 'up',
        scale: 1.2,
        overflow: true
    });

    var vCard1 = document.querySelector('.visit-card1');
    new simpleParallax(vCard1, {
        delay: .6,
        transition: 'cubic-bezier(0,0,0,1)',
        orientation: 'down',
        scale: 1.5,
        overflow: true
    });

    var vCard2 = document.querySelector('.visit-card2');
    new simpleParallax(vCard2, {
        delay: .6,
        transition: 'cubic-bezier(0,0,0,1)',
        orientation: 'left',
        scale: 1.5,
        overflow: true
    });

    var circleYl = document.querySelectorAll('.circle-yl');
    new simpleParallax(circleYl, {
        delay: .6,
        transition: 'cubic-bezier(0,0,0,1)',
        orientation: 'down',
        scale: 1.2,
        overflow: true
    });

    //SVG SQAURE
    function square() {
        var path
        var prefix = 'sq-path';
        for (var i = 1; path = document.getElementById(prefix + i); i++) {
            if (i < 10) {
                var length = path.getTotalLength();

                path.style.transition = path.style.WebkitTransition = 'none';

                path.style.strokeDasharray = length + ' ' + length;
                path.style.strokeDashoffset = length;

                path.getBoundingClientRect();

                path.style.transition = path.style.WebkitTransition =
                    'stroke-dashoffset 1s ease-in-out';

                path.style.strokeDashoffset = '0';
            }
        }
        setTimeout(function sqaure_img() {
            $('.sq-path').addClass('animated fadeOut');
        }, 1200);

        setTimeout(function sqaure_img_d() {
            $('.sq-svg-path').addClass('d-none');

        }, 1800);
        setTimeout(function sq_svg_img() {
            $('.sq-svg-img').addClass('d-block animated fadeIn');
            $('.work-svg').removeClass('work-svg');
        }, 1800);
    }

    square();




}(jQuery));