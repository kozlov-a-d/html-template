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




/*

Структура для меню, в [] - имена из elements/selectors,
* [] - эти классы добавлены в структуру для наглядности и вставлять их в верстку не надо

<nav class="menu-top js-smart-menu [container]">

    <div class="menu-top__switcher">
        <button class="menu-top__switcher-btn [btnToggle]">показать/скрыть меню</button>
    </div>

    <div class="menu-top__title">
        <button class="menu-top__title-btn [btnTitle]">Шапка меню в развернутом виде</button>
    </div>

    <ul class="menu-top__list [nodeRoot]">
        [<li class="menu-top__item -has-drop-down [node]" data-lvl="1">
            <a class="menu-top__item-name" href="#">Каталог</a> --> title
            <div class="menu-top__drop-down [nodeDropdown]">
                (<ul class="menu-top__list [nodeList]">   --> show
                    [<li class="menu-top__item -has-drop-down [node]" data-lvl="2">
                        <a class="menu-top__item-name" href="#">Теплоизоляция ППУ</a>
                        <div class="menu-top__drop-down [nodeDropdown]">
                           <ul class="menu-top__list [nodeList]">
                                <li class="menu-top__item">
                                    <a class="menu-top__item-name" href="#">Трубы ППУ в изоляции</a>
                                </li>
                            </ul>
                        </div>
                    </li>]
                </ul>)
            </div>
        </li>]
    </ul>
</div>

 */


