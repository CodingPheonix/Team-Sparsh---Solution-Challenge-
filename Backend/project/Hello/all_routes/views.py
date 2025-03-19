# from django.shortcuts import render, HttpResponse

# # Create your views here.
# def temp(request):
#     return HttpResponse('temp')






from django.shortcuts import render, HttpResponse
from . import polygon




# Create your views here.
def temp(request):
    return HttpResponse("temp")

def test_get_api(request):
    body = {
        "name": "Polygon Sample",
        "geo_json": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [30.0, 10.0],
                    [40.0, 40.0],
                    [20.0, 50.0],
                    [10.0, 20.0],
                    [30.0, 10.0],
                ],
            },
        },
    }
    result = polygon.create_polygon(body)
    print(result)
    return HttpResponse(result)