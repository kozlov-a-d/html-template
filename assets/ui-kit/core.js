//=include core/scroll.component.js
//=include core/goal.component.js

(function() {
    window.app = {
        methods:{},
        scroll : {},
        goal : {}
    };

}());

app.scroll = scrollComponent;
// app.scroll.current(value) - get/set value
// app.scroll.direction() - return 'down'|'up'
// app.scroll.disable() - disable scroll
// app.scroll.enable() - enable scroll;

app.goal = goalComponent;
// app.goal.reach(goalName, event) - trigger reach goal  ( event="onload" for window.load )
// app.goal.debug()
