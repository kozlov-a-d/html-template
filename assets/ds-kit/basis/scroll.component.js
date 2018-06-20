/**
 * Компонент для работы со скролом
 * @method {{ init, current, direction, enable, disable}}
 */
var scrollComponent = (function(){

    var self = {
        elsTransform: null,
        isTransform: true,
        current: 0,
        previous: 0,
        backup: 0
    };

    // PRIVATE =========================================================================================================

    var addTransformElements = function(selector){
        self.elsTransform = document.querySelectorAll(selector);
    };

    var scrollCheck = function () {
        self.previous = self.current;
        self.current = document.documentElement.scrollTop || window.pageYOffset || window.scrollY;
    };

    /* scroll to */
    var scrollMoveTo = function (position) {
        window.scrollTo( 0, position );
    };

    /* save scroll position */
    var scrollSave = function () {
        self.backup = document.documentElement.scrollTop || window.pageYOffset || window.scrollY;
    };

    /* scroll enable */
    var scrollEnable = function ( ) {
        if ( self.isTransform = true ) {
            self.elsTransform.forEach(function(item){
                item.style.transform = 'none'; 
            });
        }
        document.body.style.overflowY = '';
        document.body.style.position = '';
    };

    /* scroll disable */
    var scrollDisable = function ( useTransform ) {
        ( useTransform === false ) ? self.isTransform = false : self.isTransform = true ; 
        if ( self.isTransform ) {
            self.elsTransform.forEach(function(item){
                item.style.transform = 'translateY(' + -self.backup + 'px)';
            });
        }
        document.body.style.overflowY = 'hidden';
        document.body.style.position = 'fixed';
    };

    // INIT ============================================================================================================

    scrollCheck();
    window.addEventListener('scroll', function() {
        scrollCheck();
    });


    // PUBLIC ==========================================================================================================

    return Object.freeze({
        /**
         * Можно указать селекторы элементы, которые нужно сдвигать трансформом
         * @method
         * @param {string} selector селектор
         */
        init: function(selector){
            if( typeof selector !== 'undefined') addTransformElements(selector);
        },
        /**
         * Задаём или получаем значение прокрутки
         * @param {number} [value] новое значение
         * @returns {number} текущее значение
         */
        current: function(value){
            if(typeof value !== "undefined"){
                scrollMoveTo(value);
                scrollCheck();
            }
            else {
                scrollCheck();
                return self.current;
            }
        },
        /**
         * Узнаём направление скрола
         * @returns {*} 'down'|'up'
         */
        direction: function(){
            return ( self.current >= self.previous ) ? 'down' : 'up';
        },
        /**
         * Включаем скрол
         */
        enable: function(){
            scrollEnable();
            scrollMoveTo(self.backup);
        },
        /**
         * Отключаем скролл
         * @param {boolean} useTransform использовать ли трансформ
         */
        disable: function(useTransform){
            scrollSave();
            scrollDisable(useTransform);
        }
    });
}());
