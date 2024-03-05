import requests



def req():
    response = requests.get('https://costanorte.com.br/media/_versions/2023/10/natures-beauty-reflected-tranquil-mountain-waters-generative-ai_188544-78671_widexl.jpg').content
    
    with open('natures-beauty-reflected-tranquil-mountain-waters-generative-ai_188544-78671_widexl.jpg', 'wb') as handler:
        handler.write(response)
        print('Arquivo baixado com sucesso!')

req()