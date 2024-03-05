import requests
import requests_cache


response = requests.get('https://semec.pmt.pi.gov.br/')
print(response.status_code)
print(response.cookies)
print(response.headers['content-type'])