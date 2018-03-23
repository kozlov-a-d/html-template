(function () {
    var self = $('.js-blind-settings');
    var dropdown =  self.find('.c-settings__dropdown');

    if(localStorage.getItem('settingsLoaded')){
        setSettings('font-size',localStorage.getItem('font-size'));
        setSettings('font-space',localStorage.getItem('font-space'));
        setSettings('font-type',localStorage.getItem('font-type'));
        setSettings('images',localStorage.getItem('images'));
        setSettings('theme',localStorage.getItem('theme'));
    }else{
        localStorage.setItem('settingsLoaded',true);
        resetSettings();
    }

    self.find('.c-settings__more a').on('click',function (event) {
        dropdown.toggle();
        event.preventDefault();
    });
    self.on('click',function (event) {
        event.stopPropagation();
    });
    self.find('.c-settings__dropdown-close').on('click',function (event) {
        event.preventDefault();
        dropdown.hide();
    });
    $(window).on('click',function (event) {
        dropdown.hide();
    });

    self.find('.c-settings__dropdown-reset').on('click',function (event) {
        resetSettings();
        event.preventDefault();
    });

    self.find('.c-settings__toggle').on('click',function (event) {
        $(this).toggleClass('is-active');
        if($(this).is('.is-active')){
            $(this).attr('data-option', $(this).data('option-on'));
        }else{
            $(this).attr('data-option', $(this).data('option-off'));
            localStorage.setItem($(this).data('settings'),$(this).data('option-off'));
        }
        updateSettings(true);
        event.preventDefault();
    });



    self.find('.c-settings__btn').on('click',function (event) {
        var settings = $(this).data('settings');
        var option = $(this).data('option');
        $(this).addClass('is-active');
        self.find('[data-settings="'+settings+'"]').removeClass('is-active');
        self.find('[data-option="'+option+'"]').addClass('is-active');
        updateSettings(true);
        event.preventDefault();
    });


    function setSettings(settings,option) {
        self.find('[data-settings="'+settings+'"]').each(function () {
            $(this).removeClass('is-active');
        });
        self.find('[data-option="'+option+'"]').addClass('is-active');
        self.find('[data-option-on="'+option+'"]').addClass('is-active');
        self.find('[data-option-of="'+option+'"]').removeClass('is-active');
        updateSettings();
    }
    function resetSettings() {
        $('html').attr('class','');
        self.find('[data-option]').each(function () {
            $(this).removeClass('is-active');
        });
        self.find('[data-option="font-size-normal"]').addClass('is-active');
        self.find('[data-option="theme-white"]').addClass('is-active');
        self.find('[data-option="spacing-normal"]').addClass('is-active');
        self.find('[data-option="font-arial"]').addClass('is-active');
        updateSettings(true);
    }
    function updateSettings(updateStorage) {
        $('html').attr('class','');
        self.find('[data-option].is-active').each(function () {
            var settings = $(this).data('settings');
            var option = $(this).data('option');
            $('html').addClass(option);
            if(updateStorage){
                localStorage.setItem(settings,option);
            }
        });

    }

}());