function initMenuMobile(id, data) {

    var menuMobile = new Vue({
        el: '#menu-mobile-' + id,
        data: {
            el: '#menu-mobile-' + id,
            tree: data,
            activeNode: {
                id: data[0].id,
                name: data[0].name,
                parentId: data[0].parentId
            },
            show: false
        },
        template:
        '<transition name="menu-mobile-toggle" mode="out-in">' +
            '<div class="menu-mobile" id="menu-mobile-' + id + '" v-if="show">' +

                // menu-mobile-header begin
                '<transition name="menu-mobile-header-toggle">' +
                    '<div class="menu-mobile__header">' +
                        '<div class="menu-mobile__title">' +
                            '<button class="menu-mobile__title-btn" :data-node="activeNode.id" v-on:click.prevent="activeParentNode">' +
                                '<i class="menu-mobile__icon-arrow-right" v-if="activeNode.id"></i>' +
                                '{{ activeNode.name }}' +
                            '</button>' +
                        '</div>' +
                        '<button class="menu-mobile__switcher-btn" v-on:click.prevent="closeMenu"><span></span></button>' +
                    '</div>' +
                '</transition>' +

                // menu-mobile__list begin
                '<ul class="menu-mobile__list">' +
                    '<template  v-for="item in tree">' +
                    '<menu-mobile-item v-if="item.parentId === activeNode.id" v-bind:item="item" :key="item.id" ></menu-mobile-item>' +
                    '</template>' +
                '</ul>' +

            '</div>' +
        '</transition>',
        methods: {
            getNodeParam: function (input) {
                var result = {};
                result.id = input.id;
                result.name = input.name;
                result.parentId = input.parentId;
                return result;
            },
            closeMenu: function () {
                // $( this.el).hide();
                this.activeNode = menuMobile.getNodeParam( this.tree[0] );
                app.scroll.enable();
                this.show = false;
            },
            activeParentNode: function (event) {
                if( this.activeNode.parentId !== null ){
                    var parentId = this.activeNode.parentId;
                    for(var i = 0; i < menuMobile.tree.length; i++){
                        if (menuMobile.tree[i].id === parentId) {
                            menuMobile.activeNode = menuMobile.getNodeParam( menuMobile.tree[i] );
                        }
                    }
                } else {
                    menuMobile.closeMenu();
                }
            }
        },
        components: {
            'menu-mobile-item': {
                props: ['item', 'activeNode'],
                template:
                '<transition name="menu-mobile-item-show" mode="out-in">' +
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
                    '</li>' +
                '</transition>',
                methods: {
                    showChild: function (event) {
                        menuMobile.activeNode = menuMobile.getNodeParam( this._props.item );
                    }
                }
            }
        }
    });

    return menuMobile;
}


