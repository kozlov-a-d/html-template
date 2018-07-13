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

    var render = function () {
        html.root = document.createElement('div');
        html.root.classList.add('menu-mobile');
        html.root.id = 'menu-mobile-' + id;

        document.body.appendChild(html.root);

        renderHeader();
        generateList();

        renderList();
        renderListItems();
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
        html.titleBtn.innerText = tree[activeNode].name;
        titleWrap.appendChild(html.titleBtn);

        html.closeBtn = document.createElement('button');
        html.closeBtn.classList.add('menu-mobile__switcher-btn');
        html.closeBtn.innerHTML = '<span></span>';
        html.header.appendChild(html.closeBtn);
    };

    var renderList = function () {
        html.list = document.createElement('ul');
        html.list.classList.add('menu-mobile__list');
        html.root.appendChild(html.list);

    };
    var renderListItems = function () {
        html.list.innerHTML = '';

        for (var i = 0; i < tree.length; i++ ){
            if(tree[i].parentId === activeNode){
                html.list.appendChild(html.listItem[i]);
            }
        }
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
                btn.setAttribute('data-id',  i);
                btn.addEventListener('click', function (e) {
                    updateActiveNode( e.target.getAttribute('data-id'));
                });
            } else {
                btn.innerHTML = '<i class="menu-mobile__icon-arrow-left"></i>';
            }
            item.appendChild(btn);

            html.listItem.push(item);

        }
    };

    var hide = function () {
        html.root.classList.remove('active-open');
        html.root.classList.add('active-leave');
    };

    var open = function () {
        html.root.classList.remove('active-leave');
        html.root.classList.add('active-open');
    };

    var updateActiveNode = function (_id) {
        activeNode = _id;
        console.log('new active ' +  _id);
        console.log(tree[_id]);
        console.log(activeNode);
        renderListItems();
    };

    var addHandler = function () {

        html.closeBtn.addEventListener('click', function () {
            hide();
        });

        html.titleBtn.addEventListener('click', function () {
            if(activeNode === 0){
                hide();
            } else {
                updateActiveNode(activeNode = tree[activeNode].parentId);
            }

        });


    };



    return Object.freeze({
        init: function () {
            console.log(id);
            render();
            addHandler();
        }
    });

};