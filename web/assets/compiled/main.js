var app = {
    ui : {
        components : {

        }
    }
};

app.ui.components.modal = {
    openModal : function () {
        document.body.style.overflowY = 'hidden';
    },
    closeModal : function () {
        document.body.style.overflowY = '';
    }
};

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

    // Desktop ========================================================================================================/
    function setScreenIsMobile(_isMobile) {
        if( typeof _isMobile === 'boolean'){
            states.isMobile = _isMobile;
        } else {
            console.warn('setScreenIsMobile(_isMobile) _isMobile не является boolean');
        }
    }

    // создаёт дополнительную выпадашку для непоместившихся элементов
    function createExtraBar() {
        var extrabarContent = '';
        for(var i = 0; i < elements.desktopItems.length; i++){
            extrabarContent = extrabarContent + elements.desktopItems.eq(i).get(0).outerHTML;
        }

        elements.nodeRoot.append(
            '<li class="menu-top__item -extraBar -has-drop-down -drop-down-inverse">' +
                '<button class="menu-top__item-name">...</button>' +
                '<div class="menu-top__drop-down">' +
                    '<ul class="menu-top__list">' +
                         extrabarContent +
                    '</ul>' +
                '</div>' +
            '</li>'
        );
        elements.nodeRoot.find('.-extraBar .menu-top__drop-down .menu-top__drop-down').remove();
        // elements.nodeRoot.find('.-extraBar').hide();

    }

    // удаляет дополнительную выпадашку
    function removeExtraBar() {
        elements.nodeRoot.find('.-extraBar').remove();
    }

    // проверяет элементы, если элементу не хватает места, то скрывает его
    function hideItem() {
        // подготавливаем выпадашку дублёра
        var dubler = elements.nodeRoot.find('.-extraBar');
        var dublerList = dubler.find('.menu-top__item');
        dubler.removeClass('-hidden');
        elements.desktopItems.removeClass('-hidden');

        // ,,,
        var width = elements.desktopContainer.width();
        var sumWidth = 0;
        states.hasExtra = false;
        for(var i = 0; i < elements.desktopItems.length; i++){
            var elWidth = elements.desktopItems.eq(i).width();
            if(sumWidth + elWidth < width){
                sumWidth = sumWidth + elWidth;
                dublerList.eq(i).addClass('-hidden');
                // console.log(i);
            } else {
                elements.desktopItems.eq(i).addClass('-hidden');
                states.hasExtra = true;
            }
        }

    }


    // Обработка событий ==============================================================================================/

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

