
(function( $ ){

    var defaults = {
        // дефолтные опции
        minResolution: 1000
    };
    var states ={
        hasExtra: false
    };

    var methods = {

        init : function( options ) {

            options = $.extend({}, defaults, options);

            this.each(function() {

                var container = $(this);
                var menuRoot = container.find('ul').not('ul ul');
                var menuItems = menuRoot.find('li').not('li li');
                var containerWidth = menuRoot.width();
                // тут код
                console.log('menuSmart', menuItems);

                methods.addExtraBar(menuRoot, menuItems);

                containerWidth = menuRoot.width();
                methods.hideItem(menuRoot, menuItems, containerWidth);

                window.addEventListener("resize", function() {
                    containerWidth = menuRoot.width();
                    if(containerWidth > options.minResolution){
                        methods.hideItem(menuRoot, menuItems, containerWidth);
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
                    // если следующий элемент не влазит
                    sumWidth = sumWidth + elWidth;
                    dublerList.eq(i).addClass('-hidden');


                } else {
                    // если элемент влазит
                    // проверяем влезет ли гамбургер
                    if(sumWidth + elWidth < width){

                    }

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