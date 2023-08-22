import requests

def ip_to_location(ip_address):
    url = f'https://ipinfo.io/{ip_address}/json'
    response = requests.get(url)
    data = response.json()
    
    if 'loc' in data:
        latitude, longitude = data['loc'].split(',')
        location = {
            'ip': data.get('ip'),
            'city': data.get('city'),
            'region': data.get('region'),
            'country': data.get('country'),
            'latitude': latitude,
            'longitude': longitude
        }
        return location
    else:
        return None

# Example usage
ip_address = input() # Replace this with the IP address you want to convert
location_info = ip_to_location(ip_address)
if location_info:
    print("IP:", location_info['ip'])
    print("City:", location_info['city'])
    print("Region:", location_info['region'])
    print("Country:", location_info['country'])
    print("Latitude:", location_info['latitude'])
    print("Longitude:", location_info['longitude'])
else:
    print("Location information not found for the given IP address.")



#