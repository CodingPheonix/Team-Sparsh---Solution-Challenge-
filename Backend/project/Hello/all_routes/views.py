# from django.shortcuts import render, HttpResponse
from django.shortcuts import render, HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from serializers import polygonSerializer
from rest_framework import status
from models import Polygon
from . import polygon
from . import models

# Create your views here.
def temp(request):
    return HttpResponse("temp")

# def test_get_api(request):
#     body = {
#         "name": "Polygon Sample",
#         "geo_json": {
#             "type": "Feature",
#             "properties": {},
#             "geometry": {
#                 "type": "Polygon",
#                 "coordinates": [
#                     [30.0, 10.0],
#                     [40.0, 40.0],
#                     [20.0, 50.0],
#                     [10.0, 20.0],
#                     [30.0, 10.0],
#                 ],
#             },
#         },
#     }
#     result = polygon.create_polygon(body)
#     print(result)
#     return HttpResponse(result)

# GET ONE POLYGON DETAILS 
@api_view(['GET'])
def get_polygon(requests, poly_id):
    required_polygon = models.Polygon.objects.get(id=poly_id)
    serializer =  polygonSerializer(required_polygon)
    return Response(serializer.data)

# GET ALL POLYGON DETAILS 
@api_view(['GET'])
def get_allPolygons(requests):
    required_polygon = models.Polygon.objects.all()
    serializer =  polygonSerializer(required_polygon, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_polygon(requests):
    result = FUNCTION_NAME(requests.data) # function call to create polygons
    serializer = polygonSerializer(result)
    if serializer.is_valid():
        serializer.save() # save the polygon in database
        return Response({"message": "Polygon created Successfully", "data": serializer.data})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_polygon(requests, poly_id):
    result = FUNCTION_NAME(requests.data, poly_id) # function call to update polygons
    serializer = polygonSerializer(Polygon, data = result)
    if serializer.is_valid():
        serializer.save() # save the polygon in database
        return Response({"message": "Polygon created Successfully", "data": serializer.data})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_polygon(requests, poly_id):
    target_polygon = Polygon.objects.get(id=poly_id)
    if target_polygon:
        target_polygon.delete()
        return Response({"message": "Polygon deleted Successfully"})
    return Response(status=status.HTTP_400_BAD_REQUEST)