function initMenuMobile(id, data) {

    var menuMobile = new Vue({
        el: '#menu-mobile-' + id,
        data: {
            el: '#menu-mobile-' + id,
            tree: data,
            activeNode: {
                id: data[0].id,
                name: data[0].name,
                parentId: data[0].parentId
            },
            show: false
        },
        template:
            '<transition name="menu-mobile-toggle" mode="out-in">' +
            '<div class="menu-mobile" id="menu-mobile-' + id + '" v-if="show">' +
                '<menu-mobile-header v-bind:node="activeNode"></menu-mobile-header>' +
                '<ul class="menu-mobile__list">' +
                    '<template  v-for="item in tree">' +
                        '<menu-mobile-item v-if="item.parentId === activeNode.id" v-bind:item="item" :key="item.id" ></menu-mobile-item>' +
                    '</template>' +
                '</ul>' +
            '</div>' +
            '</transition>',
        methods: {
            getNodeParam: function (input) {
                var result = {};
                result.id =  input.id;
                result.name =  input.name;
                result.parentId =  input.parentId;
                return result;
            },
            closeMenu: function () {
                // $( this.el).hide();
                this.activeNode = menuMobile.getNodeParam( this.tree[0] );
                app.ui.components.modal.closeModal();
                this.show = false;
            }
        },
        components: {
            'menu-mobile-header': {
                props: ['node'],
                template:
                    '<transition name="menu-mobile-header-toggle">' +
                    '<div class="menu-mobile__header">' +
                        '<div class="menu-mobile__title">' +
                            '<button class="menu-mobile__title-btn" v-on:click.prevent="activeParentNode">' +
                                '<i class="menu-mobile__icon-arrow-right"></i>' +
                                '{{ node.name }}' +
                            '</button>' +
                        '</div>' +
                        '<button class="menu-mobile__switcher-btn" v-on:click.prevent="closeMenu"><span></span></button>' +
                    '</div>' +
                    '</transition>',
                methods: {
                    closeMenu: function (event) {
                        menuMobile.closeMenu();
                    },
                    activeParentNode: function (event) {
                        if( this._props.node.parentId !== null ){
                            var parentId = this._props.node.parentId;
                            for(var i = 0; i < menuMobile.tree.length; i++){
                                if (menuMobile.tree[i].id === parentId) {
                                    menuMobile.activeNode = menuMobile.getNodeParam( menuMobile.tree[i] );
                                }
                            }
                        } else {
                            menuMobile.closeMenu();
                        }

                    }
                }
            },
            'menu-mobile-item': {
                props: ['item', 'activeNode'],
                template:
                    '<transition name="menu-mobile-item-show" mode="out-in">' +
                    '<li class="menu-mobile__item">' +
                        '<a class="menu-mobile__item-name" v-bind:href="item.href">' +
                            '{{ item.name }}' +
                            // иконка со стрелкой, для элементов без потомков
                            '<span v-if="!item.hasChild" class="menu-mobile__item-btn">' +
                                '<i class="menu-mobile__icon-arrow-left"></i>' +
                            '</span>' +
                        '</a>' +
                        // для элементов с подкатегориями добавляем кнопочку показывающую эти подразделы
                        '<button v-if="item.hasChild" class="menu-mobile__item-btn hasChild"  v-on:click.prevent="showChild">' +
                            '<i class="menu-mobile__icon-more"></i>' +
                        '</button>' +
                    '</li>' +
                    '</transition>',
                methods: {
                    showChild: function (event) {
                        menuMobile.activeNode = menuMobile.getNodeParam( this._props.item );
                    }
                }
            }
        }
    });

    return menuMobile;
}



// dependencies
// - bower_components/jquery/dist/jquery.js
// - bower_components/vue/dist/vue.js
// - web/assets/ui-kit/components/modal/modal-core.js
// - web/assets/ui-kit/components/menu-mobile/menu-mobile.vue.component.js

