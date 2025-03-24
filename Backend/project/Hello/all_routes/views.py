# from django.shortcuts import render, HttpResponse
from django.shortcuts import render, HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
# from .serializers import polygonSerializer
# from rest_framework import status
# from .models import Polygon
from . import polygon
# from . import models

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
    result = FUNCTION_NAME(poly_id) # function call to get one particular polygon
    if result.status == 200:
        return Response({"message": "Polygon created Successfully", "status":200, 'data': result.data})
    return Response({"message": "Polygon could not be created Successfully", "status":404})

# GET ALL POLYGON DETAILS 
@api_view(['GET'])
def get_allPolygons(requests):
    result = FUNCTION_NAME() # function call to get all polygons
    if result.status == 200:
        return Response({"message": "Polygon created Successfully", "status":200, 'data': result.data})
    return Response({"message": "Polygon could not be created Successfully", "status":404})

@api_view(['POST'])
def create_polygon(requests):
    result = FUNCTION_NAME(requests.data) # function call to create polygons
    if result.status == 200:
        return Response({"message": "Polygon created Successfully", "status":200, 'data': result.data})
    return Response({"message": "Polygon could not be created Successfully", "status":404})

@api_view(['PUT'])
def update_polygon(requests, poly_id):
    result = FUNCTION_NAME(requests.data, poly_id) # function call to update polygons
    if result.status == 200:
        return Response({"message": "Polygon created Successfully", "status":200, 'data': result.data})
    return Response({"message": "Polygon could not be created Successfully", "status":404})

@api_view(['DELETE'])
def delete_polygon(requests, poly_id):
    result = FUNCTION_NAME(poly_id) # function call to delete a polygon
    if result.status == 200:
        return Response({"message": "Polygon created Successfully", "status":200, 'data': result.data})
    return Response({"message": "Polygon could not be created Successfully", "status":404})


# TEST FRONTEND CONNECTION
@api_view(['GET'])
def temporary(requests):
    return Response({'data': "backend achieved"})