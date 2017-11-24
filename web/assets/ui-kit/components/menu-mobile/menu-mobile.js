/*

Структура для меню, в [] - имена из elements/selectors,
* [] - эти классы добавлены в структуру для наглядности и вставлять их в верстку не надо

    <div class="menu-top__title">
        <button class="menu-top__title-btn"></button>
    </div>

 */


function MenuMobile(options){

    // состояния модуля
    var states ={
        isOpened: false   // открыт или закрыт на мобильном
    };

    // Дерево меню, включает в себя только узлы, листья игнорируются
    var tree = [];

    var text = {
        rootTitle: 'Меню'
    };
    // Список селекторов, используемых в модуле
    var selectors = {
        nodeRoot: '.js-smart-menu > .menu-top__list',
        nodeLink: '.menu-top__item-name',
        node: '-has-drop-down',
        btnToggle: '.menu-top__switcher-btn'
    };

    var id = Math.round( Math.random()*10000);


    // переопределяем переменные если надо ============================================================================/

    // переопределяем свойства, если это необходимо
    function setOptions(){
        // text = $.extend({}, selectors, options.text);
        // selectors = $.extend({}, selectors, options.selectors);
    }

    // кэшируем элементы для быстрого доступа
    function addElements(){
    }


    // работа с деревом ===============================================================================================/

    function buildMenu(){
        var _id = 0;
        // задаём корень
        tree.push({ id: _id, name: text.rootTitle, elementLink: $(selectors.nodeRoot), hasChild: true, parentId: null });
        // рекурсивно строим остальное дерево
        function build(parentNode){
            var parent = $(parentNode.elementLink);
            var el = parent.find('li').not( parent.find('li li'));
            el.each(function () {
                _id++;
                var currNode = {
                    id: _id,
                    name: $(this).children(selectors.nodeLink).text(),
                    href: $(this).children(selectors.nodeLink).attr('href'),
                    elementLink: $(this),
                    hasChild: $(this).hasClass(selectors.node),
                    parentId: parentNode.id
                };
                tree.push(currNode);
                if(currNode.hasChild){  build(currNode) }
            });
        }
        build( getNodeRoot() );
    }


    function renderMenu(){
        console.log(tree);
        $('body').append('' +
            '<div class="menu-mobile" id="app-' + id + '">' +
                '<menu-mobile-header v-bind:node="activeNode"></menu-mobile-header>' +
                '<ul class="menu-mobile__list">' +
                    '<menu-mobile-item v-for="item in tree" :key="item.id" v-bind:item="item" v-if="item.parentId === activeNode.id" ></menu-mobile-item>' +
                '</ul>' +
            '</div>'
        );

        Vue.component('menu-mobile-header', {
            props: ['node'],
            template:
                '<div class="menu-mobile__header">' +
                    '<div class="menu-mobile__title">' +
                        '<button class="menu-mobile__title-btn" v-on:click.prevent="activeParentNode">' +
                            '<i class="menu-mobile__icon-arrow-right"></i>' +
                            '{{ node.name }}' +
                        '</button>' +
                    '</div>' +
                    '<button class="menu-mobile__switcher-btn" v-on:click.prevent="closeMenu"><span></span></button>' +
                '</div>',
            methods: {
                closeMenu: function (event) {
                    app.closeMenu();
                },
                activeParentNode: function (event) {
                    if( this._props.node.parentId !== null ){
                        var parentId = this._props.node.parentId;
                        for(var i = 0; i < app.tree.length; i++){
                            if (app.tree[i].id === parentId) {
                                app.activeNode = app.getNodeParam( app.tree[i] );
                            }
                        }
                    } else {
                        app.closeMenu();
                    }

                }
            }
        });

        Vue.component('menu-mobile-item', {
            props: ['item', 'activeNode'],
            template:
                '<li class="menu-mobile__item">' +
                    '<a class="menu-mobile__item-name" v-bind:href="item.href">' +
                        '{{ item.name }}' +
                        // иконка со стрелкой, для элементов без потомков
                        '<span v-if="!item.hasChild" class="menu-mobile__item-btn">' +
                            '<i class="menu-mobile__icon-arrow-left"></i>' +
                        '</span>' +
                    '</a>' +
                    // для элементов с подкатегориями добавляем кнопочку показывающую эти подразделы
                    '<button v-if="item.hasChild" class="menu-mobile__item-btn hasChild"  v-on:click.prevent="showChild">' +
                        '<i class="menu-mobile__icon-more"></i>' +
                    '</button>' +
                '</li>',
            methods: {
                showChild: function (event) {
                    app.activeNode = app.getNodeParam( this._props.item );
                }
            }
        });

        var app = new Vue({
            el: '#app-' + id,
            data: {
                el: '#app-' + id,
                tree: tree,
                activeNode: {
                    id: tree[0].id,
                    name: tree[0].name,
                    parentId: tree[0].parentId
                }
            },
            methods: {
                getNodeParam: function (input) {
                    var result = {};
                    result.id =  input.id;
                    result.name =  input.name;
                    result.parentId =  input.parentId;
                    return result;
                },
                closeMenu: function () {
                    $( this.el).hide();
                    this.activeNode = app.getNodeParam( this.tree[0] );
                }
            }
        });
    }

    // вспомогательные ================================================================================================/

    // Получения узла по ID
    function getNodeById(id){
        var result = null;
        //ищем элемент с заданным id
        tree.forEach(function(item){
            if( item.id == id ){
                result = item;
                return false;
            }
        });
        // если элемента с таким id нет, то возвращаем null
        return result;
    }

    // Получения корня
    function getNodeRoot(){
        return getNodeById(0);
    }


    // Обработка событий ==============================================================================================/

    function addHandlerToggleBtn(){
        $('body').on('click', selectors.btnToggle, function () {
          $('#app-' + id).show();
        });
    }

    // initialize =====================================================================================================/
    setOptions();  // переопределяем свойства, если это необходимо
    buildMenu();  // создаём модель меню
    renderMenu();   // ренедерим меню, колбэком навешиваем обработчики
    addHandlerToggleBtn()
    // public =========================================================================================================/
    return {
        init: function () {
            
        }
    };
}
