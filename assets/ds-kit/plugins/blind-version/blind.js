/**
 * Модуль версии для слабовидящих
 *
 * @type {{init, destroy}}
 */
var blindVersion = (function(){

    var self = {
        default: {
            fontSize: 'blind-font-size-normal',
            fontSpace: 'blind-spacing-normal',
            fontType: 'blind-font-arial',
            images: 'blind-images-enable',
            theme: 'blind-theme-white'
        },
        settings: null,
        storageKey: 'blindVersion',
        selector: '.js-blind-settings',
        html: null
    };

    // API =============================================================================================================

    /**
     * Добавляет классы к <html> в соответствии с текущими настройками
     */
    var applySettings = function () {
        var html = document.querySelector('html');
        html.classList.forEach(function (item) {
            if( item.indexOf('blind-') === 0 ){
                document.querySelector('html').classList.remove(item);
            }
        });
        for ( key in self.settings){
           html.classList.add(self.settings[key]);
        }
    };

    /**
     * Загрузка настроек из localStorage, если они там отсутствуют, то используются дефолтные настройки
     */
    var loadSettings = function () {
        if( localStorageComponent.exist(self.storageKey) ){
            self.settings = Object.assign({}, localStorageComponent.state(self.storageKey));
        } else {
            self.settings = Object.assign({}, self.default);
            localStorageComponent.state(self.storageKey, self.settings);
        }
        applySettings();
    };

    /**
     * Обновляет текущие настройки и сохраняет их в localStorage
     *
     * @param {string} key - название настройки
     * @param {any} value - новое значение, может быть объектом
     */
    var saveSettingByKey = function (key, value) {
        var obj = {};
        obj[key] = value;
        self.settings = Object.assign({}, self.settings, obj);
        localStorageComponent.state(self.storageKey, self.settings);
        applySettings();
    };

    /**
     * Сбрасывает настройки к значениям по умолчанию
     */
    var resetSettings = function () {
        // сбрасываем настройки к зачению по умолчанию и сохраяеми их в localStorage
        self.settings = Object.assign({}, self.default);
        localStorageComponent.state(self.storageKey, self.settings);

        applySettings();

        // очищаем эктивы у кнопок и присваиваем правильные эктивы
        self.html.querySelectorAll('[data-option]').forEach(function (item) {
            item.classList.remove('is-active');
        });
        for ( key in self.default){
            self.html.querySelector('[data-option="' + self.default[key] + '"]').classList.add('is-active');
        }
    };

    // HTML ============================================================================================================

    /**
     * Добавляет html панели настроек в начало документа
     */
    var appendHTML = function () {
        self.html = document.createElement('div');
        self.html.classList.add('c-settings');
        self.html.classList.add('js-blind-settings');
        self.html.innerHTML = '' +
            '<div class="l-container">\n' +
            '    <div class="c-settings__nav">\n' +
            '        <div class="c-settings__font-size">\n' +
            '            <div class="c-settings__nav-label">Размер шрифта:</div>\n' +
            '            <div class="c-settings__btn-group">\n' +
            '                <a class="c-settings__btn ' + ((self.settings.fontSize === 'blind-font-size-small') ? 'is-active' : '') + ' c-settings__font-size-sm" href="#" data-settings="fontSize" data-option="blind-font-size-small">A</a>\n' +
            '                <a class="c-settings__btn ' + ((self.settings.fontSize === 'blind-font-size-normal') ? 'is-active' : '') + '" href="#" data-settings="fontSize" data-option="blind-font-size-normal">A</a>\n' +
            '                <a class="c-settings__btn ' + ((self.settings.fontSize === 'blind-font-size-large') ? 'is-active' : '') + ' c-settings__font-size-lg" href="#" data-settings="fontSize" data-option="blind-font-size-large">A</a>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="c-settings__theme">\n' +
            '            <div class="c-settings__nav-label">Цвета сайта:</div>\n' +
            '            <div class="c-settings__btn-group">\n' +
            '                <a class="c-settings__btn ' + ((self.settings.theme === 'blind-theme-white') ? 'is-active' : '') + '" href="#" data-settings="theme" data-option="blind-theme-white">Ц</a>\n' +
            '                <a class="c-settings__btn ' + ((self.settings.theme === 'blind-theme-black') ? 'is-active' : '') + ' c-settings__theme-black" href="#" data-settings="theme" data-option="blind-theme-black">Ц</a>\n' +
            '                <a class="c-settings__btn ' + ((self.settings.theme === 'blind-theme-blue')  ? 'is-active' : '') + ' c-settings__theme-blue" href="#" data-settings="theme" data-option="blind-theme-blue">Ц</a>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="c-settings__images">\n' +
            '            <div class="c-settings__nav-label">Изображения:</div>\n' +
            '            <div class="c-settings__btn-group">\n' +
            '                <button class="c-settings__toggle ' + ((self.settings.images === 'blind-images-disable')  ? 'is-active' : '') + '" data-settings="images" data-option-on="blind-images-disable" data-option-off="blind-images-enable"><span></span></button>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="c-settings__more"><a href="#">Настройки</a></div>\n' +
            '        <div class="c-settings__dropdown">\n' +
            '            <div class="c-settings__dropdown-font">\n' +
            '                <div class="c-settings__dropdown-title">Настройки шрифта:</div>\n' +
            '                <div class="c-settings__btn-group">\n' +
            '                    <div class="c-settings__nav-label">Выберите шрифт:</div>\n' +
            '                    <a class="c-settings__btn c-settings__font-arial ' + ((self.settings.fontType === 'blind-font-arial') ? 'is-active' : '') + '" href="#" data-settings="fontType" data-option="blind-font-arial">Arial</a>\n' +
            '                    <a class="c-settings__btn c-settings__font-times ' + ((self.settings.fontType === 'blind-font-times') ? 'is-active' : '') + '" href="#" data-settings="fontType" data-option="blind-font-times">Times New Roman</a>\n' +
            '                </div>\n' +
            '                <div class="c-settings__btn-group">\n' +
            '                    <div class="c-settings__nav-label">Интервал между буквами (Кернинг):</div>\n' +
            '                    <a class="c-settings__btn ' + ((self.settings.fontSpace === 'blind-spacing-normal') ? 'is-active' : '') + ' c-settings__spacing-sm" href="#" data-settings="fontSpace" data-option="blind-spacing-normal">Стандартный</a>\n' +
            '                    <a class="c-settings__btn ' + ((self.settings.fontSpace === 'blind-spacing-md') ? 'is-active' : '') + ' c-settings__spacing-md" href="#" data-settings="fontSpace" data-option="blind-spacing-md">Средний</a>\n' +
            '                    <a class="c-settings__btn ' + ((self.settings.fontSpace === 'blind-spacing-lg') ? 'is-active' : '') + ' c-settings__spacing-lg" href="#" data-settings="fontSpace" data-option="blind-spacing-lg">Большой</a>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="c-settings__dropdown-theme">\n' +
            '                <div class="c-settings__dropdown-title">Выбор цветовой схемы:</div>\n' +
            '                <div class="c-settings__btn-group">\n' +
            '                    <a class="c-settings__btn ' + ((self.settings.theme === 'blind-theme-white') ? 'is-active' : '') + '" href="#" data-settings="theme" data-option="blind-theme-white">Черным по белому</a>\n' +
            '                    <a class="c-settings__btn ' + ((self.settings.theme === 'blind-theme-black') ? 'is-active' : '') + ' c-settings__dropdown-theme-black" href="#" data-settings="theme" data-option="blind-theme-black">Белым по черному</a>\n' +
            '                    <a class="c-settings__btn ' + ((self.settings.theme === 'blind-theme-blue') ? 'is-active' : '') + ' c-settings__dropdown-theme-blue" href="#" data-settings="theme" data-option="blind-theme-blue">Темно-синим по голубому</a>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="c-settings__dropdown-footer">' +
            '               <a class="c-settings__btn c-settings__dropdown-reset" href="#"><span>Вернуть стандартные настройки</span></a>' +
            '               <a class="c-settings__btn c-settings__dropdown-close" href="#"><span>Закрыть панель</span></a>' +
            '           </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>';
        document.querySelector('body').appendChild(self.html);
    };

    /**
     * Удаляем добавленый html
     */
    var removeHTML = function () {
        self.html.remove();
    };

    // HANDLERS ========================================================================================================

    var addHandlerStop = function () {
        self.html.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    };

    /**
     * Добавляет обработичик на клики по кнопкам
     */
    var addHandlerBtns = function () {
        self.html.querySelectorAll('.c-settings__btn:not(.c-settings__dropdown-reset):not(.c-settings__dropdown-close)').forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                this.closest('.c-settings__btn-group').querySelectorAll('.c-settings__btn').forEach(function (item) {
                    item.classList.remove('is-active');
                });
                this.classList.add('is-active');
                saveSettingByKey(this.dataset.settings,  this.dataset.option);
            });
        });
    };

    /**
     * Добавляет обработичик на клики по переключателям
     */
    var addHandlerToggle = function () {
        self.html.querySelectorAll('.c-settings__toggle').forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                this.classList.toggle('is-active');
                saveSettingByKey(this.dataset.settings, (this.classList.contains('is-active')) ? this.dataset.optionOn : this.dataset.optionOff);
            });
        })
    };

    /**
     * Добавляет обработичики связанные с выпадашкой
     */
    var addHandlerDropdown = function () {
        var dropdown = self.html.querySelector('.c-settings__dropdown');

        // переключает по клику на кнопку "настройки"
        self.html.querySelector('.c-settings__more a').addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('is-visible');
        });

        // закрывать по клику за пределы дропдауна
        document.addEventListener('click', function (e) {
            e.preventDefault();
            dropdown.classList.remove('is-visible');
        });

        // закрывать по клику на кнопку 'закрыть'
        self.html.querySelector('.c-settings__dropdown-close').addEventListener('click', function (e) {
            e.preventDefault();
            dropdown.classList.remove('is-visible');
        });
    };

    /**
     * Добавляет обработичик на клик по кнопке "Сбросить настройкк"
     */
    var addHandlerReset = function () {
        self.html.querySelector('.c-settings__dropdown-reset').addEventListener('click', function (e) {
            e.preventDefault();
            resetSettings();
        });
    };

    /**
     * Объединяем обработчики в одну функцию
     */
    var combineHandler = function () {
        addHandlerStop();
        addHandlerBtns();
        addHandlerToggle();
        addHandlerDropdown();
        addHandlerReset();
    };

    // PUBLIC ==========================================================================================================

    return {
        /**
         * Инициализация
         */
        init: function(){
            loadSettings();
            appendHTML();
            combineHandler();
        },
        /**
         * Разрушает
         */
        destroy: function () {
            removeHTML();
            resetSettings();
        }
    }

}());
