(function productsShow() {
    var productsShow = {
        carousel : $(".js-images-main .js-slider"),
        thumb : $(".js-images-thumb"),
        nextBtn : $(".js-images-main .js-nav-next"),
        prevBtn : $(".js-images-main .js-nav-prev")
    };
    $(productsShow.carousel).imagesLoaded()
        .always( function( instance ) {
            productsShow.carousel.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.js-images-thumb'
            });
            
            productsShow.nextBtn.click(function() {
                productsShow.carousel.slick('slickNext');
            });
            productsShow.prevBtn.click(function() {
                productsShow.carousel.slick('slickPrev');
            });

            productsShow.thumb.slick({
                slidesToShow: 8,
                slidesToScroll: 1,
                asNavFor: '.js-images-main .js-slider',
                dots: true,
                centerMode: false,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 980,
                        settings: {
                          slidesToShow: 6
                        }
                      },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 5
                      }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 5
                        }
                    }
                  ]
            });
        })
        .fail( function() {
            console.warn('one or more images is broken in ' + productsShow.carousel);
        });

}());
