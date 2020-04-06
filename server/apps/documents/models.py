from django.db import models
from django import forms
from apps.users.models import CustomUser

class Document(models.Model):
    label = models.CharField(max_length=255)
    owner = models.ForeignKey(CustomUser, on_delete=models.CASCADE, blank=True, null=True)
    # загруженный документ будет в media/documents/ <year> / <month>
    document = models.FileField(upload_to='documents/%Y/%m/')

class DocumentForm(forms.ModelForm): 
    class Meta: 
        model = Document 
        fields = ('label', 'document')