from django.shortcuts import render

from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import DocumentForm

class DocumentFormUploader(APIView): 
    permission_classes = (AllowAny,)

    def post(self, request, format='json'):
        form = DocumentForm(data=request.data)
        if form.is_valid(): 
            document = form.save() 
            if document:
                json = form.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)
