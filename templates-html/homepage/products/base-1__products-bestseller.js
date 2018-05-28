(function hitsWidget() {
    var hitsWidget = {
        carousel : $(".js-hits-widget .owl-carousel"),
        nextBtn : $(".js-hits-widget .js-nav-next"),
        prevBtn : $(".js-hits-widget .js-nav-prev")
    };
    $(hitsWidget.carousel).imagesLoaded()
        .always( function( instance ) {
            hitsWidget.carousel.owlCarousel({
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
            hitsWidget.nextBtn.click(function() {
                hitsWidget.carousel.trigger('next.owl.carousel');
            });
            hitsWidget.prevBtn.click(function() {
                hitsWidget.carousel.trigger('prev.owl.carousel');
            });
        })
        .fail( function() {
            console.warn('one or more images is broken in ' + hitsWidget.carousel.selector);
        });

}());