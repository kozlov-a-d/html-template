(function stockWidget() {
    if( $(".js-stock-widget").length ){

        var stockWidget = {
            carousel : $(".js-stock-widget .owl-carousel"),
            btn : $(".js-stock-widget .js-btn-more"),
        };

        resizeComponent.addMediaQuery({
            min: 0,
            max: 980,
            onEnter: function(){
                stockWidget.btn.addClass('btn -secondary');
            },
            onExit: function(){
                stockWidget.btn.removeClass('btn -secondary');
            }
        })

        $(stockWidget.carousel).imagesLoaded()
            .always( function( instance ) {
                stockWidget.carousel.owlCarousel({
                    center: true,
                    nav: false,
                    dots: false,
                    loop: true,
                    autoWidth: true,
                    margin: 25, 
                    startPosition: 1,
                    responsive: {
                        0: {
                            dots: true,
                            items:1
                        },
                        980: {
                            dots: false,
                            margin: 25
                        }
                    }
                });
            })
            .fail( function() {
                console.warn('one or more images is broken in ' + stockWidget.carousel);
            });
    }


    

}());
