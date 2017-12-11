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