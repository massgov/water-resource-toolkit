$(function() {
    popCall();
});
$(window).on('resize', function() {});

function popCall() {
    $('#callpop').on('click', function() {
        $('#popduk').addClass('d-flex');
    });
    $('.close-pop').on('click', function() {
        $('#popduk').removeClass('d-flex');
    });
}