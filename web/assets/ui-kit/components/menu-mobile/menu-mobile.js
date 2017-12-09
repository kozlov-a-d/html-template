// dependencies
// - bower_components/jquery/dist/jquery.js
// - bower_components/vue/dist/vue.js
// - web/assets/ui-kit/components/modal/modal-core.js
// - web/assets/ui-kit/components/menu-mobile/menu-mobile.vue.component.js

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
    // var selectors = {
    //     nodeRoot: '.js-smart-menu > .menu-top__list',
    //     nodeLink: '.menu-top__item-name',
    //     node: '-has-drop-down',
    //     btnToggle: '.menu-top__switcher-btn'
    // };
    var selectors = {
        container: '.js-smart-menu',
        nodeRoot: 'data-menu-mobile--root',
        nodeLink: 'data-menu-mobile--item-name',
        node: 'data-menu-mobile--has-drop-down',
        btnToggle: 'data-menu-mobile--switcher-btn'
    };

    var id = Math.round( Math.random()*10000);

    var vueMenuMobile;


    // переопределяем переменные если надо ============================================================================/

    // переопределяем свойства, если это необходимо
    function setOptions(){
        // text = $.extend({}, selectors, options.text);
        // selectors = $.extend({}, selectors, options.selectors);
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
            '<menu-mobile class="menu-mobile" id="menu-mobile-' + id + '"></menu-mobile>'
        );
        vueMenuMobile = initMenuMobile(id, tree);



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
            vueMenuMobile.show = true;
            app.ui.components.modal.openModal();
        });
    }

    // initialize =====================================================================================================/
    setOptions();  // переопределяем свойства, если это необходимо
    buildMenu();  // создаём модель меню
    renderMenu();   // ренедерим меню, колбэком навешиваем обработчики
    addHandlerToggleBtn();
    // public =========================================================================================================/
    return {
        init: function () {
            
        }
    };
}
