from django.db import models

from django.contrib.auth.models import User

class Document(models.Model):
    label = models.CharField(max_length=255)

    owner = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
