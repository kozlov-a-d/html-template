(function( $ ){
	
	var defaults = {
        className: '',           			// дополнительный класс если нужен
		minValue: 0,            			// минимальное допустимое значение
		maxValue: 1000,          	 		// максимально допустимое значение
		speedChange: 100,       	 		// скорость изменения значений (мс)
		stepValue: 1,          	 			// шаг значения 
		
		/*пока не работает*/
		defaultValue: 0,          	 		// значение по умолчанию, если не задано
		
		onChange: function(){ }, 			// функция вполняемая после каждого изменения значения инпута
		onFinalChange: function(){ } 		// функция вполняемая после последнего изменения значения инпута
    };	
	
	var methods = {
	
		init : function( options ) { 

			options = $.extend({}, defaults, options);
			
			this.each(function() {

				var timer;
				
				$(this).wrap("<div class='custom-number " + options.className + "'></div>");
				$(this).after("<span class='custom-number__btn -plus'></span><span class='custom-number__btn -minus'></span>");
				
				var container = $(this).parent('.custom-number');
				var input = $(container).find('input');
				var minus = $(container).find('.-minus');
				var plus = $(container).find('.-plus');
				
				$(minus).on('mousedown', function () {
					var data = input.val()*1;
					if(data > options.minValue){
						input.val(data - options.stepValue).change();
						data = data - options.stepValue;
						options.onChange();
					}
					timer = setInterval(function(){ 
						if(data > options.minValue){
							input.val(data - options.stepValue).change();
							data = data - options.stepValue;
							options.onChange();
						}
					}, options.speedChange);
				});
				
				$(plus).on('mousedown', function () {
					var data = input.val()*1;
					if(data < options.maxValue){
						input.val(data + options.stepValue).change();
						data = data + options.stepValue;
						options.onChange();
					}
					timer = setInterval(function(){ 
						if(data < options.maxValue){
							input.val(data + options.stepValue).change();
							data = data + options.stepValue;
							options.onChange();
						}
					}, options.speedChange); 
				});
				
				$(container).find('span').on('mouseup mouseleave', function () {	
					clearInterval(timer);
					options.onFinalChange();
				});

				
			});
		}
		
	};
	 
	$.fn.customNumber = function(method) {

		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Метод ' +  method + ' не существует в jQuery.customNumber' );
		}    

	};
 
})( jQuery );