import requests
from bs4 import BeautifulSoup



def req(url):
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')

        links = soup.find_all('a', href=True)

        for link in links:
            print(link['href'])
    else:
        print()




def main():
    url = 'https://www.w3schools.com/'
    result = req(url)
    print(result)
main()

