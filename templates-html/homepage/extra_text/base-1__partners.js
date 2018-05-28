(function partners() {
    var partners = {
        carousel : $(".js-partners .js-slider"),
        nextBtn : $(".js-partners .js-nav-next"),
        prevBtn : $(".js-partners .js-nav-prev")
    };
    $(partners.carousel).imagesLoaded()
        .always( function( instance ) {

            partners.carousel.slick({
                infinite: true,
                arrows: false,
                dots: false,
                rows: 2,
                slidesPerRow: 1,
                slidesToShow: 4,
                speed: 300,
                waitForAnimate: true,
                responsive: [{
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                    }
                },{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
                },{
                    breakpoint: 980,
                    settings: {
                        slidesToShow: 4,
                    }
                }]
            });

            partners.nextBtn.click(function() {
                partners.carousel.slick('slickNext');
            });
            partners.prevBtn.click(function() {
                partners.carousel.slick('slickPrev');
            });
        })
        .fail( function() {
            console.warn('one or more images is broken in ' + partners.carousel);
        });

}());