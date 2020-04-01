# desertSnake

## Что это?
Сайт полиграфии с блэкджеком.

## Как тут все устроено?

| desertSnake

|   |- desertsnake 

|   |  обитель фронтенда

|   |   |- public

|   |   |  лого, картинки и прочее

|   |   |- src

|   |   |  магия redux и react происходит туть

|   |   |   |- actions

|   |   |   |  что надо обрабатывать?

|   |   |   |- reducers

|   |   |   |  обработчики экшенов

|   |   |   |- components

|   |   |   |  react-компоненты, пазлы для сбора страниц

|   |   |   |- utils

|   |   |   |  здесь только главный по переговорам с бэком

|   |- server

|   |  а здесь бэк

|   |   |- apps

|   |   |  модели

|   |   |- desertsnake_project

### Зависимости (выполнять в ./desertsnake)
npm install

### Пакеты django
pip install django djangorestframework django-cors-headers

### Чтобы создавать свои приложения:
```python
django-admin.py startapp app_name apps/app_name
# создать свою модель в app_name/models.py
python manage.py makemigrations # создать файлы миграции
python manage.py migrate # применить изменения
```