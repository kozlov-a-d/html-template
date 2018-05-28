(function advantages() {
    var advantages = {
        carousel : $(".js-advantages .owl-carousel"),
        nextBtn : $(".js-advantages .js-nav-next"),
        prevBtn : $(".js-advantages .js-nav-prev")
    };
    $(advantages.carousel).imagesLoaded()
        .always( function( instance ) {
            advantages.carousel.owlCarousel({
                nav: false,
                dots: false,
                loop: true,
                items: 4,
                responsive : {
                    0: { items: 1},
                    480: { items: 2},
                    768: { items: 3},
                    1024: { items: 4}
                }
            });
            advantages.nextBtn.click(function() {
                advantages.carousel.trigger('next.owl.carousel');
            });
            advantages.prevBtn.click(function() {
                advantages.carousel.trigger('prev.owl.carousel');
            });
        })
        .fail( function() {
            console.warn('one or more images is broken in ' + advantages.carousel.selector);
        });

}());