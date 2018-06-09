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
    // находим элемент, куда нужно вставить кнопку
    var appendWrapperElement = document.querySelectorAll('.js-header-middle')[0];
    // вставляем
    appendWrapperElement.appendChild(clone);
})();

(function headerMobile() {
    var headerMobile = document.createElement('div');
    headerMobile.classList.add('header-mobile');
    var appendAfterElement = document.querySelectorAll('.js-header-middle')[0].parentNode;
    appendAfterElement.parentNode.insertBefore(headerMobile,appendAfterElement);

    var clone, temp;

    temp = document.querySelectorAll('.js-header-phone')[0];
    clone = temp.cloneNode(true);
    clone.classList.remove('header-contact__text');
    headerMobile.appendChild(clone);

    temp = document.querySelectorAll('.js-header-clients')[0];
    clone = temp.cloneNode(true);
    clone.classList.remove('header-middle__btn');
    clone.classList.add('header-mobile__btn');
    headerMobile.appendChild(clone);

    temp = document.querySelectorAll('.js-header-cart')[0];
    clone = temp.cloneNode(true);
    clone.classList.remove('header-middle__btn');
    clone.classList.add('header-mobile__btn');
    headerMobile.appendChild(clone);
    
})();