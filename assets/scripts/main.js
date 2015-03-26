/*!
 * Dawn Mission Web Site
 * Copyright 2015 Vladimir Stračkovski
 * See https://github.com/strackovski/dawn-www
 */
$(document).ready(function () {
    var elems = document.getElementsByTagName( 'a' );
    $(window).on('scroll', onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        if ($(this).hasClass('mm-nav')) return;

        if ($(this).parents('.mobile-nav').length) {
            $('body').toggleClass('expand');
        }
        e.preventDefault();
        $(window).off('scroll');
        $('.active').removeClass('active');
        $(this).addClass('active');

        var target = this.hash;
        console.log('target: ' + target)
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 64
        }, 800, function () {
            window.location.hash = target;
            $(window).on('scroll', onScroll);
        });
    });

    $('.mm-nav').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('expand');
    })
});

$(window).on('resize', function () {
    var win_width = $(window).width();
    if ($('body').hasClass('expand')) {
        if (win_width > 760) {
            $('body').toggleClass('expand');
        }
    }
});

function onScroll(event){
    var win = $(window);
    var scrollTop =  win.scrollTop();
    if (scrollTop > 120) {
        if ($('nav').hasClass('fixed')) {
        } else {
            $('nav').addClass('fixed');
        }
    } else {
        if ($('nav').hasClass('fixed')) {
            $('nav').removeClass('fixed');
        }
    }
    var scrollPos = $(window).scrollTop();
    $('.nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));

        if (refElement.position().top <= scrollPos+76 && refElement.position().top + refElement.height() > scrollPos) {
            $('.active').removeClass("active");
            if (currLink.attr('href') == '#home') return;
            currLink.addClass('active');
        }
        else{
            currLink.removeClass('active');
        }
    });
}

