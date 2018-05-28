(function sliderHeader() {
    var sliderHeader = {
        root:     $(".js-slider-header"),
        carousel: $(".js-slider-header .js-slider"),
        animation: 'flipInX'
    };

    if ( sliderHeader.carousel.find('.item').length > 1 ){

        sliderHeader.carousel.slick({
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            arrows: false,
            dots: true,
            fade: true,
            speed: 400
        });

    }

}());
