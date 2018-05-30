(function( $ ){

    var defaults = {
        // дефолтные опции
        animation: '',
        title: '',
        html: 'Content...',
        minResolution: 1023
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
                    if( window.innerWidth <= options.minResolution){
                        e.preventDefault();

                        var $html = $(
                            '<div class="modal-html ' + $(this).attr('data-class') + '" id="' + modalId + '">' +
                                '<div class="modal-html__wrapper">' +
                                    '<div class="modal-html__bg"></div>' +
                                    '<div class="modal-html__container">' +
                                        '<button class="modal-html__btn-close">Close</button>' +
                                        '<div class="modal-html__title">' + options.title + '</div>' +
                                        '<div class="modal-html__scroll">' +
                                            options.html +
                                        '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>'
                        );

                        $('body').append($html);
                        $('body').addClass('has-modal');
                        setTimeout(function(){
                            scrollComponent.disable();
                            methods.addEventListener($('#' + modalId));
                            $(document).trigger('app.html', {
                                $html: $html
                            });
                        }, 10);
                    }
                })
                
                
            });
        },

        addEventListener : function (modal) {
            $(modal)
            .on('click', '.modal-html__bg', function (e) {
                if (e.target === this) {
                    methods.closeModal(e);
                }
            })
            .on('click', '.modal-html__btn-close', function (e) {
                methods.closeModal(e);
            });
        },

        closeModal : function (e) {
            e.preventDefault();
            scrollComponent.enable();
            $('body').removeClass('has-modal');
            $('.modal-html').addClass('closing');
            setTimeout(function () {
                $('.modal-html').remove();
                $('body').css('position', 'static'); 
            }, 950);
        },

    };

    $.fn.modalHtml = function(method) {

        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод ' +  method + ' не существует в jQuery.modalHtml' );
        }

    };

})( jQuery );