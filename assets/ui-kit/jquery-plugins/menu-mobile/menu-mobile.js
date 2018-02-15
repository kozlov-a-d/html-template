function MenuMobile(options){

    // Дерево меню, включает в себя только узлы, листья игнорируются


    var text = {
        rootTitle: 'Меню'
    };

    var selectors = {
        container: '.js-menu-mobile',
        nodeRoot: '[data-menu-mobile--root]',
        nodeLink: '[data-menu-mobile--item-name]',
        node: 'data-menu-mobile--has-drop-down',
        btnToggle: '[data-menu-mobile--switcher-btn]'
    };

    var id = Math.round( Math.random()*10000);


    // переопределяем переменные если надо ============================================================================/

    // переопределяем свойства, если это необходимо
    function setOptions(container){
        // text = $.extend({}, selectors, options.text);
        // selectors = $.extend({}, selectors, options.selectors);
        text.rootTitle = $(container).find(selectors.btnToggle).text();
    }

    // работа с деревом ===============================================================================================/

    function buildMenu(nodeRoot){
        var tree = [];
        var _id = 0;
        // задаём корень
        tree.push({ id: _id, name: text.rootTitle, elementLink: nodeRoot, hasChild: true, parentId: null });
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
                    hasChild:  $(this).attr(selectors.node) != null,
                    parentId: parentNode.id
                };
                tree.push(currNode);
                if(currNode.hasChild){  build(currNode) }
            });
        }
        build( getNodeRoot(tree) );

        return tree;
    }

    function renderMenu(tree){
        // console.log(tree);
        $('body').append('' +
            '<menu-mobile class="menu-mobile" id="menu-mobile-' + id + '"></menu-mobile>'
        );
        var vueMenuMobile = initMenuMobile(id, tree);
        return vueMenuMobile;
    }

    // вспомогательные ================================================================================================/

    // Получения узла по ID
    function getNodeById(id, tree){
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
    function getNodeRoot(tree){
        return getNodeById(0, tree);
    }


    // Обработка событий ==============================================================================================/

    function addHandlerToggleBtn(container, vueMenuMobile){
        $(container).on('click', selectors.btnToggle, function () {
            vueMenuMobile.show = true;
            app.scroll.disable();
        });
    }

    // initialize =====================================================================================================/
    $(selectors.container).each(function () {
        setOptions($(this));  // переопределяем свойства, если это необходимо
        var tree = buildMenu($(this).find(selectors.nodeRoot));  // создаём модель меню
        var vueMenuMobile = renderMenu(tree);   // ренедерим меню, колбэком навешиваем обработчики
        addHandlerToggleBtn(this, vueMenuMobile);
    });

    // public =========================================================================================================/
    return {
        init: function () {

        }
    };
}
