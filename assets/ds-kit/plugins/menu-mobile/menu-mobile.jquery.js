(function( $ ){

    var defaults = {
        text: {
            rootTitle: 'Меню'
        },
        selectors: {
            nodeRoot: '[data-menu-mobile--root]',
            nodeLink: '[data-menu-mobile--item-name]',
            node: 'data-menu-mobile--has-drop-down',
            btnToggle: '[data-menu-mobile--switcher-btn]'
        }
    };



    $.fn.menuMobile = function(options, method) {

        if (this.length === 0) {
            return this;
        }

        // support multiple elements
        if (this.length > 1) {
            this.each(function() {
                $(this).menuMobile(options, method);
            });
            return this;
        }

        // create a namespace to be used throughout the plugin
        var menuMobile = {};
        // set a reference to our slider element
        var el = this;

        // Return if menuMobile is already initialized
        // if ($(el).data('menuMobile')) { return; }

        var methods = {

            init : function( options ) {

                menuMobile.settings = $.extend({}, defaults, options);

                // this.each(function() {

                var container = $(this);
                var id = Math.round( Math.random()*10000);

                menuMobile.settings.text.rootTitle = $(container).find(menuMobile.settings.selectors.btnToggle).text();

                var tree = methods.buildMenuTree($(this), options);
                menuMobile.settings.VM = methods.renderMenu(id, tree);

                // handlers
                methods.addHandlerToggleBtn(container, menuMobile.settings.selectors.btnToggle, menuMobile.settings.VM);

                // });
            },

            // Работа с деревом ===========================================================================================/

            buildMenuTree : function (root, options){

                var nodeRoot = root;
                var rootTitle = menuMobile.settings.text.rootTitle;
                var nodeLink = menuMobile.settings.selectors.nodeLink;
                var node = menuMobile.settings.selectors.node;

                var tree = [];
                var _id = 0;

                // задаём корень
                tree.push({ id: _id, name: rootTitle, elementLink: nodeRoot, hasChild: true, parentId: null });
                // рекурсивно строим остальное дерево
                function build(parentNode){
                    var parent = $(parentNode.elementLink);
                    var el = parent.find('li').not( parent.find('li li'));
                    el.each(function () {
                        _id++;
                        var currNode = {
                            id: _id,
                            name: $(this).children(nodeLink).text(),
                            href: $(this).children(nodeLink).attr('href'),
                            elementLink: $(this),
                            hasChild:  $(this).attr(node) != null,
                            parentId: parentNode.id
                        };
                        tree.push(currNode);
                        if(currNode.hasChild){  build(currNode) }
                    });
                }
                build( methods.getNodeRoot(tree) );

                return tree;
            },

            renderMenu : function(id, tree){
                $('body').append('' +
                    '<menu-mobile class="menu-mobile" id="menu-mobile-' + id + '"></menu-mobile>'
                );

                return initMenuMobile(id, tree);
            },

            // Вспомогательные ============================================================================================/

            // Получения узла по ID
            getNodeById : function(id, tree){
                var result = null;
                //ищем элемент с заданным id
                tree.forEach(function(item){
                    if( item.id === id ){
                        result = item;
                        return false;
                    }
                });
                // если элемента с таким id нет, то возвращаем null
                return result;
            },

            // Получения корня
            getNodeRoot : function(tree){
                return methods.getNodeById(0, tree);
            },

            // Обработка событий ==========================================================================================/

            addHandlerToggleBtn : function(container, selector, VM){
                container.on('click', selector, function () {
                    methods.showMenu(VM);
                });
            },


            // Внешнее управление =========================================================================================/

            showMenu : function (VM) {
                VM.show = true;
                if( typeof scrollComponent !== "undefined") {
                    scrollComponent.disable();
                }
            },

            // как ту из вне поулчить вьюмодел?
            hideMenu : function (VM) {
                VM.show = false;
                if( typeof scrollComponent !== "undefined") {
                    scrollComponent.enable();
                }
            }

        };

        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' not exist in jQuery.menuMobile' );
        }

    };

})( jQuery );
