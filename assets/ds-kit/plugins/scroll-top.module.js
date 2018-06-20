var scrollTopModule = (function () {

    var self = {
        btn: null,
        speed: 500,
        offsetTop: 105
    };

    var bindButton = function (selector, callback) {
        self.btn = document.querySelector(selector);
        if(self.btn){
            callback();
        }
        
    };

    var checkScroll = function () {
        if ( scrollComponent.current() > self.offsetTop ){
            self.btn.style.opacity = '1';
            self.btn.style.pointerEvents = 'auto';
        } else {
            self.btn.style.opacity = '0';
            self.btn.style.pointerEvents = 'none';
        }
    };
  
    var addHandlerScroll = function () {
        window.addEventListener('scroll', function() {
            checkScroll();
        });
    };

    var addHandlerClick = function () {
        self.btn.addEventListener('click', function() {
            $("body:not(:animated)").animate({ scrollTop: 0 }, self.speed );
            $("html").animate({ scrollTop: 0 }, self.speed);
            return false;
        });
    };

    return Object.freeze({
        init: function (selector, options) {
            bindButton(selector, function(){
                if (options.speed) { self.speed = options.speed }
                if (options.offsetTop) { self.offsetTop = options.offsetTop }
                checkScroll();
                addHandlerScroll();
                addHandlerClick();
            });
        }
    });

}());