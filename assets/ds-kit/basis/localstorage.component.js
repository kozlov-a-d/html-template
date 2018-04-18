/**
 * Компонент для работы с localStorage
 *
 * @type {{state, remove, exist}}
 */
var localStorageComponent = (function(){

    // PRIVATE =========================================================================================================

    var setItem = function ( name, value ) {
        if ( typeof value === 'object' ) {
            localStorage.setItem(name, JSON.stringify(value));
        } else {
            localStorage.setItem(name, value);
        }
    };

    var getItem = function (name) {
        var value = localStorage.getItem(name);
        var result;
        try {
            result = JSON.parse(value);
        } catch (e) {
            return value;
        }
        return result;
    };

    var removeItem = function (name) {
        localStorage.removeItem(name);
    };

    var existItem = function (name) {
        var value = getItem(name);
        var result = false;
        if( value !== null && typeof value !== 'undefined'){
            result = true;
        }
        return result;
    };

    // PUBLIC ==========================================================================================================

    return Object.freeze({
        /**
         * Добавляем или получаем значение из LocalStorage
         * @param {string} name название объекта
         * @param {string|number|json|array|*} value новое значение, если пустое - фукнция возвращает текущее
         */
        state: function(name, value){
            if(typeof value !== "undefined"){
                setItem(name, value);
            }
            else {
                return getItem(name);
            }
        },
        /**
         * Удаляет значение из LocalStorage с заданным именем
         * @param {string} name
         */
        remove: function(name){
            removeItem(name);
        },
        /**
         * Проверка существования значения в LocalStorage с заданным именем
         * @param {string} name
         */
        exist: function(name){
            return existItem(name);
        }
    });
}());
