// <div class="js-spoiler hidden-md">
//  <!-- тут контент который нужно скрывать -->
// </div>


// <div class="spoiler js-spoiler"
// data-mobile-only="true"
// data-text-opened="Скрыть"
// data-text-closed="Показать полностью">
//  <p>Text</p>
//  <button class="spoiler__btn" ><span>Btn</span></button>
// </div>

$('.js-spoiler').each(function () {

    var self = $(this);

    // кэшируем data-атрибуты, подставляя значения по умолчанию, если атрибуты не заданы
    var btnTextOpened = self.attr('data-text-opened') ? self.attr('data-text-opened') : 'Скрыть',
        btnTextClosed = self.attr('data-text-closed') ? self.attr('data-text-closed') : 'Смотреть полностью',
        btnClass = self.attr('data-btn-class') ? self.attr('data-btn-class') : '' ;

    // добавляем необходимый html
    self.addClass('spoiler__content');
    self.wrap('<div class="spoiler"></div>');
    self.parent().append('<button class="spoiler__btn btn ' + btnClass + '"><span>' + btnTextClosed + '</span></button>');

    // кэшируем элементы
    var container = self.parent(),
        content = self,
        btn = container.find('.spoiler__btn');


    // добавляем класс hidden-*/visible-* для кнопки если надо
    // класс добавляется, если у контента есть класс hidden-*
    var classList = content.attr('class').split(/\s+/),
        isResponse = false;
    $.each(classList, function(index, item) {
        if (item.substring(0,7) === 'hidden-') {
            btn.addClass('hidden visible-' + item.substring(7,9));
            isResponse = true;
        }
    });
    if(!isResponse){
        content.addClass('hidden');
    }

    // вешаем события
    btn.on('click', function(){
        content.slideToggle();
        btn.toggleClass('is-opened');
        if(btn.hasClass('is-opened')){
            btn.find('span').text(btnTextOpened);
        } else {
            btn.find('span').text(btnTextClosed);
        }
    });
});