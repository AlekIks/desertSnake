from django.db import models

class Customer(models.Model):
    name = models.CharField("Name", max_length=255)
    surname = models.CharField("Surname", max_length=255)

    email = models.EmailField()
    phone = models.CharField(max_length=20)
    balance = models.DecimalField(max_digits=8, decimal_places=2)

    createdAt = models.DateTimeField("Created At", auto_now_add=True)

    def __str__(self):
        return self.name