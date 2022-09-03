from cgi import print_arguments
from tokenize import Number

from pip import main


def numeros_pares():
    vetor = [4, 5, 7, 12, 10, 4, -4]
    for num in vetor:
        if num % 2 == 0 and num > 4: 
            print(num)
# numeros_pares()

def is_num_or_string():
    vetor_positivos = ["Olá tudo bom", 3, 8, "Opaaa", "Fala meu grande!!!"]

    for index in vetor_positivos:
        if type(index) != int:
            print("É string!")
        else:
            print("É número!")    
# is_num_or_string()



def cadastro_paciente():
    type(nome) = str

    nome = input("Digite seu nome: ")

    cpf = input("Insira seu CPF: ")
    for i in nome :
        while(nome == int or cpf == str):
            nome = input("Digite seu nome: ")
    print(nome)
    print(cpf)
 
cadastro_paciente()

   