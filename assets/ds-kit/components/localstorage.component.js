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
        state: function(name, value){
            if(typeof value !== "undefined"){
                setItem(name, value);
            }
            else {
                return getItem(name);
            }
        },
        remove: function(name){
            removeItem(name);
        },
        exist: function(name){
            return existItem(name);
        }
    });
}());

// добавляем
// localStorageComponent.state('test', 'value');
// localStorageComponent.state('test json', {prop: 1, text: "text prop", date: 1521793462353});

// получаем
// localStorageComponent.state('test');
// localStorageComponent.state('test json');