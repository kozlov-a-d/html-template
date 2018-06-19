/*
	v 1.0.0
	
	инициализация
	$('.tabs').customTabs({});
	
	планы
	-переключение по наведению
	-плавная смена
	-при переходе по ссылке с якорем, указывающим на номер таба, активируется соответствующий таб.
	
	-запоминается активная вкладка после перезагрузки страницы (с помощью cookie).
	-запоминается активная вкладка после перезагрузки страницы (с помощью localStorage, меньше кода по сравнению с cookie).

*/
(function( $ ){
	
	var defaults = {
        className: '',           			// дополнительный класс если нужен
		startTab: 0,          	 			// значение по умолчанию, если не задано, отсчёт начинается с нуля
		onChange: function(){ }, 			// функция вполняемая после каждой смены таба
        tabsId: 0,
        selectors: {
            navItem: '.js-tabs-nav-item',
            contentItem: '.js-tabs-content-item'
        }
    };	
	
	var methods = {
	
		init : function( options ) { 
		
			options = $.extend({}, defaults, options);
			
			this.each(function() {

                var container = $(this),
                    tab_name = container.find(options.selectors.navItem),
                    tab_content = container.find(options.selectors.contentItem),
                    // id для таба
                    tabsId = Math.floor((Math.random() * 1000000) + 1);

                container.addClass(options.className);
				container.attr('data-tab-id', tabsId);
				container.addClass('is-initialized');   // добавляем класс, по которому можно следить используется ли скрипт
				
				// добавляем значения
				tab_name.each(function(index) { $(this).attr('data-tab-num', index); $(this).attr('data-tab-id', tabsId); });
				tab_content.each(function(index) { $(this).attr('data-tab-num', index); $(this).attr('data-tab-id', tabsId); });

				// выводим первый или указанный в опциях, если он возможен
				if( options.startTab !== 0 && options.startTab < tab_name.size() ) { switchTabs(options.startTab); }
				else { switchTabs(0); }
				
				// нажатие на таб
				$(tab_name).on('click', function () {
					switchTabs( $(this).attr('data-tab-num'));
				});
				
				// смена таба
				function switchTabs(num){
					container.find('[data-tab-id=' + tabsId + ']').removeClass('is-active');
					container.find(options.selectors.contentItem + '[data-tab-id=' + tabsId + ']').hide();
					container.find('[data-tab-id=' + tabsId + '][data-tab-num=' + num + ']').addClass('is-active');
					container.find('[data-tab-id=' + tabsId + '][data-tab-num=' + num + ']').show();
					container.find(options.selectors.contentItem + '[data-tab-id=' + tabsId + ']').removeClass('is-active');

					var currentContent = container.find(options.selectors.contentItem +'[data-tab-id=' + tabsId + '][data-tab-num=' + num + ']');
                    currentContent.addClass('is-active');
					options.onChange();
				}

			});
		}
		
	};
	 
	 
	$.fn.tabs = function(method) {

		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Метод ' +  method + ' не существует в jQuery.tabs' );
		}    

	};
 
})( jQuery );