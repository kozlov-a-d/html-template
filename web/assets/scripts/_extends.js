/*=========================================================================*/
/* mediaEventListener кастомизируем breakpoint'ы */
var mediaEventListener = new MediaEventListener([
    { name: 'mobile',  minResolution: 0,    maxResolution: 1023,  isActive: false, isEach: false, callback: [] },
    { name: 'desktop', minResolution: 1024, maxResolution: 1920,  isActive: false, isEach: false, callback: [] },
    { name: 'resize',  minResolution: 0,    maxResolution: 19200, isActive: false, isEach: true,  callback: [] }
]);


/*=========================================================================*/
/* задаём каим именно табилцам нужно добавлять обертки .table-responsive для адаптива */
Tables.addMobileView('table');



/// template-block/base-1/advantages
(function advantages() {
    var advantages = {
        carousel : $(".js-advantages .owl-carousel"),
        nextBtn : $(".js-advantages .js-nav-next"),
        prevBtn : $(".js-advantages .js-nav-prev")
    };
    advantages.carousel.owlCarousel({
        nav: false,
        dots: false,
        loop: true,
        items: 4,
        responsive : {
            0: { items: 1},
            480: { items: 2},
            768: { items: 3},
            1024: { items: 4}
        }
    });
    advantages.nextBtn.click(function() {
        advantages.carousel.trigger('next.owl.carousel');
    });
    advantages.prevBtn.click(function() {
        advantages.carousel.trigger('prev.owl.carousel');
    });
}());

/// template-block/base-1/galery-fullwidth
(function galeryFullwidthCentered() {
    var galeryFullwidthCentered = {
        carousel : $(".js-galery-fullwidth-centered .owl-carousel"),
        nextBtn : $(".js-galery-fullwidth-centered .js-nav-next"),
        prevBtn : $(".js-galery-fullwidth-centered .js-nav-prev")
    };
    galeryFullwidthCentered.carousel.owlCarousel({
        center: true,
        nav: false,
        dots: false,
        loop: true,
        autoWidth: true,
        margin: 2
    });
    galeryFullwidthCentered.nextBtn.click(function() {
        galeryFullwidthCentered.carousel.trigger('next.owl.carousel');
    });
    galeryFullwidthCentered.prevBtn.click(function() {
        galeryFullwidthCentered.carousel.trigger('prev.owl.carousel');
    });
}());





/*=========================================================================*/
/* Window Resize с mediaEventListener */
// навешиваем скрипты на разные разрешения
mediaEventListener.addQueryAction('mobile', function(){
    // console.log('mobile 1');
});
mediaEventListener.addQueryAction('desktop', function(){
    // console.log('desktop 2');
});
mediaEventListener.addQueryAction('resize', function(){
    // console.log('resize');
});
// mediaEventListener.addQueryAction('resize', function(){
//     console.log('resize');
//