(function reviewsWidget() {
    var reviewsWidget = {
        carousel : $(".js-reviews-widget .js-slider"),
        btn : $(".js-reviews-widget .js-btn-more"),
    };

    resizeComponent.addMediaQuery({
        min: 0,
        max: 980,
        onEnter: function(){
            reviewsWidget.btn.addClass('btn -secondary');
        },
        onExit: function(){
            reviewsWidget.btn.removeClass('btn -secondary');
        }
    });

    if ( reviewsWidget.carousel.find('.reviews-widget__item').length > 1 ){

        reviewsWidget.carousel.slick({
            infinite: true,
            arrows: false,
            dots: true,
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


    }

}());
