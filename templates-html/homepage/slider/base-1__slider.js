(function sliderHeader() {
    var sliderHeader = {
        root:     $(".js-slider-header"),
        carousel: $(".js-slider-header .js-slider"),
        nextBtn:  $(".js-slider-header .js-nav-next"),
        prevBtn:  $(".js-slider-header .js-nav-prev"),
        counter:  $(".js-slider-header .js-nav-counter"),
        animation: 'flipInX'
    };

    if ( sliderHeader.carousel.find('.item').length > 1 ){

        // animateOut: 'slideOutDown',
        // animateIn: 'flipInX',

        sliderHeader.carousel.on('init', function(e, slick) {
            renderCounter(slick.slideCount, 1);
            sliderHeader.root.addClass('is-initialized');
        });
        sliderHeader.carousel.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            renderCounter(slick.slideCount, nextSlide+1);
        });

        sliderHeader.carousel.slick({
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            arrows: false,
            dots: false,
            fade: true,
            speed: 400
        });

        function renderCounter(slideCount, nextSlide) {
            sliderHeader.counter.html( nextSlide + '/' + slideCount);
        }

        sliderHeader.nextBtn.click(function() {
            sliderHeader.carousel.slick('slickNext');
        });
        sliderHeader.prevBtn.click(function() {
            sliderHeader.carousel.slick('slickPrev');
        });

    } else {
        sliderHeader.nextBtn.remove();
        sliderHeader.prevBtn.remove();
    }

}());
