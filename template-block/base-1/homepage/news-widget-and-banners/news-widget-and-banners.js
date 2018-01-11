(function newsWidget() {
    var newsWidget = {
        carousel : $(".js-news-widget .news-widget__carousel.owl-carousel"),
        nextBtn : $(".js-news-widget .js-nav-next"),
        prevBtn : $(".js-news-widget .js-nav-prev")
    };
    $(newsWidget.carousel).imagesLoaded()
        .always( function( instance ) {
            newsWidget.carousel.owlCarousel({
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
            newsWidget.nextBtn.click(function() {
                newsWidget.carousel.trigger('next.owl.carousel');
            });
            newsWidget.prevBtn.click(function() {
                newsWidget.carousel.trigger('prev.owl.carousel');
            });
        })
        .fail( function() {
            console.warn('one or more images is broken in ' + newsWidget.carousel);
        });

}());

(function bannersWidget() {
    var bannersWidget = {
        carousel : $(".js-news-widget .banners__carousel.owl-carousel"),
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
        })
        .fail( function() {
            console.warn('one or more images is broken in ' + bannersWidget.carousel);
        });
}());