function MenuMobile(options){

    // Дерево меню, включает в себя только узлы, листья игнорируются


    var text = {
        rootTitle: 'Меню'
    };

    var selectors = {
        container: '.js-menu-mobile',
        nodeRoot: '[data-menu-mobile--root]',
        nodeLink: '[data-menu-mobile--item-name]',
        node: 'data-menu-mobile--has-drop-down',
        btnToggle: '[data-menu-mobile--switcher-btn]'
    };

    var id = Math.round( Math.random()*10000);


    // переопределяем переменные если надо ============================================================================/

    // переопределяем свойства, если это необходимо
    function setOptions(){
        // text = $.extend({}, selectors, options.text);
        // selectors = $.extend({}, selectors, options.selectors);
    }

    // работа с деревом ===============================================================================================/

    function buildMenu(nodeRoot){
        var tree = [];
        var _id = 0;
        // задаём корень
        tree.push({ id: _id, name: text.rootTitle, elementLink: nodeRoot, hasChild: true, parentId: null });
        // рекурсивно строим остальное дерево
        function build(parentNode){
            var parent = $(parentNode.elementLink);
            var el = parent.find('li').not( parent.find('li li'));
            el.each(function () {
                _id++;
                var currNode = {
                    id: _id,
                    name: $(this).children(selectors.nodeLink).text(),
                    href: $(this).children(selectors.nodeLink).attr('href'),
                    elementLink: $(this),
                    hasChild:  $(this).attr(selectors.node) != null,
                    parentId: parentNode.id
                };
                tree.push(currNode);
                if(currNode.hasChild){  build(currNode) }
            });
        }
        build( getNodeRoot(tree) );

        return tree;
    }

    function renderMenu(tree){
        // console.log(tree);
        $('body').append('' +
            '<menu-mobile class="menu-mobile" id="menu-mobile-' + id + '"></menu-mobile>'
        );
        var vueMenuMobile = initMenuMobile(id, tree);
        return vueMenuMobile;
    }

    // вспомогательные ================================================================================================/

    // Получения узла по ID
    function getNodeById(id, tree){
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

    // Получения корня
    function getNodeRoot(tree){
        return getNodeById(0, tree);
    }


    // Обработка событий ==============================================================================================/

    function addHandlerToggleBtn(container, vueMenuMobile){
        $(container).on('click', selectors.btnToggle, function () {
            vueMenuMobile.show = true;
            app.ui.components.modal.openModal();
        });
    }

    // initialize =====================================================================================================/
    $(selectors.container).each(function () {
        setOptions();  // переопределяем свойства, если это необходимо
        var tree = buildMenu($(this).find(selectors.nodeRoot));  // создаём модель меню
        var vueMenuMobile = renderMenu(tree);   // ренедерим меню, колбэком навешиваем обработчики
        addHandlerToggleBtn(this, vueMenuMobile);
    });

    // public =========================================================================================================/
    return {
        init: function () {
            
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
// js-spoiler-area - скрывает область под спойлер
//
// исходный код
// <div class="js-spoiler-area hidden-md"
// data-mobile-only="true"
// data-text-opened="Скрыть"
// data-text-closed="Показать полностью">
//  <!-- тут контент который нужно скрывать -->
// </div>

//  сегнерированый код
//  <div class="spoiler">
//      <div  class="spoiler js-spoiler-area"><!-- тут контент который нужно скрывать --></div>
//      <button class="spoiler__btn" ><span>Btn</span></button>
//  </div>

$('.js-spoiler-area').each(function () {

    var self = $(this);

    // кэшируем data-атрибуты, подставляя значения по умолчанию, если атрибуты не заданы
    var btnTextOpened = self.attr('data-text-opened') ? self.attr('data-text-opened') : 'Скрыть',
        btnTextClosed = self.attr('data-text-closed') ? self.attr('data-text-closed') : 'Смотреть полностью',
        btnClass = self.attr('data-btn-class') ? self.attr('data-btn-class') : '' ;

    // добавляем необходимый html
    self.addClass('spoiler__content');
    self.wrap('<div class="spoiler"></div>');
    self.parent().append('<button class="spoiler__btn btn ' + btnClass + '"><span>' + btnTextClosed + '</span></button>');

    // кэшируем элементы
    var container = self.parent(),
        content = self,
        btn = container.find('.spoiler__btn');


    // добавляем класс hidden-*/visible-* для кнопки если надо
    // класс добавляется, если у контента есть класс hidden-*
    var classList = content.attr('class').split(/\s+/),
        isResponse = false;
    $.each(classList, function(index, item) {
        if (item.substring(0,7) === 'hidden-') {
            btn.addClass('hidden visible-' + item.substring(7,9));
            isResponse = true;
        }
    });
    if(!isResponse){
        content.addClass('hidden');
    }

    // вешаем события
    btn.on('click', function(){
        content.slideToggle();
        btn.toggleClass('is-opened');
        if(btn.hasClass('is-opened')){
            btn.find('span').text(btnTextOpened);
        } else {
            btn.find('span').text(btnTextClosed);
        }
    });
});


$('.js-spoiler-items').each(function () {

    var self = $(this);

    // кэшируем data-атрибуты, подставляя значения по умолчанию, если атрибуты не заданы
    var btnTextOpened = self.attr('data-text-opened') ? self.attr('data-text-opened') : 'Скрыть',
        btnTextClosed = self.attr('data-text-closed') ? self.attr('data-text-closed') : 'Смотреть полностью',
        btnClass = self.attr('data-btn-class') ? self.attr('data-btn-class') : '' ;

    // добавляем необходимый html
    self.addClass('spoiler__content');
    self.wrap('<div class="spoiler"></div>');
    self.parent().append('<button class="spoiler__btn btn ' + btnClass + '"><span>' + btnTextClosed + '</span></button>');


});
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
console.log('main');
/*=========================================================================*/
// mediaEventListener инициализируем после всех добавлений,
// скрипты подвешеные позже не отработают при первой загрузке
mediaEventListener.init();
/*=========================================================================*/