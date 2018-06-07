/**
 * Компонент для загрузки сторонних ресурсов
 * @method {{ script, style}}
 */
var loadComponent = (function(){

    var self = { };

    var loadScript = function(src,_timeout){
        return new Promise(function(resolve, reject){
            
            if(!src){ reject(new TypeError("filename is missing"));  return; }
    
            var script = document.createElement("script"),
                timer,
                head = document.getElementsByTagName("head")[0];
    
            head.appendChild(script);
    
            function leanup(){
                clearTimeout(timer);
                timer=null;
                script.onerror=script.onreadystatechange=script.onload=null;
            }
    
            function onload(){
                leanup();
                if(!script.onreadystatechange||(script.readyState&&script.readyState=="complete")){
                    resolve(script);
                }
            }
    
            script.onerror=function(error){
                leanup();
                head.removeChild(script);
                script=null;
                reject(new Error("network"));
            };
    
            if (script.onreadystatechange === undefined) {
                script.onload = onload;
            } else {
                script.onreadystatechange = onload;
            }
    
            timer=setTimeout(script.onerror,_timeout||30000);
            script.setAttribute("type", "text/javascript");
            script.setAttribute("src", src);
        });
    }

    var loadCSS = function(src,_timeout){
        
        var css = document.createElement('link'), c = 1000;
        document.getElementsByTagName('head')[0].appendChild(css);
        css.setAttribute("rel", "stylesheet");
        css.setAttribute("type", "text/css");

        return new Promise(function(resolve, reject){
            var c=(_timeout||10)*100;
            if(src) {
                css.onerror = function (error) {
                    if(timer)clearInterval(timer);
                    timer = null;

                    reject(new Error("network"));
                };

                var sheet, cssRules, timer;
                if ('sheet' in css) {
                    sheet = 'sheet';
                    cssRules = 'cssRules';
                }
                else {
                    sheet = 'styleSheet';
                    cssRules = 'rules';
                }
                timer = setInterval(function(){
                    try {
                        if (css[sheet] && css[sheet][cssRules].length) {
                            clearInterval(timer);
                            timer = null;
                            resolve(css);
                            return;
                        }
                    }catch(e){}

                    if(c--<0){
                        clearInterval(timer);
                        timer = null;
                        reject(new Error("timeout"));
                    }
                }, 10);

                css.setAttribute("href", src);
            }else{
                reject(new TypeError("filename is missing"));
            }
        });
    }

    // PUBLIC ==========================================================================================================
    return  Object.freeze({
        /**
         * Загружает скрипт через promise
         */
        script: function(src, callback, _timeout){
            loadScript(src,_timeout).then(function(){
                callback();
            },function(error){
                console.log(error);
            })
        }, 
        /**
         * Загружает css через promise
         */
        style: function(src, callback, _timeout){
            loadCSS(src,_timeout).then(function(){
                callback();
            },function(error){
                console.log(error);
            })
        }, 
    })

}());
