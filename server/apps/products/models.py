from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(default=0.00, max_digits=8, decimal_places=2)

    image = models.ImageField(upload_to='products', blank=True)
    description = models.TextField(blank=True)
    available = models.BooleanField(default=True)
    