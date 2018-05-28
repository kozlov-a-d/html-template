var App = (function () {
    var NOTIFICATION_TIMEOUT = 2000,
        PRELOADER            = '<img class="preloader" src="/assets/images/loader.svg" style="margin-left: 5px;">',
        PRELOADER_FULLSCREEN = '<div class="preloader" style="background: url(/assets/images/loader.svg) center no-repeat #28272d; background-size: 128px 128px; position: fixed; top: 0; bottom: 0; width: 100%; height: 100%; opacity: 0.4; z-index: 9999;">';

    var isMobile = function () {
        return window.innerWidth <= 890;
    };
    var translate = function (text) {
        return 'undefined' !== typeof Translator ? Translator.trans(text) : text;
    };
    var notify = function (text, type) {
        if (!text || isMobile()) {
            return;
        }
        if ('undefined' === typeof Noty) {
            alert(translate(text));

            return;
        }

        new Noty({
            text:    translate(text),
            type:    type,
            timeout: NOTIFICATION_TIMEOUT,
            theme:   'sunset'
        }).show();
    };

    return {
        addFullscreenPreloader: function () {
            $('body').append(PRELOADER_FULLSCREEN);
        },
        addPreloader: function (node, method) {
            $(node)[method || 'append'](PRELOADER);
        },
        notify:     notify,
        onAjaxFail: function (jqXHR) {
            var translation = 'error.title.' + jqXHR.status;
            var translated = translate(translation);

            notify(translated !== translation ? translated : [jqXHR.status, jqXHR.statusText].join(' '), 'error');
        },
        redirect: function (url, immediately) {
            if (url) {
                setTimeout(function () {
                    location.href = url;
                }, immediately ? 0 : (NOTIFICATION_TIMEOUT / 2));
            }
        },
        translate: translate
    };
})();

$(document).on('ajaxComplete', function () {
    $('.preloader').remove();
});

$(function () {
    $(document).trigger('app.html', {
        $html: $('body')
    });
});
