console.time('extends-js');

var screenSize= {
    xxs: 320,     // iphone5 в портретной ориентации
    xs: 414,      // iphone plus в портретной ориентации
    sm: 568,      // 
    md: 820,      // планшеты в портретной ориентации / телефоны в альбомной
    lg: 1024,     // планшеты в альбомной ориентации
    xl: 1280     // ширина контента широкого сайта ( 1170 например )
};


// BASIS ===============================================================================================================

//=include ../ds-kit/basis/polyfills.js
//=include ../ds-kit/basis/decorators.util.js
//=include ../ds-kit/basis/localstorage.component.js
//=include ../ds-kit/basis/scroll.component.js
scrollComponent.init('.l-wrapper, .l-footer');
//=include ../ds-kit/basis/resize.component.js
resizeComponent.setFreezeTime(200);
//=include ../ds-kit/basis/load.component.js
/* example
    loadComponent.script('https://api-maps.yandex.ru/2.1/?lang=ru_RU', function(){
        console.log('success');
    });
*/


// PLUGINS =============================================================================================================
//=include ../ds-kit/plugins/photoswipe/photoswipe.wrapper.js
photoswipeWrapper.init('.js-photoswipe-gallery', 'a:not(.no-photoswipe)');

//=include ../ds-kit/plugins/menu-mobile/menu-mobile.vue.js
//=include ../ds-kit/plugins/menu-mobile/menu-mobile.jquery.js
$('.js-menu-mobile').menuMobile({
    text: {
        rootTitle: 'Menu'      
    }
}); // TODO: переделать без vue.js ?
 
//=include ../ds-kit/plugins/menu-smart/menu-smart.jquery.js
$('.js-menu-smart').menuSmart();     // TODO: вынести настройки

//=include ../ds-kit/plugins/modal-ajax/modal-ajax.jquery.js
// $('.js-ajax').modalAjax();

//=include ../ds-kit/plugins/modal-html/modal-html.jquery.js


////=include ../ds-kit/plugins/blind-version/blind.js
// blindVersion.init();


//=include ../ds-kit/plugins/spoiler/spoiler.js
// TODO: переделать

//=include ../ds-kit/plugins/tables/tables.js
/* задаём каим именно табилцам нужно добавлять обертки .table-responsive для адаптива */
Tables.addMobileView('table'); // TODO: переделать


//=include ../ds-kit/plugins/scroll-top.module.js
scrollTopModule.init('.js-scroll-top', { speed: 500, offsetTop: 105 });            

//=include ../ds-kit/plugins/print.module.js
printModule.init('.js-print');  

//=include ../ds-kit/plugins/tabs/tabs.jquery.js
// $('.js-tabs').tabs();

//=include ../ds-kit/plugins/input-number/input-number.jquery.js
$('.js-custom-number').customNumber();

$('.bigpic').each(function(event){
    var img = $(this);
    var link = img.closest('a');
    if(link.length > 0){
        link.on('click',function (event) {
            return hs.expand(this);
        });
    }
});


//=include ../ds-kit/plugins/map/map.jquery.js
if( $('.js-map').length ){
    var url = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
    if( $('.js-map').eq(0).data('mapType') === 'google' ){
        url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4T-H8Uh6hP2gSP05DyocP-C3B88gH790';
    }
    loadComponent.script(url, function(){
        var map = $('.js-map').mapInit('init', {
            zoom: [18, 18],
            ui: true
        });
    }); 
}




// TEMPLATE ============================================================================================================
        
// Header ============================================================================================================*/

///=include ../../templates-html/common/modal/base-1__modal.js                               /* Base-1 Denis + Lesya */
//=include ../../templates-html/common/modal/base-2__modal.js                               /* Base-1 Denis + Lesya */

// Header ============================================================================================================*/

///=include ../../templates-html/layout/header/base-1__header.js                               /* Base-1 Denis + Lesya */
///=include ../../templates-html/layout/header/base-1__header-short.js                         /* Base-1 Denis + Lesya */
//=include ../../templates-html/layout/header/base-2__header.js                               /* Base-1 Denis + Lesya */


// Common-block ======================================================================================================*/

//=include ../../templates-html/feedback/base-1__feedback-container.js                        /* Base-1 Denis + Lesya */
 

// Homepage ==========================================================================================================*/

///=include ../../templates-html/homepage/slider/base-1__slider.js                             /* Base-1 Denis + Lesya */
//=include ../../templates-html/homepage/slider/base-2__slider.js                             /* Base-2 Oleg          */

///=include ../../templates-html/homepage/products/base-1__products-bestseller.js              /* Base-1 Denis + Lesya */
//=include ../../templates-html/homepage/products/base-2__products-bestseller.js              /* Base-2 Oleg          */

///=include ../../templates-html/homepage/extra_text/base-1__partners.js                       /* Base-1 Denis + Lesya */
//=include ../../templates-html/homepage/extra_text/base-2__partners.js                       /* Base-2 Oleg          */

///=include ../../templates-html/homepage/publications/base-1__articles.js                     /* Base-1 Denis + Lesya */
///=include ../../templates-html/homepage/publications/base-1__news.js                         /* Base-1 Denis + Lesya */

//=include ../../templates-html/homepage/publications/base-2__stock.js                         /* Base-2 Oleg          */

///=include ../../templates-html/homepage/gallery/base-1__gallery.js                           /* Base-1 Denis + Lesya */
///=include ../../templates-html/homepage/extra_text/base-1__advantages.js                     /* Base-1 Denis + Lesya */

///=include ../../templates-html/homepage/banner/base-1__banner-list.js                        /* Base-1 Denis + Lesya */
//=include ../../templates-html/homepage/banner/base-2__banner-list.js                        /* Base-2 Oleg          */

///=include ../../templates-html/homepage/reviews/base-1__reviews.js                           /* Base-1 Denis + Lesya */
//=include ../../templates-html/homepage/reviews/base-2__reviews.js                           /* Base-2 Oleg          */


// Products ==========================================================================================================*/

///=include ../../templates-html/products/show/base-1__products-show.js                        /* Base-1 Denis + Lesya */
//=include ../../templates-html/products/show/base-2__products-show.js                        /* Base-2 Oleg          */

///=include ../../templates-html/products/similar/base-1__products-similar.js                  /* Base-1 Denis + Lesya */


// END EXTENDS =========================================================================================================

console.timeEnd('extends-js');