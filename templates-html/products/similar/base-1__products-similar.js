(function productsSimilar() {
    var productsSimilar = {
        carousel : $(".js-products-similar .owl-carousel"),
        nextBtn : $(".js-products-similar .js-nav-next"),
        prevBtn : $(".js-products-similar .js-nav-prev")
    };
    $(productsSimilar.carousel).imagesLoaded()
        .always( function( instance ) {
            productsSimilar.carousel.owlCarousel({
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
            productsSimilar.nextBtn.click(function() {
                productsSimilar.carousel.trigger('next.owl.carousel');
            });
            productsSimilar.prevBtn.click(function() {
                productsSimilar.carousel.trigger('prev.owl.carousel');
            });
        })
        .fail( function() {
            console.warn('one or more images is broken in ' + productsSimilar.carousel.selector);
        });

}());