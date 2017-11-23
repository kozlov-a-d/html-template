/*

Структура для меню, в [] - имена из elements/selectors,
* [] - эти классы добавлены в структуру для наглядности и вставлять их в верстку не надо

<nav class="menu-top js-smart-menu [container]">

    <div class="menu-top__switcher">
        <button class="menu-top__switcher-btn [btnToggle]">показать/скрыть меню</button>
    </div>

    <div class="menu-top__title">
        <button class="menu-top__title-btn [btnTitle]">Шапка меню в развернутом виде</button>
    </div>

    <ul class="menu-top__list [nodeRoot]">
        [<li class="menu-top__item -has-drop-down [node]" data-lvl="1">
            <a class="menu-top__item-name" href="#">Каталог</a> --> title
            <div class="menu-top__drop-down [nodeDropdown]">
                (<ul class="menu-top__list [nodeList]">   --> show
                    [<li class="menu-top__item -has-drop-down [node]" data-lvl="2">
                        <a class="menu-top__item-name" href="#">Теплоизоляция ППУ</a>
                        <div class="menu-top__drop-down [nodeDropdown]">
                           <ul class="menu-top__list [nodeList]">
                                <li class="menu-top__item">
                                    <a class="menu-top__item-name" href="#">Трубы ППУ в изоляции</a>
                                </li>
                            </ul>
                        </div>
                    </li>]
                </ul>)
            </div>
        </li>]
    </ul>
</div>

 */


