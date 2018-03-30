/**
 * Компонент для отслеживание целей
 *
 * @type {{trigger, debug}}
 */
var goalComponent = (function(){

    var services = {
        yaCounterID : '47922101',
        mailRuID : false,
        gaUsed : true,
        gtagUsed : true,
        fbqUsed : true
    };

    // PRIVATE =========================================================================================================

    var goalDone = function (goalName, goalParams) {
        if(services.yaCounterID !=='' &&  typeof window['yaCounter' + services.yaCounterID] !== "undefined"){
            window['yaCounter' + services.yaCounterID].reachGoal(goalName, function () {});
        }
        if(services.mailRuID !=='' && typeof _tmr !== "undefined"){
            _tmr.push({ id: services.mailRuID, type: 'reachGoal', goal: goalName });
        }
        if(services.gaUsed && typeof ga !== "undefined"){
            ga('send', 'event', 'button', goalName);
        }
        if(services.gtagUsed && typeof gtag !== "undefined"){
            gtag('event', goalName, goalParams);
            console.log(goalName);
        }
        if(services.fbqUsed && typeof fbq !== "undefined"){
            fbq('track', goalName, { });
        }
    };

    var debug = function () {
        window.onload = function() {
            console.log( 'yaCounterID: ' + (typeof window['yaCounter' + services.yaCounterID] !== "undefined") );
            console.log( 'gaUsed: ' + (typeof ga !== "undefined") );
            console.log( 'fbqUsed: ' + (typeof fbq !== "undefined") );
            console.log( 'mailRuID: ' + (typeof _tmr !== "undefined") );
        }
    };

    // INIT ==========================================================================================================

    document.addEventListener('app.ajax.html', function() {
        console.log('app.reachGoal !!!');
    });

    $(document).on('app.ajax.html', function (e, args) {
        console.log('app.ajax.html');
        console.log(args.$html);
    });


    // PUBLIC ==========================================================================================================

    return Object.freeze({
        trigger : function(name, params){
            goalDone(name, params);
        },
        debug : function(){ debug(); }
    });
}());


/*
$('a[href^="tel:"]').on('click', function(){
    goalComponent.reach('ClickOnPhone', {'event_category': 'UsersClicks'});
});
/*
$('body').on('click', '.js-buy"]', function(){
    console.log('test');
    var randomId = Math.round( Math.random()*9999 ) + 1
    var randomPrice = Math.round( Math.random()*9999 ) + 1
    var randomCount = Math.round( Math.random()*9 ) + 1;
    dataLayer.push({
        'event': 'addToCart',
        'ecommerce': {
            'currencyCode': 'RUB',
            'add': {
                'products': [{
                    'id': randomId,
                    'name': "test"+randomId,
                    'price': randomPrice,
                    'brand': 'Google',
                    'category': 'Apparel',
                    'variant': 'Gray',
                    'quantity': 1
                }]
            }
        }
    });
});

/*
UsersClicks
	ClickOnPhone - - Клик на телефон
	ClickOnEmail - Клик на почту


Ecommerce:

ProductDetail - Просмотр продукта
AddToCart -	Добавление в корзину
RemoveFromCart - Удаление из корзины
Purchase - Покупка

GetPrice - Получить прайс
SendEnquire - Отправить запрос
SendOrder - Заказ без корзины
SendReviewProduct - Отзыв к товару


Feedbacks:
Feedback - ФОС
Callback - Заказ звонка
SendReview - Добавление отзыва
СallSpecialist - Вызов специалиста

app.ajax.html

$(document).trigger('app.reachGoal', { goalName: 'AddToCart' });

*/




