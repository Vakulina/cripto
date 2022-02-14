
#### [Ссылка на деплой](http://178.154.245.149/) 

#### Функционал тестовой страницы:
##### при нажатии Parse
- система делает запрос к API: https://api.coingecko.com/api/v3/global, 
- разбирает полученный json, 
- записывает информацию о name криптовалюты и о ее текущей рыночной капитализации (в процентах) в NoSQL БД MongoDB.

##### при нажатии Show
- система делает запрос к БД,
- выводит результат в виде таблицы.

#### Используемые технологии:
- backend - Node.js + Express + MongoDB
- frontend - React.js (Create React App)
- сервер nginx для деплоя на виртуальной машине, развернутую на платформе Yandex Compute Cloud

#####  Для запуска на локальной машине:
- запустить сервер СУБД MongoDB (СУБД должна быть предварительно установлена)
- скачать содержимое ветки master
- перейти в папку **backend**, установить зависимости командой **npm install**, запустить локальный сервер командой **npm run start** (на порту 5000)
- перейти в папку **frontend**, установить зависимости командой **npm install**, запустить локальный сервер командой **npm run start** (на порту 3000)

 
