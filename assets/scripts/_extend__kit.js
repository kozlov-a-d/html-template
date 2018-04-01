// BASIS ===============================================================================================================

//=include ../ds-kit/basis/decorators.util.js
//=include ../ds-kit/basis/localstorage.component.js
//=include ../ds-kit/basis/scroll.component.js
//=include ../ds-kit/basis/resize.component.js
resizeComponent.setFreezeTime(200);


// PLUGINS =============================================================================================================

//=include ../ds-kit/plugins/photoswipe/photoswipe.wrapper.js
photoswipeWrapper.init('.js-photoswipe-gallery', 'a');

//=include ../ds-kit/plugins/menu-smart/menu-smart.jquery.js
$('.js-menu-smart').menuSmart();

//=include ../ds-kit/plugins/menu-mobile/menu-mobile.vue.js
//=include ../ds-kit/plugins/menu-mobile/menu-mobile
// .jquery.js
$('.js-menu-mobile').menuMobile(); // переделать без vue.js ?

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


// END EXTENDS =========================================================================================================
