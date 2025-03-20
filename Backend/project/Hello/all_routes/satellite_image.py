import requests


# for starting and ending data point api call
satellite_api_key = ""
# polygon_id =""
# start_date = ''
# end_date = ''

def satellite_image_data(polygon_id, start_date, end_date):
    
    # we get the start data point
    # end data point
    # polyid = which is id of polygon which we have to store in sql
    # and get api key 
    url = f"http://api.agromonitoring.com/agro/1.0/image/search?start={start_date}&end={end_date}&polyid={polygon_id}&appid={satellite_api_key}"
    
    response = requests.get(url)
    
    if response.status_code == 200:
        return response.json()
    else:
        return{"message":"Data not found"}
    
    
