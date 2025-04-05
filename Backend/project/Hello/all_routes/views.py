# from django.shortcuts import render, HttpResponse
from django.shortcuts import render, HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import polygonSerializer
from rest_framework import status
from .models import Polygon
from .polygon import *
from pprint import pprint

# Create your views here.
def temp(request):
    return HttpResponse("temp")

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
    polygons = Polygon.objects.all()
    serializer = polygonSerializer(polygons, many=True)
    if serializer.data:
        return Response({"message": "Polygon feteched Successfully", "status":200, 'data': serializer.data})
    return Response({"message": "Polygon could not be fetched Successfully", "status":404})

@api_view(['POST'])
def create_polygon(request):
    print("Inside create_polygon view")
    result = create_my_polygon(request.data) # function call to create polygons
    pprint(result)
    if result['status'] == 200:
        return Response({
            "message": result["message"],
            "status": result["status"],
            "data": result["data"]
        })
    else:
        return Response({
            "message": "Polygon could not be created Successfully",
            "status": status.HTTP_404_NOT_FOUND,
        })

    # return Response({"message": "Polygon could not be created Successfully", "status":status.HTTP_404_NOT_FOUND})

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