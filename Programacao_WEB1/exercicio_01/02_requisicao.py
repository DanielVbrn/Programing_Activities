import requests



def req():
    response = requests.get('https://www.w3schools.com/')
    print(response.status_code)
    print(response.encoding)
    print(response.content.__len__())
    print(response.request.body)
req()