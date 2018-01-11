(function galeryFullwidthCentered() {
    var galeryFullwidthCentered = {
        carousel : $(".js-galery-fullwidth-centered .owl-carousel"),
        nextBtn : $(".js-galery-fullwidth-centered .js-nav-next"),
        prevBtn : $(".js-galery-fullwidth-centered .js-nav-prev")
    };
    $(galeryFullwidthCentered.carousel).imagesLoaded()
        .always( function( instance ) {
            galeryFullwidthCentered.carousel.owlCarousel({
                center: true,
                nav: false,
                dots: false,
                loop: true,
                autoWidth: true,
                margin: 2
            });
            galeryFullwidthCentered.nextBtn.click(function() {
                galeryFullwidthCentered.carousel.trigger('next.owl.carousel');
            });
            galeryFullwidthCentered.prevBtn.click(function() {
                galeryFullwidthCentered.carousel.trigger('prev.owl.carousel');
            });
        })
        .fail( function() {
            console.warn('one or more images is broken in ' + galeryFullwidthCentered.carousel.selector);
        });

}());