
// scrollspy
$('body').scrollspy({
    target: '#navbar-menu',
    offset: 150
});


// smooth scroll
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - $('header').outerHeight() + 10
    }, 500);
});

// leave top
$(window).on('scroll', function () {

    $('body').each(function () {
        if ($(window).scrollTop() > 0) {
            $(this).addClass('leave_top');
        } else {
            $(this).removeClass('leave_top');
        }
    });

}).trigger('scroll');


// WOW
wow = new WOW(
    {
        offset: 450,
        mobile: false,
    }
)
wow.init();



// 作品集彈框
$(document).ready(function () {
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });
});
