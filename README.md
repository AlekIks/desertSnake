# desertSnake

## Что это?
Сайт полиграфии с блэкджеком.

### Зависимости (выполнять в ./desertsnake)
npm install

### Пакеты django
pip install django djangorestframework django-cors-headers

### Чтобы создавать свои приложения (выполнять в ./server):
```bash
mkdir apps/app_name
django-admin.py startapp app_name apps/app_name
# создать свою модель в app_name/models.py
python manage.py makemigrations # создать файлы миграции
python manage.py migrate # применить изменения
```

### Полезные ссылки:
```python
https://pypi.org/project/djangorestframework-simplejwt/ # про DRF simple JWT
https://hackernoon.com/110percent-complete-jwt-authentication-with-django-and-react-2020-iejq34ta # про авторизацию 
https://github.com/babel/babel/issues/8655
```