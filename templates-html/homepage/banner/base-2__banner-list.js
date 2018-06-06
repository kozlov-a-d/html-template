(function bannersWidget() {
    var bannersWidget = {
        carousel : $(".js-banner-list .owl-carousel"),
    };
    $(bannersWidget.carousel).imagesLoaded()
        .always( function( instance ) {
            bannersWidget.carousel.owlCarousel({
                center: true,
                nav: false,
                dots: false,
                loop: true,
                autoWidth: true,
                margin: 25,
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
            console.warn('one or more images is broken in ' + bannersWidget.carousel);
        });
}());