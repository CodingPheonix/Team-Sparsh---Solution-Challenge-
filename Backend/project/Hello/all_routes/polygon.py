import requests
from .serializers import polygonSerializer
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv('AGRO_API_KEY')

#to create a new polygon 
def create_my_polygon(body):
    url = f"http://api.agromonitoring.com/agro/1.0/polygons?appid={api_key}&duplicated=true"

    # Make sure you're sending JSON
    response = requests.post(url, json=body)

    if response.ok:
        result = response.json()

        new_polygon = polygonSerializer(data={
            'name': result['name'],
            'user_id': result['user_id'],
            'poly_id': result['id'],
            'center': str(result['center']),
            'area': result['area'],
        })

        if new_polygon.is_valid():
            new_polygon.save()
            return {
                'status': 200,
                'message': "A new Polygon is created",
                'data': new_polygon.data
            }
        else:
            return {
                'status': 400,
                'message': "Invalid polygon data",
                'data': new_polygon.errors
            }
    else:
        return {
            'status': response.status_code,
            'message': "Polygon creation failed from Agro API",
            'data': response.text  
        }


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
