var goalComponent = (function(){

    var services = {
        yaCounterID : false,
        mailRuID : false,
        gaUsed : true,
        fbqUsed : true
    };

    // PRIVATE =========================================================================================================

    goalDone = function (goalName) {
        if(services.yaCounterID !=='' &&  typeof window['yaCounter' + services.yaCounterID] !== "undefined"){
            window['yaCounter' + services.yaCounterID].reachGoal(goalName, function () {});
        }
        if(services.mailRuID !=='' && typeof _tmr !== "undefined"){
            _tmr.push({ id: services.mailRuID, type: 'reachGoal', goal: goalName });
        }
        if(services.gaUsed && typeof ga !== "undefined"){
            ga('send', 'event', 'button', goalName);
        }
        if(services.fbqUsed && typeof fbq !== "undefined"){
            fbq('track', goalName, { });
        }
    };

    debug = function () {
        window.onload = function() {
            console.log( 'yaCounterID: ' + (typeof window['yaCounter' + services.yaCounterID] !== "undefined") );
            console.log( 'gaUsed: ' + (typeof ga !== "undefined") );
            console.log( 'fbqUsed: ' + (typeof fbq !== "undefined") );
            console.log( 'mailRuID: ' + (typeof _tmr !== "undefined") );
        }
    };

    // PUBLIC ==========================================================================================================

    return {
        reach : function(goalName, event){
            event = event || '';
            if( event === ""){ goalDone(goalName); }
            if( event === "onload"){ window.onload = function() { goalDone(goalName); } }
        },
        debug : function(){ debug(); }
    }
}());

