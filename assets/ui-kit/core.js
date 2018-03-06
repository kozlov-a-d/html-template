//=include components/scroll.component.js
//=include components/goal.component.js

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


