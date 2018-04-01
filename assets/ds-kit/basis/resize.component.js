/**
 * Компонент для отслеживания размеров при ресайзе и добавления функций по ресайзу
 * @type {{setFreezeTime, getScreenWidth, addMediaQuery, resizeForce, debug}}
 */
var resizeComponent = (function(){

    var self = {
        screenWidth: window.innerWidth,
        queries: [],
        freezeTime: 100
    };

    /**
     * Заготовка для новых запросов, хранит настройки по умочанию, объединяется с новыми запросами
     * @type {{min: number, max: number, isEnter: boolean, onEnter: null, onEach: null}}
     */
    var defaultQuery = { min: 0, max: 10000, isEnter: false, onEnter: null,  onEach: null };

    // PRIVATE =========================================================================================================

    // установка минимального интервала между ресайзами
    var setFreezeTime = function (time) {
        if ( typeof time !== 'number' && typeof time !== 'undefined'){
            console.warn('resizeComponent: freezeTime type must be a number, now a ' +  typeof time);
        } else {
            self.freezeTime = time;
        }
    };

    // проверяем текущий размер экрана
    var checkScreen = function () {
        screenWidth = window.innerWidth;
    };

    // выполняем медиа-запрос
    var triggerQuery = function(query){
        // проверяем разрешение
        if( query.min <= screenWidth && screenWidth <= query.max ){
            // onEnter
            if( typeof query.onEnter === 'function' && !query.isEnter){
                query.onEnter();
                query.isEnter = true;
            }
            // onEach
            if( typeof query.onEach === 'function'){
                query.onEach();
            }
        } else {
            query.isEnter = false;
        }
    };

    // проверяем корректность медиа-запроса
    var validateQuery = function (query) {
        var validQuery = query;
        if ( typeof validQuery.min !== 'number' && typeof validQuery.min !== 'undefined'){
            console.warn('resizeComponent: query.min type must be a number, now a ' + typeof validQuery.min);
            validQuery.min = defaultQuery.min;
        }
        if ( typeof validQuery.max !== 'number' && typeof validQuery.max !== 'undefined'){
            console.warn('resizeComponent: query.max type must be a number, now a ' + typeof validQuery.min);
            validQuery.max = defaultQuery.max;
        }
        if ( typeof validQuery.onEnter !== 'function' && typeof validQuery.onEnter !== 'undefined' ){
            console.warn('resizeComponent: query.onEnter type must be a function, now a ' + typeof validQuery.onEnter);
            validQuery.onEnter = null;
        }
        if ( typeof validQuery.onEach !== 'function' && typeof validQuery.onEach !== 'undefined' ){
            console.warn('resizeComponent: query.onEach type must be a function, now a ' + typeof validQuery.onEach);
            validQuery.onEach = null;
        }
        return validQuery;
    };

    // добавляем новый медиа-запрос
    var addQuery = function(query){
        var newQuery = Object.assign(defaultQuery, validateQuery(query));
        self.queries.push(newQuery);
        triggerQuery(newQuery);
    };

    // перебираем все медиа-запросы при ресайзе, используется декоратор throttle
    var onResize = throttle(function(){
        // debounce
        self.queries.forEach(function (item) {
            triggerQuery(item);
        })
    }, self.freezeTime );


    // INIT ============================================================================================================

    // получаем текущий размер
    checkScreen();
    // навешиваем обработчик
    window.addEventListener('resize', function() {
        checkScreen();
        onResize();
    });


    // PUBLIC ==========================================================================================================
    return  Object.freeze({
        /**
         * Установка минимального интервала между ресайзами
         * @param time {number}
         */
        setFreezeTime: function(time){
            setFreezeTime(time);
        },
        /**
         * Возвращает текущий размер экрана
         * @returns {number}
         */
        getScreenWidth: function(){
            checkScreen();
            return screenWidth;
        },
        /**
         * Добавляет новый медиа-запрос
         * @param {{min: number, max: number, onEnter: function, onEach: function}} query
         */
        addMediaQuery: function(query){
            addQuery(query);
        },
        /**
         * Принудительно вызывает срабатывание актуальных колбэков
         */
        resizeForce: function () {
            onResize();
        },
        /**
         * Выводит список текущих медаи-запросов
         */
        debug: function () {
            console.log(self.queries);
        }
    })

}());
