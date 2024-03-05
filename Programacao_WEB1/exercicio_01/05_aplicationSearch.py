import requests
from bs4 import BeautifulSoup

def getWord_Next_Before(words, index, tamanho=10):
    start_index = max(0, index - tamanho)
    end_index = min(len(words), index + tamanho + 1)
    return words[start_index:end_index]

def searchWord_Occurrences(url, word):
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        ocorrencias = soup.get_text()
        words = ocorrencias.split()
        word_count = words.count(word)
        
        if word_count > 0:
            print(f"Occurrences of '{word}' found {word_count} times")
            for index, wd in enumerate(words):
                if wd.lower() == word.lower():
                    surrounding_words = getWord_Next_Before(words, index)
                    print(f"At index {index}: {' '.join(surrounding_words)}")
        else:
            print(f"No occurrences of '{word}' found on the webpage.")

searchWord_Occurrences('https://pt.wikipedia.org/wiki/JavaScript', 'códigos')
