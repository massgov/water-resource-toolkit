$(function() {
    // sameHgt($('.select-type .hgt'));
    popCall();
});
$(window).on('resize', function() {
    sameHgt($('.select-type .hgt'));
});
$(window).on('load', function() {
    sameHgt($('.select-type .hgt'));
});

function sameHgt(ele) {
    let hmax = 0;
    if ($(window).innerWidth() > 991 && ele.length > 0) {
        ele.removeAttr('style');
        ele.each(function() {
            if ($(this).height() > hmax)
                hmax = $(this).height();
        });
        ele.css('min-height', hmax);
    } else
        ele.removeAttr('style');
}

function popCall() {
    $('.plant-call a').on('click', function(e) {
        e.preventDefault();
        let data = $(this).data('plant');
        console.log(data);
        $('.plant-call a').removeClass('active');
        $(this).addClass('active');
        $('.selected').hide();
        $('.selected[data-plant="' + data + '"]').fadeIn();
    });
    $('.cross-pop').on('click', function() {
        $('.selected').hide();
    });

}