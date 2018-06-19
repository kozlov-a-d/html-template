(function productsShow() {
    var productsShow = {
        carousel : $(".js-images-main .js-slider"),
        thumb : $(".js-images-thumb"),
        nextBtn : $(".js-images-main .js-nav-next"),
        prevBtn : $(".js-images-main .js-nav-prev"),
        tabs : $(".js-prod-tabs .js-tabs"),
    };

    productsShow.tabs.tabs();   

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
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: '.js-images-main .js-slider',
                dots: true,
                centerMode: false,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 980,
                        settings: {
                          slidesToShow: 3
                        }
                    },{
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 6
                      }
                    },{
                        breakpoint: 640,
                        settings: {
                            slidesToShow: 5
                        }
                    },{
                        breakpoint: 540,
                        settings: {
                            slidesToShow: 4
                        }
                    },{
                        breakpoint: 440,
                        settings: {
                            slidesToShow: 3
                        }
                    },{
                        breakpoint: 340,
                        settings: {
                            slidesToShow: 2
                        }
                    }
                  ]
            });
        })
        .fail( function() {
            console.warn('one or more images is broken in ' + productsShow.carousel);
        });

}());
