## Embed Video Module 
Модуль для вставки видео с youtube
>Ссылка на файл в gitlab [resize.component.js](https://git.darvins.ru/darvin-cms/skeleton/blob/master/assets/ds-kit/plugins/embed-video)

### Методы:
#### init
Указываем селектор элементов, внутрь которых загрузится видео
```
/**
 * @param  {String} selector
 */
embedVideoModule.init('.js-embed-video');
```

### HTML
```html
<div class="video js-embed-video" data-type="youtube" data-id="6Gar6lnh2PI"></div>
```

| data-атрибут  |  возможные значения  |  описание  |
|---------------|----------------------|------------|
| data-type     | youtube              | тип видео  |
| data-id       | *                    | id видео   |
