# jquery.plugins guideline

## Requirement for custom plugins


+ при инициализации плагина к корневому элементу должен добавляться data-атрибут 
data-initialized , который говорит что для данного элемента плагин уже вызван 
и повторная инициализация невозможна
+ не забыть в методе destroy удалить data-атрибут data-initialized
+ для плагинов, подразумевающих автоматическую инициализацию,
должна быть возможность задавать все опции через data-атрибуты,
включая колбэки ( название функци и аргументы)
```
<button data-onclick="someFunction()" data-onclick-args="value, 'string'">
// эквивалентно
$('button').plugin({ onclick : someFunction(value, 'string') })
```

## Namespace for events

+ initialize  - when the plugin initializes.
+ initialized - when the plugin has initialized.
+ resize      - when the plugin gets resized.
+ resized     - when the plugin has resized.
+ refresh     - when the internal state of the plugin needs update.
+ refreshed   - when the internal state of the plugin has updated.
+ change      - when a property is going to change its value.
+ changed     - when a property has changed its value
+ load        - when lazy image loads.
+ loaded      - when lazy image has loaded.
+ destroy     - destroys plugin.

