$(document).ready(function () {
    $('.tabs').tabs();
    $('.parallax').parallax();

    $('#contactNav').on('click', function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contact-start").offset().top
        }, 2000);
    });

    $('#aboutMeNav').on('click', function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#about-me-start").offset().top
        }, 2000);
    });

    $('#portfolioNav').on('click', function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#portfolio-start").offset().top
        }, 2000);
    });
});