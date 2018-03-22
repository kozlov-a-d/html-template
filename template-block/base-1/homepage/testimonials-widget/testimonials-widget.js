(function testimonialsWidget() {
    var testimonialsWidget = {
        carousel : $(".js-testimonials-widget .js-slider"),
        nextBtn : $(".js-testimonials-widget .js-nav-next"),
        prevBtn : $(".js-testimonials-widget .js-nav-prev")
    };

    if ( testimonialsWidget.carousel.find('.testimonials-widget__item').length > 1 ){

        testimonialsWidget.carousel.slick({
            infinite: true,
            arrows: false,
            dots: false,
            rows: 2,
            slidesPerRow: 1,
            slidesToShow: 1,
            fade: true,
            speed: 600,
            responsive: [{
                breakpoint: 568,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                    fade: false
                }
            }]
        });

        testimonialsWidget.nextBtn.click(function() {
            testimonialsWidget.carousel.slick('slickNext');
        });
        testimonialsWidget.prevBtn.click(function() {
            testimonialsWidget.carousel.slick('slickPrev');
        });

    } else {
        testimonialsWidget.nextBtn.remove();
        testimonialsWidget.prevBtn.remove();
    }

}());
