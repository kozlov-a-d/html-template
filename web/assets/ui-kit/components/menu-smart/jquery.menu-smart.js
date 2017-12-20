// Desktop ========================================================================================================/
// function setScreenIsMobile(_isMobile) {
//     if( typeof _isMobile === 'boolean'){
//         states.isMobile = _isMobile;
//     } else {
//         console.warn('setScreenIsMobile(_isMobile) _isMobile не является boolean');
//     }
// }
//
// // создаёт дополнительную выпадашку для непоместившихся элементов
// function createExtraBar() {
//     var extrabarContent = '';
//     for(var i = 0; i < elements.desktopItems.length; i++){
//         extrabarContent = extrabarContent + elements.desktopItems.eq(i).get(0).outerHTML;
//     }
//
//     elements.nodeRoot.append(
//         '<li class="menu-top__item -extraBar -has-drop-down -drop-down-inverse">' +
//         '<button class="menu-top__item-name">...</button>' +
//         '<div class="menu-top__drop-down">' +
//         '<ul class="menu-top__list">' +
//         extrabarContent +
//         '</ul>' +
//         '</div>' +
//         '</li>'
//     );
//     elements.nodeRoot.find('.-extraBar .menu-top__drop-down .menu-top__drop-down').remove();
//     // elements.nodeRoot.find('.-extraBar').hide();
//
// }

(function( $ ){

    var defaults = {
        // дефолтные опции
    };
    var states ={
        hasExtra: false
    };

    var methods = {

        init : function( options ) {

            options = $.extend({}, defaults, options);

            this.each(function() {

                var container = $(this);
                var menuRoot = $(this).find('ul').not('ul ul');
                var menuItems = menuRoot.find('li').not('li li');
                var containerWidth = menuRoot.width();
                // тут код
                console.log('menuSmart', menuItems);

                methods.addExtraBar(menuRoot, menuItems);

                containerWidth = menuRoot.width();
                methods.hideItem(menuRoot, menuItems, containerWidth)

                window.addEventListener("resize", function() {
                    console.log('window.onresize');
                    containerWidth = menuRoot.width();
                    methods.hideItem(menuRoot, menuItems, containerWidth)
                    lastResolution = window.width();
                });

                //


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
                '<li class="menu-top__item -extraBar -has-drop-down -drop-down-inverse">' +
                '<button class="menu-top__item-name">...</button>' +
                '<div class="menu-top__drop-down">' +
                '<ul class="menu-top__list">' +
                extrabarContent +
                '</ul>' +
                '</div>' +
                '</li>'
            );
            menuRoot.find('.-extraBar .menu-top__drop-down .menu-top__drop-down').remove();
        },

        // удаляет дополнительную выпадашку
       removeExtraBar : function (menuRoot) {
           menuRoot.find('.-extraBar').remove();
       },


        // проверяет элементы, если элементу не хватает места, то скрывает его
        hideItem : function (menuRoot, menuItems, containerWidth) {
            // подготавливаем выпадашку дублёра
            var dubler = menuRoot.find('.-extraBar');
            var dublerList = dubler.find('.menu-top__item');
            console.log(dublerList);
            dubler.removeClass('-hidden');
            menuItems.removeClass('-hidden');

            var width = containerWidth;
            var sumWidth = 0;
            states.hasExtra = false;
            for(var i = 0; i < menuItems.length; i++){
                var elWidth = menuItems.eq(i).width();
                if(sumWidth + elWidth < width){
                    sumWidth = sumWidth + elWidth;
                    dublerList.eq(i).addClass('-hidden');
                    // console.log(i);
                } else {
                    menuItems.eq(i).addClass('-hidden');
                    states.hasExtra = true;
                }
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