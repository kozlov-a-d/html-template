(function reviewsWidget() {
    var reviewsWidget = {
        carousel : $(".js-reviews-widget .js-slider"),
        nextBtn : $(".js-reviews-widget .js-nav-next"),
        prevBtn : $(".js-reviews-widget .js-nav-prev")
    };

    if ( reviewsWidget.carousel.find('.reviews-widget__item').length > 1 ){

        reviewsWidget.carousel.slick({
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

        reviewsWidget.nextBtn.click(function() {
            reviewsWidget.carousel.slick('slickNext');
        });
        reviewsWidget.prevBtn.click(function() {
            reviewsWidget.carousel.slick('slickPrev');
        });

    } else {
        reviewsWidget.nextBtn.remove();
        reviewsWidget.prevBtn.remove();
    }

}());
