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
        console.log('buildMenu');
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


    // Vue.component('menu-mobile-title', {
    //     props: ['tree'],
    //     template:
    //         '<li class="list-group-item" v-if=" ">' +
    //             '<a href="#" v-on:click.prevent="activeParentNode">{{ tree.name }}</a>' +
    //         '</li>',
    //     methods: {
    //         activeParentNode: function (event) {
    //             app.activeNodeId = this._props.tree.name;
    //         }
    //     }
    // });



    function renderMenu(callback){
        console.log(tree);
        $('body').append('' +
            '<div class="menu-mobile" id="app-' + id + '">' +
                ' ' +
                '<ul class="menu-mobile__list">' +
                    '<menu-mobile-item v-for="item in tree" v-bind:item="item" v-if="item.parentId === activeNodeId" ></menu-mobile-item>' +
                '</ul>' +
            '</div>'
        );

        Vue.component('menu-mobile-item', {
            props: ['item', 'activeNodeId'],
            template:
            '<li class="list-group-item">' +
            '<a href="#" v-on:click.prevent="activeNode">{{ item.name }}</a>' +
            '</li>',
            methods: {
                activeNode: function (event) {
                    console.log(this._props.item.name);
                    app.activeNodeId = this._props.item.id;
                }
            }
        });

        var app = new Vue({
            el: '#app-' + id,
            data: {
                message: 'Hello Vue!',
                tree: tree,
                activeNodeId: 0
            }
        });

        callback;
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

    // Получения узла родителя
    function getNodeParent(node){
        return getNodeById(node.parentId);
    }

    // Получения корня
    function getNodeRoot(){
        return getNodeById(0);
    }


    // Обработка событий ==============================================================================================/

    function addHandlerNavigation(){
        console.log('addHandlerNavigation');
    }

    function addHandlerToggleBtn(){
    }

    // initialize =====================================================================================================/
    setOptions();  // переопределяем свойства, если это необходимо
    buildMenu();  // создаём модель меню
    renderMenu();   // ренедерим меню, колбэком навешиваем обработчики
    // public =========================================================================================================/
    return {
        init: function () {
            
        }
    };
}
