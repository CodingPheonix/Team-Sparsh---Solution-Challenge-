from django.contrib import admin
from django.urls import path, include
from . import views
 # Ensure 'home' is a valid Django app with a views.py file

urlpatterns = [
    path('', views.temp, name='temp')
]
