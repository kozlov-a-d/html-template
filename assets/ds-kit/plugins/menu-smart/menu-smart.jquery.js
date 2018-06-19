(function( $ ){

    var defaults = {
        // дефолтные опции
        minResolution: 1000,
        extraWidth: 61
    };
    var states ={
        hasExtra: false
    };

    var methods = {

        init : function( options ) {

            options = $.extend({}, defaults, options);

            this.each(function() {

                var $container = $(this);
                var menuRoot = $container.find('ul').not('ul ul');
                var menuItems = menuRoot.find('li').not('li li');
                var containerWidth = menuRoot.width();

                methods.addExtraBar(menuRoot, menuItems);

                containerWidth = menuRoot.width();
                methods.hideItem(menuRoot, menuItems, containerWidth, options.extraWidth);

                window.addEventListener("resize", function() {
                    // containerWidth = menuRoot.width();
                    containerWidth = menuRoot.width();
                    if(window.innerWidth > options.minResolution){
                        methods.hideItem(menuRoot, menuItems, containerWidth, options.extraWidth);
                    }
                });

            });
        },

        resize : function () {

        },

        addExtraBar: function (menuRoot, menuItems) {
            var extrabarContent = '';
            for(var i = 0; i < menuItems.length; i++){
                extrabarContent = extrabarContent + menuItems.eq(i).get(0).outerHTML;
            }

            menuRoot.append(
                '<li class="-extraBar -has-dropdown -drop-down-inverse">' +
                '<button><span>...</span></button>' +
                '<div>' +
                '<ul>' +
                extrabarContent +
                '</ul>' +
                '</div>' +
                '</li>'
            );
            menuRoot.find('.-extraBar div div').remove(); 
        },

        // удаляет дополнительную выпадашку
        removeExtraBar : function (menuRoot) {
            menuRoot.find('.-extraBar').remove();
        },


        // проверяет элементы, если элементу не хватает места, то скрывает его
        hideItem : function (menuRoot, menuItems, containerWidth, extraWidth) {
            // подготавливаем выпадашку дублёра
            var dubler = menuRoot.find('.-extraBar');
            var dublerList = menuRoot.find('.-extraBar > div > ul > li');
            // console.log(dublerList);
            dubler.removeClass('-hidden');
            menuItems.removeClass('-hidden');
            var debugLog = false;

            // console.log('containerWidth ' + containerWidth);

            var width = containerWidth;
            var sumWidth = 0;
            states.hasExtra = false;
            for(var i = 0; i < menuItems.length; i++){
                var elWidth = menuItems.eq(i).width();
                if(debugLog){console.log(menuItems.eq(i).children('a').html(), elWidth, sumWidth + elWidth);}
                // проверяем влазит ли текущий пункт
                if(sumWidth + elWidth <= width){
                    // да:
                    // проверяем это последний пункт
                    if(debugLog){console.log('проверяем влазит ли текущий пункт -  да');}
                    if(i === menuItems.length-1){
                        // да: удаляем многоточие
                        dubler.removeClass('-hidden');
                        // dublerList.eq(i).addClass('-hidden');
                        if(debugLog){console.log('проверяем это последний пункт -  да');}
                    } else {
                        // нет:
                        // проверяем осталось ли место для многоточия
                        if(debugLog){console.log('проверяем это последний пункт -  нет');}
                        if(sumWidth + elWidth + extraWidth <= width){
                            // да: переходим к следующему пункту
                            if(debugLog){console.log('проверяем осталось ли место для многоточия -  да');}
                            dublerList.eq(i).addClass('-hidden');
                        } else {
                            // нет: показываем многоточие вместо этого пункта
                            menuItems.eq(i).addClass('-hidden');
                            if(debugLog){console.log('проверяем осталось ли место для многоточия -  нет');}
                        }
                    }

                } else {
                    // нет: показываем многоточие вместо этого пункта
                    if(debugLog){console.log('проверяем влазит ли текущий пункт -  нет');}
                    menuItems.eq(i).addClass('-hidden');
                    states.hasExtra = true;
                }

                sumWidth = sumWidth + elWidth;
                if(debugLog){console.log('-------------------------------------------------');}
            }

            if(!states.hasExtra){
                dubler.addClass('-hidden');
            }


        }

    };

    $.fn.menuSmart = function(method) {

        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод ' +  method + ' не существует в jQuery.menuSmart' );
        }

    };

})( jQuery );