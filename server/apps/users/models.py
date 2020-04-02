from django.db import models

class User(models.Model):
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)

    email = models.EmailField()
    phone = models.CharField(max_length=20)
    balance = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return self.name