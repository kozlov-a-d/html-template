var menuMobile = new MenuMobile({});
$('.js-menu-smart').menuSmart();

// gпоправить мобайл меню
// add menu-mobile--switcher-btn placeholder
(function placeholderMenuMobileSwitcher() {
    // находим кнопку, открывающую меню
    var switchBtn = document.querySelectorAll('.js-menu-mobile .menu-top__switcher')[0];
    // клонируем кнопку переключалку
    var clone = switchBtn.cloneNode(true);
    // добавляем ей класс
    clone.classList.add('header-middle__switch-btn');
    // добавляем обработчик, который свяжет клик на клона с кликом на реальную кнопку
    clone.addEventListener('click', function () {
        menuMobile.showMenu();
    });
    // находим элемент, после которого нужно вставить кнопку
    var appendAfterElement = document.querySelectorAll('.js-logo-header')[0];
    // вставляем
    appendAfterElement.parentNode.insertBefore(clone,appendAfterElement.nextSibling);
})();
