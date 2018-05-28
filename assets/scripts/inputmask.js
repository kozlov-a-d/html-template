$(document).on('app.html', function (e, args) {
    if ('undefined' !== typeof $.fn.inputmask) {
        args.$html.find('input.inputmask-phone').inputmask('9', {
            repeat: '*'
        });
    }
});
