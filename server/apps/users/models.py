from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)

    email = models.EmailField()
    phone = models.CharField(max_length=20)
    balance = models.DecimalField(default=0.00, max_digits=8, decimal_places=2)
