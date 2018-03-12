// COMPONENTS ==========================================================================================/

//=include ./components/scroll.component.js
//=include ./components/goal.component.js

(function() {
    window.app = {
        methods:{},
        scroll: {},
        goal: {},
        // modal: {}
    };

}());

app.scroll = scrollComponent;
// app.scroll.current(value) - get/set value
// app.scroll.direction() - return 'down'|'up'
// app.scroll.disable() - disable scroll
// app.scroll.enable() - enable scroll;
// - app.scroll.speed() - return scroll speed value

app.goal = goalComponent;
// app.goal.trigger(name, params) - trigger goal
// window.onload = function() { app.goal.trigger(name, params) };  - trigger goal after window load
// app.goal.debug()


// UTILITIES ===========================================================================================/

//=include ./temp/media-event-listener.js


// JQUERY PLUGINS ======================================================================================/

//=include ./jquery-plugins/menu-smart/menu-smart.jquery.js
//=include ./jquery-plugins/menu-mobile/menu-mobile.vue.js
//=include ./jquery-plugins/menu-mobile/menu-mobile.jquery.js
//=include ./jquery-plugins/modal-ajax/modal-ajax.jquery.js
//=include ./jquery-plugins/tables/tables.js
//=include ./jquery-plugins/spoiler/spoiler.js


// CONTENT PLUGINS =====================================================================================/




