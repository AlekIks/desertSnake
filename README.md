# desertSnake

## Что это?
Сайт полиграфии с блэкджеком.

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