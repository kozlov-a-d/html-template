## Get Started

html:

```html
<nav class="js-menu-mobile">
    <button data-menu-mobile--switcher-btn>menu</button>
    <ul data-menu-mobile--root>
        <li data-menu-mobile--has-drop-down>
            <a data-menu-mobile--item-name>Пунк 1</a>
            <div>
                <ul>
                    <li><a data-menu-mobile--item-name>Пунк 1.1</a></li>
                    <li><a data-menu-mobile--item-name>Пунк 1.2</a></li>
                    <li><a data-menu-mobile--item-name>Пунк 1.3</a></li>
                    <li><a data-menu-mobile--item-name>Пунк 1.4</a></li>
                    <li><a data-menu-mobile--item-name>Пунк 1.5</a></li>
                </ul>
            </div>
        </li>
        <li><a data-menu-mobile--item-name>Пунк 2</a></li>
        <li><a data-menu-mobile--item-name>Пунк 3</a></li>
        <li><a data-menu-mobile--item-name>Пунк 4</a></li>
        <li><a data-menu-mobile--item-name>Пунк 5</a></li>
        <li><a data-menu-mobile--item-name>Пунк 6</a></li>
    </ul>
</nav>
```
javascript:

```javascript
$('.js-menu-mobile').menuMobile();
```
