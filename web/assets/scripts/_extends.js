console.time('appjs');
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


console.time('SmartMenu');

var menuMobile = new MenuMobile({});
var smartMenu = new SmartMenu({});
console.timeEnd('SmartMenu');


console.time('sliderHeader');
/// template-block/base-1/homepage/slider
(function sliderHeader() {
    var sliderHeader = {
        carousel : $(".js-slider-header .owl-carousel"),
        nextBtn : $(".js-slider-header .js-nav-next"),
        prevBtn : $(".js-slider-header .js-nav-prev"),
        counter : $(".js-slider-header .js-nav-counter"),
        direction : 'forward'   // inverse
    };
    sliderHeader.carousel.owlCarousel({
        autoplay: true,
        autoplayTimeout: 6000,
        loop:true,
        margin:0,
        nav:false,
        dots: false,
        items: 1,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        onInitialized: renderCounter,
        onTranslate: renderCounter
    });

    function renderCounter(event) {
        // normalize index
        if( sliderHeader.direction === 'inverse' && event.item.index-1 === 0){
            sliderHeader.counter.html( event.item.count + '/' + event.item.count);
        } else {
            sliderHeader.counter.html(event.item.index-1 + '/' + event.item.count);
        }
    }

    sliderHeader.nextBtn.click(function() {
        sliderHeader.direction = 'forward';
        sliderHeader.carousel.trigger('next.owl.carousel');
    });
    sliderHeader.prevBtn.click(function() {
        sliderHeader.direction = 'inverse';
        sliderHeader.carousel.trigger('prev.owl.carousel');
    });
}());
console.timeEnd('sliderHeader');

/// template-block/base-1/homepage/advantages
console.time('advantages');
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
console.timeEnd('advantages');

/// template-block/base-1/homepage/hits-widget
console.time('hitsWidget');
(function hitsWidget() {
    var hitsWidget = {
        carousel : $(".js-hits-widget .owl-carousel"),
        nextBtn : $(".js-hits-widget .js-nav-next"),
        prevBtn : $(".js-hits-widget .js-nav-prev")
    };
    hitsWidget.carousel.owlCarousel({
        center: true,
        nav: false,
        dots: false,
        loop: true,
        autoWidth: true,
        margin: 22,
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
    hitsWidget.nextBtn.click(function() {
        hitsWidget.carousel.trigger('next.owl.carousel');
    });
    hitsWidget.prevBtn.click(function() {
        hitsWidget.carousel.trigger('prev.owl.carousel');
    });
}());
console.timeEnd('hitsWidget');

/// template-block/base-1/homepage/articles-widget
console.time('articlesWidget');
(function articlesWidget() {
    var articlesWidget = {
        carousel : $(".js-articles-widget .owl-carousel"),
        nextBtn : $(".js-articles-widget .js-nav-next"),
        prevBtn : $(".js-articles-widget .js-nav-prev")
    };
    articlesWidget.carousel.owlCarousel({
        center: true,
        nav: false,
        dots: false,
        loop: true,
        autoWidth: true,
        margin: 22,
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
    articlesWidget.nextBtn.click(function() {
        articlesWidget.carousel.trigger('next.owl.carousel');
    });
    articlesWidget.prevBtn.click(function() {
        articlesWidget.carousel.trigger('prev.owl.carousel');
    });
}());
console.timeEnd('articlesWidget');

/// template-block/base-1/homepage/news-widget
console.time('newsWidget+bannersWidget');
(function newsWidget() {
    var newsWidget = {
        carousel : $(".js-news-widget .news-widget__carousel.owl-carousel"),
        nextBtn : $(".js-news-widget .js-nav-next"),
        prevBtn : $(".js-news-widget .js-nav-prev")
    };
    newsWidget.carousel.owlCarousel({
        center: true,
        nav: false,
        dots: false,
        loop: true,
        autoWidth: true,
        margin: 22,
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
    newsWidget.nextBtn.click(function() {
        newsWidget.carousel.trigger('next.owl.carousel');
    });
    newsWidget.prevBtn.click(function() {
        newsWidget.carousel.trigger('prev.owl.carousel');
    });
}());
(function bannersWidget() {
    var bannersWidget = {
        carousel : $(".js-news-widget .banners__carousel.owl-carousel"),
    };
    bannersWidget.carousel.owlCarousel({
        center: true,
        nav: false,
        dots: false,
        loop: true,
        autoWidth: true,
        margin: 22,
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


}());
console.timeEnd('newsWidget+bannersWidget');

/// template-block/base-1/homepage/galery-fullwidth
console.time('galeryFullwidthCentered');
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
console.timeEnd('galeryFullwidthCentered');

/// template-block/base-1/homepage/certificates-and-partners
console.time('certificates+partners');
(function certificates() {
    var certificates = {
        carousel : $(".js-certificates .owl-carousel"),
        nextBtn : $(".js-certificates .js-nav-next"),
        prevBtn : $(".js-certificates .js-nav-prev")
    };
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
}());
(function partners() {
    var partners = {
        carousel : $(".js-partners .owl-carousel"),
        nextBtn : $(".js-partners .js-nav-next"),
        prevBtn : $(".js-partners .js-nav-prev")
    };
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
}());
console.timeEnd('certificates+partners');

/// template-block/base-1/homepage/testimonials-widget
console.time('testimonialsWidget');
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
console.timeEnd('testimonialsWidget');


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


console.timeEnd('appjs');