(function certificates() {
    var certificates = {
        carousel : $(".js-certificates .owl-carousel"),
        nextBtn : $(".js-certificates .js-nav-next"),
        prevBtn : $(".js-certificates .js-nav-prev")
    };
    $(certificates.carousel).imagesLoaded()
        .always( function( instance ) {
            certificates.carousel.owlCarousel({
                nav: false,
                dots: false,
                loop: true,
                autoWidth:true,
                margin: 20,
                responsive: {
                    0: {
                        dots: true,
                        items:1
                    },
                    980: {
                        dots: false,
                        margin: 22
                    }
                }
            });
            certificates.nextBtn.click(function() {
                certificates.carousel.trigger('next.owl.carousel');
            });
            certificates.prevBtn.click(function() {
                certificates.carousel.trigger('prev.owl.carousel');
            });
        })
        .fail( function() {
            console.warn('one or more images is broken in ' + certificates.carousel.selector);
        });

}());
(function partners() {
    var partners = {
        carousel : $(".js-partners .owl-carousel"),
        nextBtn : $(".js-partners .js-nav-next"),
        prevBtn : $(".js-partners .js-nav-prev")
    };
    $(partners.carousel).imagesLoaded()
        .always( function( instance ) {
            partners.carousel.owlCarousel({
                nav: false,
                dots: false,
                loop: true,
                autoWidth:true,
                margin: 25,
                responsive: {
                    0: {
                        dots: true,
                        items:1
                    },
                    980: {
                        dots: false,
                        margin: 22
                    }
                }
            });
            partners.nextBtn.click(function() {
                partners.carousel.trigger('next.owl.carousel');
            });
            partners.prevBtn.click(function() {
                partners.carousel.trigger('prev.owl.carousel');
            });
        })
        .fail( function() {
            console.warn('one or more images is broken in ' + partners.carousel);
        });

}());