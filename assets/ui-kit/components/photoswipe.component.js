var photoswipeComponent = (function( container, item ){

    var photoswipeProps = {
        isExist: false,
        html: null,
        selector: {
            container: '',
            item: ''
        }
    };

    // PRIVATE =========================================================================================================

    /* add HTML  */
    addHTML = function () {
        var html = document.createElement('div');
        html.classList.add('pswp');
        html.innerHTML = '' +
            '<div class="pswp__bg"></div>' +
                '<div class="pswp__scroll-wrap">' +
                    '<div class="pswp__container">' +
                        '<div class="pswp__item"></div>' +
                        '<div class="pswp__item"></div>' +
                        '<div class="pswp__item"></div>' +
                    '</div>' +
                    '<div class="pswp__ui pswp__ui--hidden">' +
                        '<div class="pswp__top-bar">' +
                            '<div class="pswp__counter"></div>' +
                            '<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>' +
                            '<button class="pswp__button pswp__button--share" title="Share"></button>' +
                            '<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>' +
                            '<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>' +
                            '<div class="pswp__preloader">' +
                                '<div class="pswp__preloader__icn">' +
                                    '<div class="pswp__preloader__cut">' +
                                        '<div class="pswp__preloader__donut"></div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">' +
                        '<div class="pswp__share-tooltip"></div>' +
                    '</div>' +
                    '<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>' +
                    '<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>' +
                    '<div class="pswp__caption"><div class="pswp__caption__center"></div></div>' +
                '</div>' +
            '</div>';
        document.querySelector('body').appendChild(html);

        return html;
    };

    /* add handler */
    addHandler = function ( container, el, html ) {
        var containers = document.querySelectorAll(container);
        containers.forEach(function(item){
            var items = item.querySelectorAll(el);
            items.forEach(function(item){
                item.addEventListener('click', function (e) {

                    e.preventDefault();

                    var self = ( e.target.tagName === 'a') ? e.target : e.target.closest('a');
                    var elements = self.closest(container).querySelectorAll(el);
                    var items = []; //массив слайдов

                    console.log(self);
                    for (var i = 0; i < elements.length; i++) {
                        var size = elements[i].getAttribute('data-size').split('x'); //размер текущего изображения
                        items[i] =
                            {
                                src: elements[i].getAttribute('href'),   // адрес картинки
                                w: size[0],
                                h: size[1]
                            }
                    }

                    var index = 0;
                    for (var y = 0; y < elements.length; y++) {
                        if( elements[y] === self ){ index = y; }
                    }

                    var options = {
                        shareEl: false,
                        index: index
                    };

                    var gallery = new PhotoSwipe(html, PhotoSwipeUI_Default, items, options);
                    gallery.init();

                    return false;
                })
            });
        });
    };

    // INIT ============================================================================================================


    if(typeof PhotoSwipe === 'function') {
        photoswipeProps.isExist = true;
    } else {
        console.warn('photoswipeComponent: PhotoSwipe not found')
    }

    // PUBLIC ==========================================================================================================

    return {
        init : function( container, item){
            if (photoswipeProps.isExist){
                addHandler( container, item, addHTML() );
            }
        }
    }
}());
