/**
 * Компонент для вставки видео с youtube
 * @type {{init}}
 */
var embedVideoModule = (function(){

    var init = function (selector) {
        var videos = document.querySelectorAll(selector);

        videos.forEach(function(element){

            if (element.dataset.type === 'youtube') {

                element.style.backgroundImage = 'url(http://i.ytimg.com/vi/' + element.dataset.id + '/sddefault.jpg)';

                var play = document.createElement("div");
                play.setAttribute("class", "play");
                element.appendChild(play);

                element.addEventListener('click', function(e){

                    var iframe = document.createElement("iframe");
                    var iframe_url = "https://www.youtube.com/embed/" + this.dataset.id + "?autoplay=1&autohide=1";
                    if (this.getAttribute("data-params")) iframe_url += '&' + this.getAttribute("data-params");
                    iframe.setAttribute("src", iframe_url);
                    iframe.setAttribute("frameborder", '0');

                    this.appendChild(iframe, this);

                    e.target.removeEventListener('click', function(){});
                });
            }
        });
    };

    // PUBLIC ==========================================================================================================

    return Object.freeze({
        init : init
    });

}());