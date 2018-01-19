var scrollComponent = (function(){

    var scrollPosition = {
        current : 0,
        previous : 0,
        backup : 0
    };

    // PRIVATE =========================================================================================================

    scrollCheck = function () {
        scrollPosition.previous = scrollPosition.current;
        scrollPosition.current = document.documentElement.scrollTop || window.pageYOffset || window.scrollY;
    };

    /* scroll to */
    scrollMoveTo = function (position) {
        window.scrollTo( 0, position );
    };

    /* save scroll position */
    scrollSave = function () {
        scrollPosition.backup = document.documentElement.scrollTop || window.pageYOffset || window.scrollY;
    };

    /* scroll enable */
    scrollEnable = function () {
        document.body.style.overflowY = '';
        document.body.style.position = '';
    };

    /* scroll disable */
    scrollDisable = function () {
        document.body.style.overflowY = 'hidden';
        document.body.style.position = 'fixed';
    };

    /* return down || up */
    scrollDirection = function () {
        return ( scrollPosition.current >= scrollPosition.previous ) ? 'down' : 'up';
    };


    // INIT ============================================================================================================

    scrollCheck();
    window.addEventListener('scroll', function() {
        scrollCheck();
    });


    // PUBLIC ==========================================================================================================

    return {
        current : function(value){
            if(typeof value !== "undefined"){
                scrollMoveTo(value);
                scrollCheck();
            }
            else {
                scrollCheck();
                return scrollPosition.current;
            }
        },
        direction : function(){ return scrollDirection() },
        enable : function(){
            scrollEnable();
            scrollMoveTo(scrollPosition.backup);
        },
        disable : function(){
            scrollSave();
            scrollDisable();
        }
    }
}());