function SmartMenu(options){

    // состояния модуля
    var states ={
        isOpened: false,   // открыт или закрыт на мобильном
        isMobile: false,   // активна мобильная версия или нет
        hasExtra: false
    };

    // Дерево меню, включает в себя только узлы, листья игнорируются
    var tree = [];

    // Текущий узел
    var currNode = {};

    // Список текстов, используемых в модуле
    var text = {
        rootTitle: 'Меню'
    };

    // Список селекторов, используемых в модуле
    var selectors = {
        container: '#js-smart-menu',
        node: '.-has-drop-down',
        nodeRoot: '#js-smart-menu > .menu-top__list',
        nodeLink: '.menu-top__item-name',
        nodeItem: '.menu-top__item',
        nodeDropdown: '.menu-top__drop-down',
        nodeList: '.menu-top__list',
        btnToggle: '.menu-top__switcher-btn',
        btnTitle: '.menu-top__title-btn',

        desktopContainer: '.menu-top__list',
        desktopItems: '.js-smart-menu > .menu-top__list > .menu-top__item',
    };

    // Список элементов для быстрого обращения
    // - сформируется при инициализации / создание объекта класса
    var elements = {};


    // переопределяем переменные если надо ============================================================================/

    // переопределяем свойства, если это необходимо
    function setOptions(){
        text = $.extend({}, selectors, options.text);
        selectors = $.extend({}, selectors, options.selectors);
    }

    // кэшируем элементы для быстрого доступа
    function addElements(){
        elements =  {
            container: $(selectors.container),
            nodeRoot: $(selectors.nodeRoot),
            nodeLinks: $(selectors.node + ' > ' + selectors.nodeLink),
            btnToggle: $(selectors.btnToggle),
            btnTitle: $(selectors.btnTitle),
            desktopContainer: $(selectors.desktopContainer),
            desktopItems: $(selectors.desktopItems)
        };
    }


    // работа с деревом ===============================================================================================/

    // Получения узла по ID
    function getNodeById(id){
        var result = null;
        //ищем элемент с заданным id
        tree.forEach(function(item){
            if( item.id == id ){
                result = item;
                return false;
            }
        });
        // если элемента с таким id нет, то возвращаем null
        return result;
    }

    // Получения узла родителя
    function getNodeParent(node){
        return getNodeById(node.parentId);
    }

    // Получения корня
    function getNodeRoot(){
        return getNodeById(0);
    }

    // Построение дерева и запись его в массив
    function buildTree(){
        var _id = 0;

        // задаём корень
        tree.push({ id: _id, name: text.rootTitle, elementLink: $(selectors.nodeRoot), parentId: null });

        // рекурсивно строим остальное дерево
        function build(parentNode){
            var parent = $(parentNode.elementLink);
            var el = parent.find(selectors.node)
                .not( parent.find(selectors.node + ' ' + selectors.node));
            el.each(function ( ) {
                _id++;
                var currNode = {
                    id: _id,
                    name: $(this).children(selectors.nodeLink).text(),
                    elementLink: $(this),
                    parentId: parentNode.id
                };
                tree.push(currNode);
                $(this).children(selectors.nodeLink).attr('data-target-node-id', _id);
                setTimeout(build( currNode ) , 10);
            })
        }
        build( getNodeRoot() );

        // задаём корень текущим узлом
        currNode = getNodeRoot();

    }

    // Показать узел с заданым ID
    function showNode(nodeId){
        currNode = getNodeById(nodeId);
        changeMenuTitle(currNode.name);
        currNode.elementLink.children(selectors.nodeDropdown).children(selectors.nodeList).css({
            'transform' : 'translateX(0)'
        });
        return false;
    }

    // Скрыть текущий узел, текущий становится узел на один уровень выше
    function hideNode(){
        currNode.elementLink.children(selectors.nodeDropdown).children(selectors.nodeList).css({
            'transform' : 'translateX(100%)'
        });
        currNode = getNodeParent(currNode);
        changeMenuTitle(currNode.name);
        return false;
    }

    // Скрывает все узлы, кроме корневого
    function hideAllNode(){
        tree.forEach(function(item){
            if( item.id != 0 ){
                item.elementLink.children(selectors.nodeDropdown).children(selectors.nodeList).css({
                    'transform' : 'translateX(100%)'
                });
            }
        });
        // задаём корень текущим узлом
        currNode = getNodeRoot();
    }


    // показать/скрыть меню на мобильниках ============================================================================/
    // - у контейнера появляется/убирается класс .is-opened

    function toggleMenu(){
        var body = $('body');
        if(!states.isOpened){
            // открываем менюшку
            elements.container.addClass('is-opened');
            // убираем скрол
            body.css('overflow', 'hidden');
            body.css('position', 'fixed');
            // переключаем состояние
            states.isOpened = true;
            // включаем обработчики
            addHandlerMobileNav();

            changeMenuTitle(currNode.name);

        } else {
            // закрываем менюшку
            elements.container.removeClass('is-opened');
            // возвращаем скрол
            body.css('overflow', 'visible');
            body.css('position', 'static');
            // переключаем состояние
            states.isOpened = false;
            // скрываем все раскрытые узлы, кроме корневого
            hideAllNode();
            // отключаем обработчики
            removeHandlerMobileNav();
        }
    }


    // разное =========================================================================================================/

    // Вывод название для узла
    function changeMenuTitle(title) {
        elements.btnTitle.text(title);
    }

    // Desktop ========================================================================================================/
    function setScreenIsMobile(_isMobile) {
        if( typeof _isMobile === 'boolean'){
            states.isMobile = _isMobile;
        } else {
            console.warn('setScreenIsMobile(_isMobile) _isMobile не является boolean');
        }
    }
    
    function createExtraBar() {
        var extrabarContent = '';
        for(var i = 0; i < elements.desktopItems.length; i++){
            extrabarContent = extrabarContent + elements.desktopItems.eq(i).get(0).outerHTML;

        }

        elements.nodeRoot.append(
            '<li class="menu-top__item -extraBar -has-drop-down -drop-down-inverse">' +
                '<button class="menu-top__item-name">extra</button>' +
                '<div class="menu-top__drop-down">' +
                    '<ul class="menu-top__list">' +
                         extrabarContent +
                    '</ul>' +
                '</div>' +
            '</li>'
        );
        elements.nodeRoot.find('.-extraBar .menu-top__drop-down .menu-top__drop-down').remove();
        elements.nodeRoot.find('.-extraBar').hide();

    }

    function removeExtraBar() {
        elements.nodeRoot.find('.-extraBar').remove();
    }
    
    function hideItem() {
        var dubler = elements.nodeRoot.find('.-extraBar .menu-top__item');

        dubler.removeClass('-hidden');
        elements.desktopItems.removeClass('-hidden');

        var width = elements.desktopContainer.width();
        var sumWidth = 0;
        states.hasExtra = false;
        for(var i = 0; i < elements.desktopItems.length; i++){
            var elWidth = elements.desktopItems.eq(i).width();
            if(sumWidth + elWidth < width){
                sumWidth = sumWidth + elWidth;
                dubler.eq(i).addClass('-hidden');
                console.log(dubler.eq(i));
            } else {
                elements.desktopItems.eq(i).addClass('-hidden');
                states.hasExtra = true;
            }
        }
        id
    }


    // Обработка событий ==============================================================================================/

    // клик по гамбургеру - вешается при инициализации
    function addHandlerMobileToggle(){
        elements.btnToggle.on('click', function () {
            toggleMenu();
            return false;
        });
    }

    // Включаем обработчики навигации в мобильном виде
    function addHandlerMobileNav(){

        // клик по ссылки в меню
        elements.nodeLinks.on('click', function () {
            showNode( $(this).attr('data-target-node-id') );
            return false;
        });

        // клик по кнопке/названию узала
        elements.btnTitle.on('click', function () {
            hideNode();
            return false;
        });
    }

    // отключаем обработчики навигации в мобильном виде
    function removeHandlerMobileNav(){
        elements.nodeLinks.off();
        elements.btnTitle.off();
    }

    // переключаем события для разных размеров экрана
    function changeScreenType() {
        if(states.isMobile){
            // переход на мобильный
            removeExtraBar();
        } else {
            // переход на десктоп
            createExtraBar();
            hideItem();
        }
    }

    // initialize =====================================================================================================/
    setOptions();  // переопределяем свойства, если это необходимо
    addElements();   // кэшируем элементы для быстрого доступа
    addHandlerMobileToggle();   // - вешается при инициализации обработку клика на гамбургер
    buildTree(); // Построение дерева и запись его в массив

    // changeScreenType(); // переключаем события для разных размеров экрана


    // public =========================================================================================================/
    return {
        // устанавливаем тип экрана
        setScreenIsMobile: function(_isMobile){
            setScreenIsMobile(_isMobile);
            changeScreenType();
        },
        // переход к функционалу мобильной или десктопной версии
        changeScreenType: function(){
            changeScreenType();
        },
        // Вывод данных для теста
        debug: function(){
            // console.log(tree);
            console.log(states.isMobile);

        }
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


var smartMenu = new SmartMenu({
    text: {
        rootTitle: 'Меню'
    },
    selectors: {
        container: '.js-smart-menu',
        node: '.-has-drop-down',
        nodeRoot: '.js-smart-menu > .menu-top__list',
        nodeItem: '.menu-top__item',
        nodeLink: '.menu-top__item-name',
        nodeDropdown: '.menu-top__drop-down',
        nodeList: '.menu-top__list',
        btnToggle: '.menu-top__switcher-btn',
        btnTitle: '.menu-top__title-btn',

        desktopContainer: '.menu-top__list',
        desktopItems: '.js-smart-menu > .menu-top__list > .menu-top__item',
    }
});

mediaEventListener.addQueryAction('mobile', function(){
    smartMenu.setScreenIsMobile(true);
});
mediaEventListener.addQueryAction('desktop', function(){
    smartMenu.setScreenIsMobile(false);
});
mediaEventListener.addQueryAction('resize', function(){
    // smartMenu.debug();
});
// menuTop.init();
// SmartMenu.debug();


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