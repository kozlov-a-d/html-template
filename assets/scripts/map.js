(function( $ ) {

    var methods = {

        init : function( customOptions ) {

            this.each(function() {

                var $map = $(this);

                // Создаем объект со всеми необходимыми опциями
                var optionsInit = makeOptions($map);
                if(!optionsInit){
                    console.warn('Ошибка инициализации');
                    return;
                }

                // Инициализируем карту
                mapInitial(optionsInit.type);

                // Создание объекта с необходимыми опциями
                function makeOptions($map){
                    var options, idMap, type, dataCenter, center, mCenter, coords, labels, descriptions, placemarks, dataZoom, zoom, mobileZoom, breakPoint, optionsInit;
                    options = {
                        type: 'yandex',
                        zoom: '18;18',
                        breakPoint: 768
                    };

                    // Генерируем идентификатор для карты
                    idMap = 'js-map-id-' + Math.round( Math.random()*10000);
                    // Устанавливаем идентификатор блоку с картой
                    $map.attr('id', idMap);
                    // Объединяем стандартные и переданные опции
                    options = $.extend(true, options, customOptions);
                    // Получаем тип карты
                    type = checkAttr($map,'data-map-type',';',false);
                    // console.log(type);
                    if(!type){
                        type = options.type;
                    }
                    // Получаем координаты точек на карте
                    coords = checkAttr($map,'data-map-coords',';',true,true);
                    if(!coords){
                        return;
                    }
                    // Получаем координаты центра
                    dataCenter = checkAttr($map,'data-map-center',';',true,true);
                    if(!dataCenter){
                        dataCenter = [];
                        dataCenter[0] = coords[0];
                        dataCenter[1] = coords[1];
                    }
                    center = [+dataCenter[0],+dataCenter[1]];
                    mCenter = [];
                    if(dataCenter[2] && dataCenter[3]){
                        mCenter[0] = +dataCenter[2];
                        mCenter[1] = +dataCenter[3];
                    } else {
                        mCenter[0] = +dataCenter[0];
                        mCenter[1] = +dataCenter[1];
                    }
                    // Получаем подписи к маркерам на карте
                    labels = checkAttr($map,'data-map-label',';',false,true);
                    // Получаем описания точек на карет
                    descriptions = checkAttr($map,'data-map-desc',';',false,true);
                    // Создаем массив с маркерами, которые будут на карте
                    placemarks = placemarkMake(coords,labels,descriptions);
                    // Получаем значение зума
                    dataZoom = checkAttr($map,'data-map-zoom',';',false,true);
                    if(!dataZoom){
                        dataZoom = options.zoom;
                    }
                    zoom = +dataZoom[0];
                    (dataZoom[1]) ? mobileZoom = +dataZoom[1] : mobileZoom = +dataZoom[0];
                    //Получаем значение точки перехода от десктопной версии к мобильной
                    breakPoint = +checkAttr($map,'data-map-breakpoint',';',false,true);
                    if(!breakPoint){
                        breakPoint = options.breakPoint;
                    }
                    optionsInit = {
                        idMap:idMap,
                        type:type,
                        center: center,
                        mobileCenter: mCenter,
                        placemarks:placemarks,
                        zoom:zoom,
                        mobileZoom:mobileZoom,
                        breakPoint:breakPoint
                    };
                    return optionsInit;
                }
                // Инициализация карты
                function mapInitial(type) {
                    if(type === 'yandex'){
                        initYandex();
                    } else if(type === 'google'){
                        initGoogle();
                    }
                }
                // Инициализация Яндекс.Карты
                function initYandex(){
                    function initMaps(){
                        // console.log(optionsInit.zoom);
                        // console.log(typeof optionsInit.zoom)
                        mapMain = new ymaps.Map(optionsInit.idMap, {
                            center: optionsInit.center,
                            zoom: optionsInit.zoom,
                            scroll:false,
                            duration: 1000
                        });

                        mapMain.behaviors.disable('scrollZoom');

                        for(var i = 0; i < optionsInit.placemarks.length; i++){

                            var placemark = optionsInit.placemarks[i];
                            var placemarkCoords = placemark[0];
                            var placemarkLabel = placemark[1];
                            var placemarkDescription = placemark[2];

                            mapMain.geoObjects
                                .add(new ymaps.Placemark(placemarkCoords, {
                                        iconCaption: placemarkLabel,
                                        balloonContent: placemarkDescription
                                    }
                                ));
                        }
                    }
                    ymaps.ready(initMaps);

                    var lastResolution = 0;

                    function mapResponsive() {
                        windowWidth = window.innerWidth;
                        if(windowWidth <= optionsInit.breakPoint && lastResolution > optionsInit.breakPoint || windowWidth <= optionsInit.breakPoint && lastResolution === 0){
                            console.log('yandex-mobile');
                            mapMain.setCenter(optionsInit.mobileCenter);
                            mapMain.setZoom(optionsInit.mobileZoom);
                            mapMain.behaviors.disable('drag');
                            mapMain.behaviors.enable('multiTouch');

                        }else if(windowWidth > optionsInit.breakPoint && lastResolution <= optionsInit.breakPoint && lastResolution !== 0){
                            console.log('yandex-desctop');
                            mapMain.setCenter(optionsInit.center);
                            mapMain.setZoom(optionsInit.zoom);
                            mapMain.behaviors.enable('drag');
                            mapMain.behaviors.enable('multiTouch');
                        }
                        lastResolution = windowWidth;
                    }
                    ymaps.ready(mapResponsive);

                    $(window).on('resize',function(){
                        ymaps.ready(mapResponsive);
                    });
                }
                // Инициализация Google Map
                function initGoogle() {
                    initMap();
                    function initMap() {

                        var markers = optionsInit.placemarks;
                        var infoWindow = new google.maps.InfoWindow(), marker, i;

                        mapMain = new google.maps.Map(document.getElementById(optionsInit.idMap), {
                            center: {lat: optionsInit.center[0], lng: optionsInit.center[1]},
                            zoom: optionsInit.zoom
                        });

                        for (i = 0; i < markers.length; i++) {
                            marker = new MarkerWithLabel({
                                position: {lat: +markers[i][0][0], lng: +markers[i][0][1]},
                                map: mapMain,
                                title: markers[i][1],
                                labelContent: markers[i][1]
                            });

                            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                                return function () {
                                    infoWindow.setContent(markers[i][2]);
                                    infoWindow.open(mapMain, marker);
                                }
                            })(marker, i));
                        }

                    }

                    var lastResolution = 0;

                    function mapResponsive() {
                        windowWidth = window.innerWidth;
                        if(windowWidth <= optionsInit.breakPoint && lastResolution > optionsInit.breakPoint || windowWidth <= optionsInit.breakPoint && lastResolution === 0){
                            mapMain.setOptions({ 'draggable': false });
                            mapMain.setOptions({ 'scrollwheel': false });
                            mapMain.setCenter({lat: optionsInit.mobileCenter[0], lng: optionsInit.mobileCenter[1]});
                            mapMain.setZoom(optionsInit.mobileZoom);
                        } else if(windowWidth > optionsInit.breakPoint && lastResolution <= optionsInit.breakPoint && lastResolution !== 0){
                            mapMain.setOptions({ 'draggable': true });
                            mapMain.setOptions({ 'scrollwheel': true });
                            mapMain.setCenter({lat: optionsInit.center[0], lng: optionsInit.center[1]});
                            mapMain.setZoom(optionsInit.zoom);
                        }
                        google.maps.event.trigger(mapMain, 'resize');
                        lastResolution = windowWidth;
                    }
                    $(window).on('resize',function () {
                        mapResponsive();
                    });

                    mapResponsive();

                }
                // Проверка на наличие атрибута
                function checkAttr(element,attr,separator,drop, slice) {
                    var result;
                    if(!slice){
                        if(!element.attr(attr)) {
                            console.warn('Пустой атрибут: ' + attr);
                            return;
                        } else {
                            result = $map.attr(attr);
                            return result;
                        }
                    } else {
                        if(drop){
                            if(!element.attr(attr)) {
                                console.warn('Пустой атрибут: ' + attr);
                                return null;
                            } else {
                                result = element.attr(attr).split(separator);
                                return result;
                            }
                        } else {
                            if(!element.attr(attr)) {
                                console.warn('Пустой атрибут: ' + attr);
                            } else {
                                result = $map.attr(attr).split(separator);
                                return result;
                            }
                        }
                    }
                }
                // Создание массива маркеров на карте
                function placemarkMake(coords,labels,descriptions) {
                    var placemarks = [];
                    for( var i = 0; coords.length !== 0; i++){
                        placemarks[i] = [];
                        placemarks[i].push([]);
                        placemarks[i][0].push(+coords.shift(),+coords.shift());
                        placemarks[i].push(labels[i]);
                        placemarks[i].push(descriptions[i]);
                    }
                    return placemarks;
                }


            });
        }

    };

    $.fn.mapInit = function(method) {

        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод ' +  method + ' не существует в jQuery.mapInit' );
        }

    };
})(jQuery);

if($('.js-map').length){
    $('.js-map').each(function () {
        $(this).mapInit('init',{
            type:'yandex'
        });
    });
}
