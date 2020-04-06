# desertSnake

## Что это?
НедоSPA для полиграфии.

### Зависимости
npm install

### Пакеты django
pip install django djangorestframework django-cors-headers djangorestframework_simplejwt

### Чтобы создавать свои приложения (выполнять в ./server):
```bash
mkdir apps/app_name
python3 manage.py startapp app_name apps/app_name
# создать свою модель в app_name/models.py
python3 manage.py makemigrations # создать файлы миграции
python3 manage.py migrate # применить изменения
```

### Чтобы запустить шайтан-машину:
```bash
python3 manage.py runserver
```

### Чтобы дебажить и смотреть на фронт:
```bash
npm run dev
python3 server/manage.py runserver
``` 

### Полезные ссылки:
1. [про DRF simple JWT](https://pypi.org/project/djangorestframework-simplejwt/)
2. [про авторизацию (топ туториал 1)](https://hackernoon.com/110percent-complete-jwt-authentication-with-django-and-react-2020-iejq34ta)
3. [про авторизацию и про actions (топ туториал 2)](http://v1k45.com/blog/modern-django-part-4-adding-authentication-to-react-spa-using-drf/)
4. [еще про авторизацию](https://sloboda-studio.com/blog/how-to-make-react-django-combination-work-like-magic/)
5. [про то, как настраивать конфиги](https://github.com/babel/babel/issues/8655)
6. [инструкция по деплою на google cloude)](https://cloud.google.com/python/django/appengine)
