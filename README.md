# ChromeExtensionExample - пример расширения для браузера Chrome
В папке ExtensionExample готовый пример расширения, со связью между Popup и Content
Заходим в chrome://extensions/ в браузере, включаем режим разработчика и загружаем распакованное расширение

## Описание файлов:
### Файл /manifest.json
Cамый главный файл со всеми настройками. В нем указаны иконки, название расширения, js скрипт для закпуска, popup.html и т.д.
Подробнее https://developer.chrome.com/docs/extensions/mv2/manifest/
### Файл /_locales/en/messages.json
Файл для переменных, например, название, описание и т.д. которые можно использовать например в manifest.json.
Создавать их может под разные языки /_locales/en/messages.json, /_locales/ru/messages.json и т.д.
### Папка  /img
Здесь хранятся все картинки, иконки, пути указали в файле manifest.json
### Файл  /css/style.css
В нем будем хранить CSS стили для всплывающего окна. style.css указали в файле manifest.json
### Файл  /js/popup.js
Здесь пишем скрипт на JS для работы с popup.html и отправки в content.js
### Файл  /js/content.js
Здесь пишем скрипт на JS для работы с открытой вкладкой и отправки в popup.js



