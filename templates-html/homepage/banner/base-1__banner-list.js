(function bannersWidget() {
    var bannersWidget = {
        carousel : $(".js-banner-list .owl-carousel"),
        nextBtn : $(".js-banner-list .js-nav-next"),
        prevBtn : $(".js-banner-list .js-nav-prev")
    };
    $(bannersWidget.carousel).imagesLoaded()
        .always( function( instance ) {
            bannersWidget.carousel.owlCarousel({
                center: true,
                nav: false,
                dots: false,
                loop: true,
                autoWidth: true,
                margin: 22,
                responsive: {
                    0: {
                        dots: true,
                        items:1
                    },
                    980: {
                        dots: false,
                        margin: 22
                    }
                }
            });
            bannersWidget.nextBtn.click(function() {
                bannersWidget.carousel.trigger('next.owl.carousel');
            });
            bannersWidget.prevBtn.click(function() {
                bannersWidget.carousel.trigger('prev.owl.carousel');
            });
        })
        .fail( function() {
            console.warn('one or more images is broken in ' + bannersWidget.carousel);
        });
}());