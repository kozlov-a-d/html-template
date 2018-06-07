/**
 * требуются:
 * - resizeComponent
 * - tabs.jquery
 * - owlCarousel
 */
(function prodWidget() {

    if($('.js-prod-widget').length ){

        var prodWidget = {
            carousel : $(".js-prod-widget .js-tabs-content-item"),
            tabs : $(".js-prod-widget .js-tabs"),
        };

        prodWidget.tabs.tabs();   
        
        resizeComponent.addMediaQuery({
            min: 0, 
            max: 1023, 
            onEnter: function(){
                prodWidget.carousel.addClass('owl-carousel');
                prodWidget.carousel.owlCarousel({
                    nav: false,
                    dots: true,
                    loop: true,
                    margin: 22,
                    items:3,
                    responsive: {
                        0:   { items:1 },
                        480: { items:2 },
                        800: { items:3 }
                    }
                });
            }, 
            onExit: function(){
                prodWidget.carousel.trigger('destroy.owl.carousel');
                prodWidget.carousel.removeClass('owl-carousel');
            }
        });
    }

}());