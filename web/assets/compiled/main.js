function MediaEventListener(queryOption){
    var _self = this;
    _self.resolutionCurr = window.innerWidth;
    _self.resolutionLast = 0;
    // default device breakpoints или из опций при инициализации
    _self.queries = (typeof queryOption !== undefined) ? queryOption :[
        {
            name: 'mobile',
            minResolution: 0,
            maxResolution: 419,
            isActive: false,
            isEach: false,
            callback: []
        },
        {
            name: 'landscape',
            minResolution: 420,
            maxResolution: 1023,
            isActive: false,
            isEach: false,
            callback: []
        },
        {
            name: 'desktop',
            minResolution: 1024,
            maxResolution: 1920,
            isActive: false,
            isEach: false,
            callback: []
        },
        {
            name: 'each-resize',
            minResolution: 0,
            maxResolution: 19200,
            isActive: false,
            isEach: true,
            callback: []
        }
    ];

    // добавление функций на разные разрешения
    _self.addQueryAction = function(queryName, func){
        _self.queries.forEach(function(item){
            if( item.name === queryName){
                item.callback.push(func);
            }
        });
    };

    // выполняем скрипты для перехода на конкретное разршенеие
    _self.doQueryAction = function(queryName){
        _self.queries.forEach(function(item){
            // ищем нужное разрешение
            if( item.name === queryName){
                // запускаем все колбэки
                item.callback.forEach(function(item){ item(); });
            }
        });

    };

    // проверка активных медиа запросов
    _self.resize = function () {
        // определяем текущее разрешение
        _self.resolutionCurr = window.innerWidth;
        // проходим по всем разрешениям
        _self.queries.forEach(function(screen){
            if( screen.minResolution <= _self.resolutionCurr && _self.resolutionCurr <= screen.maxResolution ){

                // выполняем подвешеные скрипты, если на этом разрешение их нужно выполнять при каждом ресайзе
                if(screen.isEach){ _self.doQueryAction(screen.name); }

                // если сменилось на активное, то выполняем подвешеные скрипты
                if(!screen.isActive && !screen.isEach){ _self.doQueryAction(screen.name); }
                screen.isActive = true;

            } else {
                // иначе переключаем флаг, если разрешение неактивно
                screen.isActive = false;
            }
        });
        // запоминаем разрешение
        _self.resolutionLast =  _self.resolutionCurr;

    };

    // инициализация
    _self.init = function(){
        // запускаем проход по всем разрешениям для первой загрузки
        _self.resize();
        // и вешаем обработчик на все последущюие ресайзы
        window.onresize =  function resize(){
            _self.resize();
        }

    };

    _self.debug = function () {
        console.log( _self.queries );
    };

}




var Tables = (function(){

    // private =============================================================
    wrapTables = function (tableSelector){
        $(tableSelector).each(function () {
            var currTable = $(this);
            // var className = "table-responsive";
            // if(currTable.attr('data-view-type') == 'horizontal'){ className += ' -horizontal'; }
            currTable.wrap("<div class='table-responsive'><div class='table-responsive__scroll'></div></div>");
        })
    };

    // public =============================================================
    return {
        addMobileView: function(tableSelector){
            wrapTables(tableSelector);
        }
    };
}());
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

/// template-block/base-1/homepage/advantages
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

/// template-block/base-1/homepage/hits-widget
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
        margin: 22
    });
    hitsWidget.nextBtn.click(function() {
        hitsWidget.carousel.trigger('next.owl.carousel');
    });
    hitsWidget.prevBtn.click(function() {
        hitsWidget.carousel.trigger('prev.owl.carousel');
    });
}());

/// template-block/base-1/homepage/articles-widget
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
        margin: 22
    });
    articlesWidget.nextBtn.click(function() {
        articlesWidget.carousel.trigger('next.owl.carousel');
    });
    articlesWidget.prevBtn.click(function() {
        articlesWidget.carousel.trigger('prev.owl.carousel');
    });
}());

/// template-block/base-1/homepage/news-widget
(function newsWidget() {
    var newsWidget = {
        carousel : $(".js-news-widget .owl-carousel"),
        nextBtn : $(".js-news-widget .js-nav-next"),
        prevBtn : $(".js-news-widget .js-nav-prev")
    };
    newsWidget.carousel.owlCarousel({
        center: true,
        nav: false,
        dots: false,
        loop: true,
        autoWidth: true,
        margin: 22
    });
    newsWidget.nextBtn.click(function() {
        newsWidget.carousel.trigger('next.owl.carousel');
    });
    newsWidget.prevBtn.click(function() {
        newsWidget.carousel.trigger('prev.owl.carousel');
    });
}());

/// template-block/base-1/homepage/galery-fullwidth
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

/// template-block/base-1/homepage/certificates-and-partners
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
        margin: 20
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
        margin: 25
    });
    partners.nextBtn.click(function() {
        partners.carousel.trigger('next.owl.carousel');
    });
    partners.prevBtn.click(function() {
        partners.carousel.trigger('prev.owl.carousel');
    });
}());

/// template-block/base-1/homepage/testimonials-widget
(function testimonialsWidget() {
    var testimonialsWidget = {
        carousel : $(".js-testimonials-widget .bxslider"),
        nextBtn : $(".js-testimonials-widget .js-nav-next"),
        prevBtn : $(".js-testimonials-widget .js-nav-prev")
    };
    testimonialsWidget.carousel.bxSlider({
        mode: 'vertical',
        infiniteLoop: true,
        easing: "ease-in",
        pager: false,
        controls: false,
        minSlides: 2,
        maxSlides: 2,
        adaptiveHeight: false
    });
    testimonialsWidget.nextBtn.click(function() {
        testimonialsWidget.carousel.goToNextSlide();
    });
    testimonialsWidget.prevBtn.click(function() {
        testimonialsWidget.carousel.goToPrevSlide();
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
console.log('main');
/*=========================================================================*/
// mediaEventListener инициализируем после всех добавлений,
// скрипты подвешеные позже не отработают при первой загрузке
mediaEventListener.init();
/*=========================================================================*/