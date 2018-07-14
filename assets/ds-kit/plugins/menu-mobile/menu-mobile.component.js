var MenuMobile = function (_id, _tree) {

    var id = _id;
    var tree = _tree;
    var activeNode = 0;
    var html = {
        root: null,
        header: null,
        titleBtn: null,
        closeBtn: null,
        list: null,
        listItem: []
    };

    var transitionEvent = (function whichAnimationEvent(){
        var t,
            el = document.createElement("fakeelement");

        var animations = {
            "animation"      : "animationend",
            "OAnimation"     : "oAnimationEnd",
            "MozAnimation"   : "animationend",
            "WebkitAnimation": "webkitAnimationEnd"
        };

        for (t in animations){
            if (el.style[t] !== undefined){
                return animations[t];
            }
        }
    })();

    var render = function () {
        html.root = document.createElement('div');
        html.root.classList.add('menu-mobile');
        html.root.id = 'menu-mobile-' + id;
        html.root.classList.add('is-closed');
        document.body.appendChild(html.root);

        addToggleAnimateHandler();
        renderHeader();
        generateList();
        renderList();
    };

    var renderHeader = function () {
        html.header = document.createElement('div');
        html.header.classList.add('menu-mobile__header');
        html.root.appendChild(html.header);

        var titleWrap = document.createElement('div');
        titleWrap.classList.add('menu-mobile__title');
        html.header.appendChild(titleWrap);

        html.titleBtn = document.createElement('button');
        html.titleBtn.classList.add('menu-mobile__title-btn');
        titleWrap.appendChild(html.titleBtn);

        html.closeBtn = document.createElement('button');
        html.closeBtn.classList.add('menu-mobile__close-btn');
        html.closeBtn.innerHTML = '<span></span>';
        html.header.appendChild(html.closeBtn);
    };

    var updateHeader = function () {
        html.titleBtn.innerHTML = '<i class="menu-mobile__icon-arrow-right"></i>' + tree[activeNode].name;
        html.titleBtn.dataset.node = activeNode;
    };

    var renderList = function () {
        html.list = document.createElement('ul');
        html.list.classList.add('menu-mobile__list');
        html.root.appendChild(html.list);
    };

    var updateList = function () {
        html.list.innerHTML = '';

        for (var i = 0; i < tree.length; i++ ){
            if(tree[i].parentId === parseInt(activeNode)){
                var item = html.listItem[i];
                html.list.appendChild(item);
            }
        }

        html.list.childNodes.forEach(function (element) {
            element.addEventListener(transitionEvent, function () {
                element.classList.remove('menu-mobile-item-show-enter-active');
                element.removeEventListener(transitionEvent, function () {});
            });
            element.classList.add('menu-mobile-item-show-enter-active');
        });
    };

    var generateList = function () {
        for (var i = 0; i < tree.length; i++ ){
            var item = document.createElement('li');
            item.classList.add('menu-mobile__item');

            var link = document.createElement('a');
            link.classList.add('menu-mobile__item-name');
            link.innerText = tree[i].name.replace(/\r?\n/g, "");
            link.href = tree[i].href;
            item.appendChild(link);

            var btn = document.createElement('button');
            btn.classList.add('menu-mobile__item-btn');
            if (tree[i].hasChild){
                btn.classList.add('hasChild');
                btn.innerHTML = '<i class="menu-mobile__icon-more"></i>';
                btn.dataset.id = i;
                btn.addEventListener('click', function (e) {
                    updateActiveNode( e.target.dataset.id);
                });
            } else {
                btn.innerHTML = '<i class="menu-mobile__icon-arrow-left"></i>';
            }
            item.appendChild(btn);

            html.listItem.push(item);
        }
    };

    var close = function () {
        html.root.classList.add('is-closing','menu-mobile-toggle-leave-active');
        activeNode = 0;
    };

    var open = function () {
        updateActiveNode(0);
        html.root.classList.remove('is-closed');
        html.root.classList.add('is-opening','menu-mobile-toggle-enter-active');
    };

    var addToggleAnimateHandler = function () {
        html.root.addEventListener(transitionEvent, function () {
            if( html.root.classList.contains('is-opening')){
                html.root.classList.remove('is-opening', 'menu-mobile-toggle-enter-active');
            }
            if( html.root.classList.contains('is-closing')){
                html.root.classList.add('is-closed');
                html.root.classList.remove('is-closing', 'menu-mobile-toggle-leave-active');
            }
            html.root.removeEventListener(transitionEvent, function () {});
        });
    };

    var updateActiveNode = function (_id) {
        activeNode = _id;
        updateHeader();
        updateList();
    };

    var addHandler = function () {

        html.closeBtn.addEventListener('click', function () {
            close();
        });

        html.titleBtn.addEventListener('click', function () {
            if(activeNode === 0){
                close();
            } else {
                updateActiveNode(activeNode = tree[activeNode].parentId || 0);
            }
        });
    };

    return Object.freeze({
        init: function () {
            render();
            addHandler();
        },
        open: open,
        close: close
    });
};
