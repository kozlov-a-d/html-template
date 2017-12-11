(function testimonialsWidget() {
    var testimonialsWidget = {
        carousel : $(".js-testimonials-widget .bxslider"),
        nextBtn : $(".js-testimonials-widget .js-nav-next"),
        prevBtn : $(".js-testimonials-widget .js-nav-prev")
    };
    // сохраняем слайдер в testimonialsWidget.carousel
    testimonialsWidget.carousel.bxSlider();

    testimonialsWidget.nextBtn.click(function() {
        testimonialsWidget.carousel.goToNextSlide();
    });
    testimonialsWidget.prevBtn.click(function() {
        testimonialsWidget.carousel.goToPrevSlide();
    });

    mediaEventListener.addQueryAction('mobile', function(){
        testimonialsWidget.carousel.reloadSlider({
            mode: 'horizontal',
            infiniteLoop: true,
            easing: "ease-in",
            pager: true,
            controls: false,
            minSlides: 1,
            maxSlides: 1,
            adaptiveHeight: false
        });
    });

    mediaEventListener.addQueryAction('desktop', function(){
        testimonialsWidget.carousel.reloadSlider({
            mode: 'vertical',
            infiniteLoop: true,
            easing: "ease-in",
            pager: false,
            controls: false,
            minSlides: 2,
            maxSlides: 2,
            adaptiveHeight: false
        });
    });
}());
