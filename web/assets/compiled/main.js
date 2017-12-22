var scrollComponent = (function(){
    var scrollPosition = 0;

    scrollEnable = function openModal() {
        document.body.style.overflowY = '';
        document.body.style.position = '';
        window.scrollTo( 0, scrollPosition );
    };

    scrollDisable = function () {
        scrollPosition = document.documentElement.scrollTop || window.pageYOffset || window.scrollY;
        document.body.style.overflowY = 'hidden';
        document.body.style.position = 'fixed';
    };

    return {
        enable : function(){ scrollEnable() },
        disable : function(){ scrollDisable() }
    }
}());
var app = {
    helper : {
        scroll : scrollComponent
    },
    ui : {
        components : {

        }
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





(function( $ ){

    var defaults = {
        // дефолтные опции
        minResolution: 1000
    };
    var states ={
        hasExtra: false
    };

    var methods = {

        init : function( options ) {

            options = $.extend({}, defaults, options);

            this.each(function() {

                var container = $(this);
                var menuRoot = $(this).find('ul').not('ul ul');
                var menuItems = menuRoot.find('li').not('li li');
                var containerWidth = menuRoot.width();
                // тут код
                console.log('menuSmart', menuItems);

                methods.addExtraBar(menuRoot, menuItems);

                containerWidth = menuRoot.width();
                methods.hideItem(menuRoot, menuItems, containerWidth)

                window.addEventListener("resize", function() {
                    containerWidth = menuRoot.width();
                    if(containerWidth > options.minResolution){
                        methods.hideItem(menuRoot, menuItems, containerWidth);
                    }
                });

            });
        },

        resize : function () {

        },

        addExtraBar: function (menuRoot, menuItems) {
            var extrabarContent = '';
            for(var i = 0; i < menuItems.length; i++){
                extrabarContent = extrabarContent + menuItems.eq(i).get(0).outerHTML;
            }

            menuRoot.append(
                '<li class="menu-top__item -extraBar -has-drop-down -drop-down-inverse">' +
                    '<button class="menu-top__item-name">...</button>' +
                    '<div class="menu-top__drop-down">' +
                        '<ul class="menu-top__list">' +
                            extrabarContent +
                        '</ul>' +
                    '</div>' +
                '</li>'
            );
            menuRoot.find('.-extraBar .menu-top__drop-down .menu-top__drop-down').remove();
        },

        // удаляет дополнительную выпадашку
       removeExtraBar : function (menuRoot) {
           menuRoot.find('.-extraBar').remove();
       },


        // проверяет элементы, если элементу не хватает места, то скрывает его
        hideItem : function (menuRoot, menuItems, containerWidth) {
            // подготавливаем выпадашку дублёра
            var dubler = menuRoot.find('.-extraBar');
            var dublerList = dubler.find('.menu-top__item');
            console.log(dublerList);
            dubler.removeClass('-hidden');
            menuItems.removeClass('-hidden');

            var width = containerWidth;
            var sumWidth = 0;
            states.hasExtra = false;
            for(var i = 0; i < menuItems.length; i++){
                var elWidth = menuItems.eq(i).width();

                if(sumWidth + elWidth < width){
                    // если следующий элемент не влазит
                    sumWidth = sumWidth + elWidth;
                    dublerList.eq(i).addClass('-hidden');


                } else {
                    // если элемент влазит
                    // проверяем влезет ли гамбургер
                    if(sumWidth + elWidth < width){

                    }

                    menuItems.eq(i).addClass('-hidden');
                    states.hasExtra = true;
                }
            }

        }

    };

    $.fn.menuSmart = function(method) {

        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод ' +  method + ' не существует в jQuery.menuSmart' );
        }

    };

})( jQuery );
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
                app.helper.scroll.enable();
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
                            '<button class="menu-mobile__title-btn" :data-node="node.id" v-on:click.prevent="activeParentNode">' +
                                '<i class="menu-mobile__icon-arrow-right" v-if="node.id"></i>' +
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
//
// Example
// <nav class="js-menu-mobile">
//
//     <button data-menu-mobile--switcher-btn>menu</button>
//
//     <ul data-menu-mobile--root>
//         <li data-menu-mobile--has-drop-down><a data-menu-mobile--item-name>Пунк 1</a>
//             <div>
//                 <ul>
//                     <li><a data-menu-mobile--item-name>Пунк 1.1</a></li>
//                     <li><a data-menu-mobile--item-name>Пунк 1.2</a></li>
//                     <li><a data-menu-mobile--item-name>Пунк 1.3</a></li>
//                     <li><a data-menu-mobile--item-name>Пунк 1.4</a></li>
//                     <li><a data-menu-mobile--item-name>Пунк 1.5</a></li>
//                 </ul>
//             </div>
//         </li>
//         <li><a data-menu-mobile--item-name>Пунк 2</a></li>
//         <li><a data-menu-mobile--item-name>Пунк 3</a></li>
//         <li><a data-menu-mobile--item-name>Пунк 4</a></li>
//         <li><a data-menu-mobile--item-name>Пунк 5</a></li>
//         <li><a data-menu-mobile--item-name>Пунк 6</a></li>
//     </ul>
//
// </nav>


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
    function setOptions(container){
        // text = $.extend({}, selectors, options.text);
        // selectors = $.extend({}, selectors, options.selectors);
        text.rootTitle = $(container).find(selectors.btnToggle).text();
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
            app.helper.scroll.disable();
        });
    }

    // initialize =====================================================================================================/
    $(selectors.container).each(function () {
        setOptions($(this));  // переопределяем свойства, если это необходимо
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
$('.js-menu-smart').menuSmart();
console.timeEnd('SmartMenu');


console.time('sliderHeader');
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


console.time('testimonialsWidget');
/// template-block/base-1/homepage/testimonials-widget/testimonials-widget.js
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