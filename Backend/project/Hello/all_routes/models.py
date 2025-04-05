from django.db import models
# from django.contrib.gis.db import models

# Create your models here.
class Polygon(models.Model):
    name = models.CharField(max_length=255)
    user_id = models.CharField(max_length=255)
    poly_id = models.CharField(max_length=255)
    center = models.CharField(max_length=50)
    area = models.FloatField()
    # geo_json = models.JSONField()
    # geometry = models.PolygonField()