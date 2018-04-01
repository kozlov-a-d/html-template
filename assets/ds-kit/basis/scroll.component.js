/**
 * Компонент для работы со скролом
 * @type {{current, direction, enable, disable}}
 */
var scrollComponent = (function(){

    var scrollPosition = {
        current : 0,
        previous : 0,
        backup : 0
    };

    // PRIVATE =========================================================================================================

    var scrollCheck = function () {
        scrollPosition.previous = scrollPosition.current;
        scrollPosition.current = document.documentElement.scrollTop || window.pageYOffset || window.scrollY;
    };

    /* scroll to */
    var scrollMoveTo = function (position) {
        window.scrollTo( 0, position );
    };

    /* save scroll position */
    var scrollSave = function () {
        scrollPosition.backup = document.documentElement.scrollTop || window.pageYOffset || window.scrollY;
    };

    /* scroll enable */
    var scrollEnable = function () {
        document.body.style.overflowY = '';
        document.body.style.position = '';
    };

    /* scroll disable */
    var scrollDisable = function () {
        document.body.style.overflowY = 'hidden';
        document.body.style.position = 'fixed';
    };

    /* return down || up */
    var scrollDirection = function () {
        return ( scrollPosition.current >= scrollPosition.previous ) ? 'down' : 'up';
    };


    // INIT ============================================================================================================

    scrollCheck();
    window.addEventListener('scroll', function() {
        scrollCheck();
    });


    // PUBLIC ==========================================================================================================

    return Object.freeze({
        /**
         * Добавляем или получаем значение прокрутки
         * @param value {number}
         * @returns {number}
         */
        current: function(value){
            if(typeof value !== "undefined"){
                scrollMoveTo(value);
                scrollCheck();
            }
            else {
                scrollCheck();
                return scrollPosition.current;
            }
        },
        /**
         * Узнаём направление скрола
         * @returns {*} 'down'|'up'
         */
        direction: function(){
            return scrollDirection()
        },
        /**
         * Включаем скрол
         */
        enable: function(){
            scrollEnable();
            scrollMoveTo(scrollPosition.backup);
        },
        /**
         * Отключаем скролл
         */
        disable: function(){
            scrollSave();
            scrollDisable();
        }
    });
}());
