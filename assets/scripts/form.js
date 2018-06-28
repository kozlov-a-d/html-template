$('body').on('submit', 'form.ajax', function (e) {
    e.preventDefault();

    var $form = $(this);

    if ($form.data('submitted')) {
        return;
    }

    $form.data('submitted', true);

    App.addPreloader($form.find('[type="submit"]'));

    var options = {
        url:  $form.attr('action') || '',
        type: $form.attr('method') || 'get',
        data: 'undefined' !== typeof FormData ? new FormData($form[0]) : $form.serialize(),
    };

    if ('undefined' !== typeof FormData) {
        options.contentType = options.processData = false;
    }

    $.ajax(options).done(function (data) {

        $(document).trigger('app.form.' + (data.success ? 'success' : 'error'), {
            $form: $form
        });

        App.notify(data.message, data.success ? 'success' : 'error');
        App.redirect(data.redirectUrl);

        if (data.html) {
            var $html = $(data.html);

            ($form.data('target') ? $form.closest($form.data('target')) : $form).replaceWith($html);

            $(document).trigger('app.html', {
                $html: $html.parent()
            });
        }
    }).always(function () {
        $form.removeData('submitted');
    }).fail(App.onAjaxFail);
});
