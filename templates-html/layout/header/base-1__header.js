// add menu-mobile--switcher-btn placeholder
(function placeholderMenuMobileSwitcher() {
    // находим кнопку, открывающую меню
    var switchBtn = document.querySelectorAll('.js-menu-mobile .main-menu__switcher')[0];
    // клонируем кнопку переключалку
    var clone = switchBtn.cloneNode(true);
    // добавляем ей класс
    clone.classList.add('header-middle__switch-btn');
    // добавляем обработчик, который свяжет клик на клона с кликом на реальную кнопку
    clone.addEventListener('click', function () {
        document.querySelectorAll('.main-menu .main-menu__switcher-btn')[0].click();
    });
    // находим элемент, после которого нужно вставить кнопку
    var appendAfterElement = document.querySelectorAll('.js-logo-header')[0];
    // вставляем
    appendAfterElement.parentNode.insertBefore(clone,appendAfterElement.nextSibling);
})();

$('.js-header-modal-cart').modalHtml({
    title: 'Корзина',
    html: '' +
    '<div class="modal-html__phone">' +
        '<a href="tel:88000000000">8 (800) 000-00-00</a>' +
        '<a href="tel:88000000000">8 (800) 000-00-00</a>' +
    '</div>' +
    '<a class="btn -fullwidth modal-html__btn" href="#">Корзина</a> ' +
    '',
    maxResolution: 480
});
