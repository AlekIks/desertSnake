# Generated by Django 3.0.4 on 2020-04-01 01:13

from django.db import migrations

def create_data(apps, schema_editor):
    Customer = apps.get_model('customers', 'Customer')
    Customer(name="Lex", surname="Luthor", email="killsuperman@gmail.com", \
            phone="00000000", balance="10.10").save()


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]
