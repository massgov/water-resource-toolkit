$(function() {
    hintAnswer();
});
$(window).on('load', function() {});
$(window).on('scroll', function() {});
$(window).on('resize', function() {});

function hintAnswer() {
    $('.info').on('click', function() {
        $('.yes').addClass('hint');
        setTimeout(function() {
            $('.yes').removeClass('hint');
        }, 5000);
    });
    $('.no').on('click', function() {
        $(this).addClass('wrong');
        setTimeout(function() {
            $('.no').removeClass('wrong');
        }, 5000);
    });
};
