from django.contrib import admin
from django.urls import path, include
from . import views
 # Ensure 'home' is a valid Django app with a views.py file

urlpatterns = [
    path('', views.temp, name='temp'),
    path('test_get/', views.test_get_api, name='test-get'),
    path('get_polygon/<str:poly_id>', views.get_polygon, name='get-polygon-details'),
    path('get_polygon/', views.get_allPolygons, name='get-all-polygon-details'),
]
