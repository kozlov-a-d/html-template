console.time('extends-js');
/*=========================================================================*/
/* mediaEventListener кастомизируем breakpoint'ы */
var mediaEventListener = new MediaEventListener([
    { name: 'mobile',  minResolution: 0,    maxResolution: 1023,  isActive: false, isEach: false, callback: [] },
    { name: 'desktop', minResolution: 1024, maxResolution: 1920,  isActive: false, isEach: false, callback: [] },
    { name: 'resize',  minResolution: 0,    maxResolution: 19200, isActive: false, isEach: true,  callback: [] }
]);


/*=========================================================================*/
/* задаём каим именно табилцам нужно добавлять обертки .table-responsive для адаптива */
Tables.addMobileView('table');

$('.js-ajax').modalAjax();

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


/*=========================================================================*/
/* Window Resize с mediaEventListener */
// навешиваем скрипты на разные разрешения
mediaEventListener.addQueryAction('mobile', function(){
    // console.log('mobile 1');
});
mediaEventListener.addQueryAction('desktop', function(){
    // console.log('desktop 2');
});
mediaEventListener.addQueryAction('resize', function(){
    // console.log('resize');
});
// mediaEventListener.addQueryAction('resize', function(){
//     console.log('resize');
//


console.timeEnd('extends-js');