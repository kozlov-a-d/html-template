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
$('.js-menu-mobile').menuMobile(); // переделать без vue.js ?

//=include ../ds-kit/plugins/menu-smart/menu-smart.jquery.js
$('.js-menu-smart').menuSmart();

//=include ../ds-kit/plugins/modal-ajax/modal-ajax.jquery.js
$('.js-ajax').modalAjax();

//=include ../ds-kit/plugins/blind-version/blind.js
// blindVersion.init();

//=include ../ds-kit/plugins/goals-trigger/goal.component.js
// переделать

//=include ../ds-kit/plugins/spoiler/spoiler.js
// переделать

//=include ../ds-kit/plugins/tables/tables.js
/* задаём каим именно табилцам нужно добавлять обертки .table-responsive для адаптива */
Tables.addMobileView('table'); // переделать


// TEMPLATE ============================================================================================================


// Base-1 Denis ------------------------------------------------------------------------------------------------------*/

//=include ../../template-block/base-1/_header/header.js
//=include ../../template-block/base-1/homepage/slider/slider.js
//=include ../../template-block/base-1/homepage/advantages/advantages.js
//=include ../../template-block/base-1/homepage/hits-widget/hits-widget.js
//=include ../../template-block/base-1/homepage/articles-widget/articles-widget.js
//=include ../../template-block/base-1/homepage/news-widget-and-banners/news-widget-and-banners.js
//=include ../../template-block/base-1/homepage/galery-fullwidth/galery-fullwidth.js
//=include ../../template-block/base-1/homepage/certificates-and-partners/certificates-and-partners.js
//=include ../../template-block/base-1/homepage/testimonials-widget/testimonials-widget.js

// Base-1 Denis End --------------------------------------------------------------------------------------------------*/


// END EXTENDS =========================================================================================================

console.timeEnd('extends-js');