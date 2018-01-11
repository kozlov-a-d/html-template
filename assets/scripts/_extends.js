console.time('appjs');
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


console.time('SmartMenu');

var menuMobile = new MenuMobile({});
$('.js-menu-smart').menuSmart();
console.timeEnd('SmartMenu');


console.time('sliderHeader');
//=include ../../template-block/base-1/homepage/slider/slider.js
console.timeEnd('sliderHeader');


console.time('advantages');
//=include ../../template-block/base-1/homepage/advantages/advantages.js
console.timeEnd('advantages');


console.time('hitsWidget');
//=include ../../template-block/base-1/homepage/hits-widget/hits-widget.js
console.timeEnd('hitsWidget');


console.time('articlesWidget');
//=include ../../template-block/base-1/homepage/articles-widget/articles-widget.js
console.timeEnd('articlesWidget');


console.time('newsWidget+bannersWidget');
//=include ../../template-block/base-1/homepage/news-widget-and-banners/news-widget-and-banners.js
console.timeEnd('newsWidget+bannersWidget');


console.time('galeryFullwidthCentered');
//=include ../../template-block/base-1/homepage/galery-fullwidth/galery-fullwidth.js
console.timeEnd('galeryFullwidthCentered');


console.time('certificates+partners');
//=include ../../template-block/base-1/homepage/certificates-and-partners/certificates-and-partners.js
console.timeEnd('certificates+partners');


console.time('testimonialsWidget');
//=include ../../template-block/base-1/homepage/testimonials-widget/testimonials-widget.js
console.timeEnd('testimonialsWidget');


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


console.timeEnd('appjs');