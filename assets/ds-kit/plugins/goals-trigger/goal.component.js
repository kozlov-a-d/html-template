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

category: Click {
    Phone - Клик на телефон
    Email - Клик на почту
}

category: Ecommerce {
    ViewProduct - Просмотр продукта
    AddToCart - Добавление в корзину
    RemoveFromCart - Удаление из корзины
    Purchase - Покупка

    GetPriceList - Получить прайс
    Enquire - Отправить запрос
    QuickOrder - Заказ без корзины
    ReviewProduct - Отзыв к товару
}

category: Enquiry {
    Feedback - ФОС
    Callback - Заказ звонка
    Review - Добавление отзыва
    Specialist - Вызов специалиста
}


app.ajax.html

$(document).trigger('app.reachGoal', { goalName: 'AddToCart' });

*/




