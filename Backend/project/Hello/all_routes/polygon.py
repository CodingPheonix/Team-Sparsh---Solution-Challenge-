import requests
# from django.http import JsonResponse

api_key = "695a985876ca3091f253d1b7d3f17bd1"

def create_polygon(body):
    # agromonitoring url to cbreate polygon 
    
    url = f"http://api.agromonitoring.com/agro/1.0/polygons?appid={api_key}"
    
    # create a responce
    response = requests.get(url, data=body)
    
    if response.status_code==200:
        return response.json()
    else:
        return {'message':"data not found"}