$(function() {
    mousepinterLeak();
});

function mousepinterLeak() {
    $('#leakpointer .leak-here').on('mouseover', function() {
        let data = $(this).data('leak');
        $('#leakarea .leak-point').hide();
        $('#leakarea .leak-point[data-leak="' + data + '"]').show();
    });
    $('#leakpointer').on('mouseout', function() {
        $('#leakarea .leak-point').hide();
    })
}