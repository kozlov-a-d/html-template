console.time('extends-js');
// BASIS ===============================================================================================================

//=include ../ds-kit/basis/polyfills.js
//=include ../ds-kit/basis/decorators.util.js
//=include ../ds-kit/basis/localstorage.component.js
//=include ../ds-kit/basis/scroll.component.js
scrollComponent.init('.l-wrapper, .l-footer');
//=include ../ds-kit/basis/resize.component.js
resizeComponent.setFreezeTime(200);
      
 
// PLUGINS =============================================================================================================
//=include ../ds-kit/plugins/photoswipe/photoswipe.wrapper.js
photoswipeWrapper.init('.js-photoswipe-gallery', 'a');

//=include ../ds-kit/plugins/menu-mobile/menu-mobile.vue.js
//=include ../ds-kit/plugins/menu-mobile/menu-mobile.jquery.js
$('.js-menu-mobile').menuMobile({
    text: {
        rootTitle: 'Menu'      
    },
}); // переделать без vue.js ?
 
//=include ../ds-kit/plugins/menu-smart/menu-smart.jquery.js
$('.js-menu-smart').menuSmart();     

//=include ../ds-kit/plugins/modal-ajax/modal-ajax.jquery.js
$('.js-ajax').modalAjax();


////=include ../ds-kit/plugins/blind-version/blind.js
// blindVersion.init();


//=include ../ds-kit/plugins/spoiler/spoiler.js
// FIXME: переделать

//=include ../ds-kit/plugins/tables/tables.js
/* задаём каим именно табилцам нужно добавлять обертки .table-responsive для адаптива */
Tables.addMobileView('table'); // переделать

//=include ../ds-kit/plugins/goals.module.js

//=include ../ds-kit/plugins/scroll-top.module.js
scrollTopModule.init('.js-scroll-top', { speed: 500, offsetTop: 105 });            

//=include ../ds-kit/plugins/print.module.js
printModule.init('.js-print');    


// TEMPLATE ============================================================================================================
        
// Header ============================================================================================================*/

//=include ../../templates-html/layout/header/base-1__header.js                               /* Base-1 Denis + Lesya */


// Common-block ======================================================================================================*/

///=include ../../templates-html/feedback/base-1__feedback-container.js                        /* Base-1 Denis + Lesya */
 

// Homepage ==========================================================================================================*/

///=include ../../templates-html/homepage/slider/base-1__slider.js                             /* Base-1 Denis + Lesya */
//=include ../../templates-html/homepage/slider/base-2__slider.js                             /* Base-2 Oleg          *

///=include ../../templates-html/homepage/products/base-1__products-bestseller.js              /* Base-1 Denis + Lesya */
///=include ../../templates-html/homepage/extra_text/base-1__partners.js                       /* Base-1 Denis + Lesya */
///=include ../../templates-html/homepage/publications/base-1__articles.js                     /* Base-1 Denis + Lesya */
///=include ../../templates-html/homepage/publications/base-1__news.js                         /* Base-1 Denis + Lesya */
///=include ../../templates-html/homepage/gallery/base-1__gallery.js                           /* Base-1 Denis + Lesya */
///=include ../../templates-html/homepage/extra_text/base-1__advantages.js                     /* Base-1 Denis + Lesya */
///=include ../../templates-html/homepage/banner/base-1__banner-list.js                        /* Base-1 Denis + Lesya */
///=include ../../templates-html/homepage/reviews/base-1__reviews.js                           /* Base-1 Denis + Lesya */


// Products ==========================================================================================================*/

//=include ../../templates-html/products/show/base-1__products-show.js                        /* Base-1 Denis + Lesya */
//=include ../../templates-html/products/similar/base-1__products-similar.js                  /* Base-1 Denis + Lesya */


// END EXTENDS =========================================================================================================

console.timeEnd('extends-js');