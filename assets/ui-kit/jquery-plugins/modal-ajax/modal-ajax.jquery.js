(function( $ ){

    var defaults = {
        // дефолтные опции
        animation: ''
    };
    var states ={
        hasExtra: false
    };

    var methods = {

        init : function( options ) {

            options = $.extend({}, defaults, options);

            this.each(function() {
                var modalId = 'modal-' + Math.round(Math.random()*999999);
                $(this)
                .on('click', function (e) {
                    e.preventDefault();

                    var AJAX_LOADER  = '<img class="btn__loader" src="/assets/images/loader.svg" width="20" height="20">';
                    var $link = $(this);

                    if ($link.data('clicked')) {
                        return;
                    }

                    var linkContent = $link.html();
                    $link.data('clicked', true).html(AJAX_LOADER);

                    $.ajax({
                        url: $link.attr('href')
                    }).done(function (html) {
                        
                        $('body').append(
                            '<div class="modal ' + $link.attr('data-class') + '" id="' + modalId + '">' +
                                '<div class="modal__wrapper">' +
                                    '<div class="modal__bg"></div>' +
                                    '<button class="modal__btn-close">Close</button>' +
                                    '<div class="modal__container">' +
                                        '<div class="modal__scroll">' +
                                            html +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="modal__loader"></div>' +
                                '</div>' +
                            '</div>'
                        );
                        setTimeout(function(){
                            app.scroll.disable();
                            methods.addEventListener($('#' + modalId));
                        }, 10);
                    }).always(function () {
                        $link.removeData('clicked').html(linkContent);
                        $('.modal__loader').css({'opacity': 0, 'pointerEvents': 'none'});
                    }).fail(function () {
                        console.warn('Ajax fail');
                    });
                })
                
                
            });
        },

        addEventListener : function (modal) {
            $(modal)
            .on('click', '.modal__bg', function (e) {
                if (e.target === this) {
                    $(this).find('.modal__btn-close').trigger('click');
                }
            })
            .on('click', '.modal__btn-close', function (e) {
                e.preventDefault();
                app.scroll.enable();
                $('.modal').addClass('closing');
                setTimeout(function () {
                    $('.modal').remove();
                    $('body').css('position', 'static'); 
                }, 1350);
            });
        },

        // проверяет элементы, если элементу не хватает места, то скрывает его
        hideItem : function () {
            
        }

    };

    $.fn.modalAjax = function(method) {

        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод ' +  method + ' не существует в jQuery.modalAjax' );
        }

    };

})( jQuery );