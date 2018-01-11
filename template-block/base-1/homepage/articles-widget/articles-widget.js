(function articlesWidget() {
    var articlesWidget = {
        carousel : $(".js-articles-widget .owl-carousel"),
        nextBtn : $(".js-articles-widget .js-nav-next"),
        prevBtn : $(".js-articles-widget .js-nav-prev")
    };
    $(articlesWidget.carousel).imagesLoaded()
        .always( function( instance ) {
            articlesWidget.carousel.owlCarousel({
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
            articlesWidget.nextBtn.click(function() {
                articlesWidget.carousel.trigger('next.owl.carousel');
            });
            articlesWidget.prevBtn.click(function() {
                articlesWidget.carousel.trigger('prev.owl.carousel');
            });
        })
        .fail( function() {
            console.warn('one or more images is broken in ' + articlesWidget.carousel.selector);
        });

}());