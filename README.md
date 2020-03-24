# desertSnake

### Что это?
Сайт полиграфии с блэкджеком.

## Зависимости
npm install

## virtual environment
pipenv shell

## Пакеты django
pipenv install django djangorestframework django-rest-knox

## Применить migrations
python3 leadmanager/manage.py migrate

## Serve API on localhost:8000
python3 leadmanager/manage.py runserver

## Run webpack (from root)
npm run dev

## Build for production
npm run build