function SmartMenu(options){

    // состояния модуля
    var states ={
        isOpened: false,   // открыт или закрыт на мобильном
        isMobile: false,   // активна мобильная версия или нет
        hasExtra: false
    };

    // Дерево меню, включает в себя только узлы, листья игнорируются
    var tree = [];

    // Текущий узел
    var currNode = {};

    // Список текстов, используемых в модуле
    var text = {
        rootTitle: 'Меню'
    };

    // Список селекторов, используемых в модуле
    var selectors = {
        container: '#js-smart-menu',
        node: '.-has-drop-down',
        nodeRoot: '#js-smart-menu > .menu-top__list',
        nodeLink: '.menu-top__item-name',
        nodeItem: '.menu-top__item',
        nodeDropdown: '.menu-top__drop-down',
        nodeList: '.menu-top__list',
        btnToggle: '.menu-top__switcher-btn',
        btnTitle: '.menu-top__title-btn',

        desktopContainer: '.menu-top__list',
        desktopItems: '.js-smart-menu > .menu-top__list > .menu-top__item',
    };

    // Список элементов для быстрого обращения
    // - сформируется при инициализации / создание объекта класса
    var elements = {};


    // переопределяем переменные если надо ============================================================================/

    // переопределяем свойства, если это необходимо
    function setOptions(){
        text = $.extend({}, selectors, options.text);
        selectors = $.extend({}, selectors, options.selectors);
    }

    // кэшируем элементы для быстрого доступа
    function addElements(){
        elements =  {
            container: $(selectors.container),
            nodeRoot: $(selectors.nodeRoot),
            nodeLinks: $(selectors.node + ' > ' + selectors.nodeLink),
            btnToggle: $(selectors.btnToggle),
            btnTitle: $(selectors.btnTitle),
            desktopContainer: $(selectors.desktopContainer),
            desktopItems: $(selectors.desktopItems)
        };
    }


    // работа с деревом ===============================================================================================/
/*
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

    // Построение дерева и запись его в массив
    function buildTree(){
        var _id = 0;

        // задаём корень
        tree.push({ id: _id, name: text.rootTitle, elementLink: $(selectors.nodeRoot), parentId: null });

        // рекурсивно строим остальное дерево
        function build(parentNode){
            var parent = $(parentNode.elementLink);
            var el = parent.find(selectors.node)
                .not( parent.find(selectors.node + ' ' + selectors.node));
            el.each(function ( ) {
                _id++;
                var currNode = {
                    id: _id,
                    name: $(this).children(selectors.nodeLink).text(),
                    elementLink: $(this),
                    parentId: parentNode.id
                };
                tree.push(currNode);
                $(this).children(selectors.nodeLink).attr('data-target-node-id', _id);
                setTimeout(build( currNode ) , 10);
            })
        }
        build( getNodeRoot() );

        // задаём корень текущим узлом
        currNode = getNodeRoot();

    }

    // Показать узел с заданым ID
    function showNode(nodeId){
        currNode = getNodeById(nodeId);
        changeMenuTitle(currNode.name);
        currNode.elementLink.children(selectors.nodeDropdown).children(selectors.nodeList).css({
            'transform' : 'translateX(0)'
        });
        return false;
    }

    // Скрыть текущий узел, текущий становится узел на один уровень выше
    function hideNode(){
        currNode.elementLink.children(selectors.nodeDropdown).children(selectors.nodeList).css({
            'transform' : 'translateX(100%)'
        });
        currNode = getNodeParent(currNode);
        changeMenuTitle(currNode.name);
        return false;
    }

    // Скрывает все узлы, кроме корневого
    function hideAllNode(){
        tree.forEach(function(item){
            if( item.id != 0 ){
                item.elementLink.children(selectors.nodeDropdown).children(selectors.nodeList).css({
                    'transform' : 'translateX(100%)'
                });
            }
        });
        // задаём корень текущим узлом
        currNode = getNodeRoot();
    }


    // показать/скрыть меню на мобильниках ============================================================================/
    // - у контейнера появляется/убирается класс .is-opened

    function toggleMenu(){
        var body = $('body');
        if(!states.isOpened){
            // открываем менюшку
            elements.container.addClass('is-opened');
            // убираем скрол
            body.css('overflow', 'hidden');
            body.css('position', 'fixed');
            // переключаем состояние
            states.isOpened = true;
            // включаем обработчики
            addHandlerMobileNav();

            changeMenuTitle(currNode.name);

        } else {
            // закрываем менюшку
            elements.container.removeClass('is-opened');
            // возвращаем скрол
            body.css('overflow', 'visible');
            body.css('position', 'static');
            // переключаем состояние
            states.isOpened = false;
            // скрываем все раскрытые узлы, кроме корневого
            hideAllNode();
            // отключаем обработчики
            removeHandlerMobileNav();
        }
    }


    // разное =========================================================================================================/

    // Вывод название для узла
    function changeMenuTitle(title) {
        elements.btnTitle.text(title);
    }*/

    // Desktop ========================================================================================================/
    function setScreenIsMobile(_isMobile) {
        if( typeof _isMobile === 'boolean'){
            states.isMobile = _isMobile;
        } else {
            console.warn('setScreenIsMobile(_isMobile) _isMobile не является boolean');
        }
    }

    // создаёт дополнительную выпадашку для непоместившихся элементов
    function createExtraBar() {
        var extrabarContent = '';
        for(var i = 0; i < elements.desktopItems.length; i++){
            extrabarContent = extrabarContent + elements.desktopItems.eq(i).get(0).outerHTML;
        }

        elements.nodeRoot.append(
            '<li class="menu-top__item -extraBar -has-drop-down -drop-down-inverse">' +
                '<button class="menu-top__item-name">...</button>' +
                '<div class="menu-top__drop-down">' +
                    '<ul class="menu-top__list">' +
                         extrabarContent +
                    '</ul>' +
                '</div>' +
            '</li>'
        );
        elements.nodeRoot.find('.-extraBar .menu-top__drop-down .menu-top__drop-down').remove();
        // elements.nodeRoot.find('.-extraBar').hide();

    }

    // удаляет дополнительную выпадашку
    function removeExtraBar() {
        elements.nodeRoot.find('.-extraBar').remove();
    }

    // проверяет элементы, если элементу не хватает места, то скрывает его
    function hideItem() {
        // подготавливаем выпадашку дублёра
        var dubler = elements.nodeRoot.find('.-extraBar');
        var dublerList = dubler.find('.menu-top__item');
        dubler.removeClass('-hidden');
        elements.desktopItems.removeClass('-hidden');

        // ,,,
        var width = elements.desktopContainer.width();
        var sumWidth = 0;
        states.hasExtra = false;
        for(var i = 0; i < elements.desktopItems.length; i++){
            var elWidth = elements.desktopItems.eq(i).width();
            if(sumWidth + elWidth < width){
                sumWidth = sumWidth + elWidth;
                dublerList.eq(i).addClass('-hidden');
                // console.log(i);
            } else {
                elements.desktopItems.eq(i).addClass('-hidden');
                states.hasExtra = true;
            }
        }

    }


    // Обработка событий ==============================================================================================/

    // клик по гамбургеру - вешается при инициализации
    function addHandlerMobileToggle(){
        elements.btnToggle.on('click', function () {
            toggleMenu();
            return false;
        });
    }

    // Включаем обработчики навигации в мобильном виде
    function addHandlerMobileNav(){

        // клик по ссылки в меню
        elements.nodeLinks.on('click', function () {
            showNode( $(this).attr('data-target-node-id') );
            return false;
        });

        // клик по кнопке/названию узала
        elements.btnTitle.on('click', function () {
            hideNode();
            return false;
        });
    }

    // отключаем обработчики навигации в мобильном виде
    function removeHandlerMobileNav(){
        elements.nodeLinks.off();
        elements.btnTitle.off();
    }

    // переключаем события для разных размеров экрана
    function changeScreenType() {
        if(states.isMobile){
            // переход на мобильный
            removeExtraBar();
        } else {
            // переход на десктоп
            createExtraBar();
            hideItem();
        }
    }

    // initialize =====================================================================================================/
    setOptions();  // переопределяем свойства, если это необходимо
    addElements();   // кэшируем элементы для быстрого доступа
    addHandlerMobileToggle();   // - вешается при инициализации обработку клика на гамбургер
    buildTree(); // Построение дерева и запись его в массив

    // changeScreenType(); // переключаем события для разных размеров экрана


    // public =========================================================================================================/
    return {
        // устанавливаем тип экрана
        setScreenIsMobile: function(_isMobile){
            setScreenIsMobile(_isMobile);
            changeScreenType();
        },
        // переход к функционалу мобильной или десктопной версии
        changeScreenType: function(){
            changeScreenType();
        },
        // Вывод данных для теста
        debug: function(){
            // console.log(tree);
            console.log(states.isMobile);

        }
    };
}
