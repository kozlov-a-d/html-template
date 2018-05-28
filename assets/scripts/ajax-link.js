(function () {
    var CLASSES = {
            overlay: 'c-window-overlay',
            window:  'c-window',
            body:    'c-window__body',
            close:   'c-window__close'
        },
        TEMPLATE =
            '<div class="c-window-overlay" id="js-window-overlay"></div>' +
            '<div class="c-window">' +
                '<div class="c-window__container">' +
                    '<div class="c-window__inner">' +
                        '<div class="c-window__body">' +
                            '<a class="c-window__close" href="#">&nbsp;</a>' +
                            '<div class="c-window__content">__html__</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
        ,
        SELECTORS = {};

    for (var name in CLASSES) {
        SELECTORS[name] = '.' + CLASSES[name];
    }

    SELECTORS.windowAbsolute = 'body > ' + SELECTORS.window + ':first';
    SELECTORS.closeAbsolute  = SELECTORS.windowAbsolute + ' ' + SELECTORS.close;

    $(document)
        .on('click', SELECTORS.windowAbsolute, function (e) {
            var $target = $(e.target);

            var isClose = $target.hasClass(CLASSES.close);

            if (isClose) {
                e.preventDefault();
            }
            if (isClose || !$target.closest(SELECTORS.body).length) {
                var $window = $(this).closest(SELECTORS.window);

                $window.siblings(SELECTORS.overlay).remove();

                $window.remove();
            }
        })
        .on('click', '.ajax:not(form)', function (e) {
            e.preventDefault();

            var $node = $(this);

            var options = $node.data();

            var url = options.url || $node.attr('href') || '';

            if (options.clicked || !url || 0 === url.indexOf('#')) {
                return;
            }

            $node.data('clicked', true);

            App.addPreloader($node);

            $.ajax(url)
                .done(function (html) {
                    $(SELECTORS.closeAbsolute).trigger('click');

                    var $html = $(TEMPLATE.replace(/__html__/g, html));

                    $('body').append($html);

                    $(document).trigger('app.html', {
                        $html: $html
                    });

                    $html.find('input[required]:visible:first').trigger('focus');
                })
                .always(function () {
                    $node.removeData('clicked');
                })
                .fail(App.onAjaxFail);
        });
})();
