const menuToggle = document.querySelector('.toggle');
const nav = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
})


$('document').ready(function() {
    'use strict';
    $('.card-head').on('click', function() {
        $(this).next('.card-body').slideToggle().parent().find('.card-head h2 i').toggleClass('fa-plus fa-minus');
    });


    // Add Active Class Navbar Link And Remove From Siblings
    $('.menu li a').click(function() {
        $(this).parent().addClass('active').siblings().removeClass('active');

    });

    //tab list FadeIn if addClass active
    $('.tab-list li').on('click', function() {
        console.log($(this).data('content'))
        $(this).addClass("active").siblings().removeClass("active");
        $('.content-list > div').hide();
        $($(this).data('content')).fadeIn();
    });


    //If click SlideToggle Text p 
    $('.content-list .blc-text h2').on('click', function() {
        $(this).next('p').slideToggle().parent().find('h2 i').toggleClass('fa-plus fa-minus');
    });


    //If Scroll Fixed top
    $(window).scroll(function() {
        var height = $(window).scrollTop();

        if (height > 500) {
            $('header').addClass('header-fixed');
        } else {
            $('header').removeClass('header-fixed');
        }

    });


    //Scroll Link to Section
    $('nav li a,.showcase .btn a').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 80
        }, 1000);
    });


    //Active Menu  Link If Scroll
    $(window).scroll(function() {
        //Sync Navbar Links With Section
        $('.bloc-alt').each(function() {
            if ($(window).scrollTop() > $(this).offset().top - 90) {
                var BlockSection = $(this).attr('id');
                $('nav li').removeClass('active');
                $('nav li a[data-scroll="' + BlockSection + '"]').parent().addClass('active');

            }
        });
        //Button Scroll  FadeIn If Scroll Top Superieur 1000px
        var scrollToTop = $('.scroll-top');
        if ($(window).scrollTop() > 1000) {
            scrollToTop.fadeIn(400);
        } else {
            scrollToTop.fadeOut(400);

        }

    });

    //Scroll To TOP Button Fade
    $('.scroll-top').on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });


    //Hide Placeholder On Focus & Restore On Blur

    var placeAttr = '';
    $('[placeholder]').focus(function() {
        placeAttr = $(this).attr('placeholder');
        $(this).attr('placeholder', '');


    }).blur(function() {
        $(this).attr('placeholder', placeAttr);

    });

    $('html').niceScroll({
        cursorcolor: "#f40057", // change cursor color in hex // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
        cursorwidth: "10px", // cursor width in pixel (you can also write "5px")
        cursorborder: "1px solid #fff", // css definition for cursor border
        cursorborderradius: "20px", // border radius in pixel for cursor
        scrollspeed: "120",

    });

});