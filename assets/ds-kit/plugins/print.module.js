var printModule = (function () {

    var addHandlerClick = function (btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault;
            window.print();
            return false;
        });
    };

    return Object.freeze({
        init: function(selector){
            var btn = document.querySelector(selector);
            if(btn){ addHandlerClick(btn); }
        }
    });

}());