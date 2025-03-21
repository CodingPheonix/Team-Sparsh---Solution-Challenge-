import requests

def soil_data(api_key,poly_id):
    url = f"http://api.agromonitoring.com/agro/1.0/soil?polyid={poly_id}&appid={api_key}"
    
    # create a response
    response = requests.get(url)
    
    if response.status_code==200:
        return response.json()
    else:
        return {'message':"searching data is not found"}

def curr_weather(api_key,lat,lon):
    url = f"https://api.agromonitoring.com/agro/1.0/weather?lat={lat}&lon={lon}&appid={api_key}"
    
    # create a response
    response = requests.get(url)
    
    if response.status_code==200:
        return response.json()
    else:
        return {'message':"searching data is not found"}
    
def fore_weather(api_key,lat,lon):
    url = f"https://api.agromonitoring.com/agro/1.0/weather/forecast?lat={lat}&lon={lon}&appid={api_key}"
    
    # create a response
    response = requests.get(url)
    
    if response.status_code==200:
        return response.json()
    else:
        return {'message':"searching data is not found"}
    
def curr_ultraviolet_index(api_key,poly_id):
    
    url = f"http://api.agromonitoring.com/agro/1.0/uvi?polyid={poly_id}&appid={api_key}"
    
    # create a response
    response = requests.get(url)
    
    if response.status_code==200:
        return response.json()
    else:
        return {'message':"searching data is not found"}
    

def fore_ultraviolet_index(api_key,poly_id):
    
    url = f"http://api.agromonitoring.com/agro/1.0/uvi/forecast?polyid={poly_id}&appid={api_key}"
    
    # create a response
    response = requests.get(url)
    
    if response.status_code==200:
        return response.json()
    else:
        return {'message':"searching data is not found"}
    
    # create for location
def accumulated_temp(api_key,lat,lon,threshold,start_date,end_date):
    
    url = f"https://api.agromonitoring.com/agro/1.0/weather/history/accumulated_temperature?lat={lat}&lon={lon}&threshold={threshold}&start={start_date}&end={end_date}&appid={api_key}"
    
    # create a response
    response = requests.get(url)
    
    if response.status_code==200:
        return response.json()
    else:
        return {'message':"searching data is not found"}
    
    
def accumulated_precipation(api_key,lat,lon,start_date,end_date):
    
    url = f"https://api.agromonitoring.com/agro/1.0/weather/history/accumulated_precipitation?lat={lat}&lon={lon}&start={start_date}&end={end_date}&appid={api_key}"
    
    # create a response
    response = requests.get(url)
    
    if response.status_code==200:
        return response.json()
    else:
        return {'message':"searching data is not found"}