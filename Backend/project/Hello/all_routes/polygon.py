import requests
# from django.http import JsonResponse

api_key = "695a985876ca3091f253d1b7d3f17bd1"

# def create_polygon(body):
#     # agromonitoring url to cbreate polygon 
    
#     url = f"http://api.agromonitoring.com/agro/1.0/polygons?appid={api_key}"
    
#     # create a responce
#     response = requests.get(url, data=body)
    
#     if response.status_code==200:
#         return response.json()
#     else:
#         return {'message':"data not found"}


#to get info from one polygon 
def info_polygon(body1):
    url = f"http://api.agromonitoring.com/agro/1.0/polygons?appid={api_key}"
    
    # create a response
    response = requests.post(url, data=body1)
    
    if response.status_code==200:
        return response.json()
    else:
        return {'message':"searching data is not found"}

# to update the polygon
def update_polygon():
    url = f"http://api.agromonitoring.com/agro/1.0/polygons?appid={api_key}"
    
    # create a response
    response = requests.put(url)
    
    if response.status_code==200:
        return response.json()
    else:
        return {'message':"update not happened"}
    
# to delete request to the server 
def delete_polygon(id):
    
    url = f"http://api.agromonitoring.com/agro/1.0/polygons/{id}?appid={api_key}" 
    
    response = requests.delete(url)
    if response.status_code == 200 :
        return{"message": "Polygon deleted successfully"}
    else:
        return{"message": "Failed to delete polygon"}
