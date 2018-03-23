var localStorageComponent = (function(){

    // PRIVATE =========================================================================================================

    setItem = function ( name, value ) {
        if ( typeof value === 'object' ) {
            localStorage.setItem(name, JSON.stringify(value));
        } else {
            localStorage.setItem(name, value);
        }
    };

    getItem = function (name) {
        var value = localStorage.getItem(name);
        var result;
        try {
            result = JSON.parse(value);
        } catch (e) {
            return value;
        }
        return result;
    };

    // PUBLIC ==========================================================================================================

    return {
        state: function(name, value){
            if(typeof value !== "undefined"){
                setItem(name, value);
            }
            else {
                return getItem(name);
            }
        }
    }
}());

// добавляем
localStorageComponent.state('test', 'value');
localStorageComponent.state('test json', {prop: 1, text: "text prop", date: 1521793462353});

// получаем
localStorageComponent.state('test');
localStorageComponent.state('test json');