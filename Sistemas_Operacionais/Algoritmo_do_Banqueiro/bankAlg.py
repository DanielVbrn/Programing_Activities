def main():
    menu = "---------(ALGORÍTMO DO BANQUEIRO)-----------"
    menu += "\nEscolha qual o cenário do sistema: "
    menu += "\n1 - Seguro"
    menu += "\n"
    menu += "\n2 - Inseguro"
    menu += "\n"    
    menu += "\n"
    print(menu)

    processes = [0, 1, 2, 3]  # Identificadores dos processos
    available = [7, 4, 3]  # Recursos disponíveis
    available2 = [1, 1, 2]  # Recursos disponíveis
    max_resources = [
        [4, 5, 3],
        [3, 2, 2],
        [9, 0, 2],
        [6, 2, 2],
    ]  # Máximo de recursos necessários para cada processo
    allocated = [
        [0, 1, 0],
        [2, 0, 0],
        [3, 0, 2],
        [2, 1, 1],
    ]  # Recursos alocados para cada processo
        
    option = input("Opção: ")
    if(option == "1"):
        is_safe, history = secureSystem(processes, available, max_resources, allocated)
        if is_safe:
            print("O estado do sistema é seguro.")
        else:
            print("O estado do sistema é inseguro.")
        print("Histórico de alocação de recursos:")
        for state in history:
            print(state)    
    elif(option == "2"):
        is_safe, history, deadlock_processes = insecureSystem(processes, available2, max_resources, allocated)
        if is_safe:
            print("O estado do sistema é seguro.")
        else:
            print(f"O estado do sistema é inseguro. Deadlock detectado nos processos: {deadlock_processes}.")
        print("Histórico de alocação de recursos:")
        for state in history:
            print(state)
        


    # Plotando a utilização dos recursos e o status de cada processo ao longo do tempo


def secureSystem(processes, available, max_resources, allocated):
    num_processes = len(processes)
    num_resources = len(available)

    # Inicializando as listas de trabalho, alocados e concluídos
    work = available.copy()
    finish = [False] * num_processes

    # Verificando se um processo pode ser executado em segurança
    history = []
    process_status = [False] * num_processes  # Status do processo (Executando ou Bloqueado)

    while True:
        found = False
        for i in range(num_processes):
            if not finish[i]:
                can_execute = True
                for j in range(num_resources):
                    if max_resources[i][j] - allocated[i][j] > work[j]:
                        can_execute = False
                        break

                if can_execute:
                    # Liberando os recursos alocados
                    for j in range(num_resources):
                        work[j] += allocated[i][j]

                    finish[i] = True
                    found = True

        # Atualizando o status dos processos (Executando ou Bloqueado)
        process_status = ["Executando" if finish[i] else "Bloqueado" for i in range(num_processes)]

        # Adicionando o estado atual à lista de histórico
        history.append(work.copy())

        # Verificando se todos os processos foram concluídos
        if not found:
            break

    # Verificando se o sistema está em um estado seguro e obtendo o histórico
    safe = all(finish)
    return safe, history

def insecureSystem(processes, available2, max_resources, allocated):
    num_processes = len(processes)
    num_resources = len(available2)

    # Inicializando as listas de trabalho, alocados e concluídos
    work = available2.copy()
    finish = [False] * num_processes

    # Verificando se um processo pode ser executado em segurança
    history = []
    deadlock_detected = False  # Flag para indicar se deadlock foi detectado
    deadlock_processes = []  # Lista de processos onde ocorreu o deadlock

    while True:
        found = False
        process_status = [False] * num_processes  # Status do processo (Executando ou Bloqueado)

        for i in range(num_processes):
            if not finish[i]:
                can_execute = True
                for j in range(num_resources):
                    if max_resources[i][j] - allocated[i][j] > work[j]:
                        can_execute = False
                        break

                if can_execute:
                    # Liberando os recursos alocados
                    for j in range(num_resources):
                        work[j] += allocated[i][j]

                    finish[i] = True
                    found = True

        # Atualizando o status dos processos (Executando ou Bloqueado)
        process_status = ["Executando" if finish[i] else "Bloqueado" for i in range(num_processes)]

        # Adicionando o estado atual à lista de histórico
        history.append(work.copy())

        # Verificando se todos os processos foram concluídos
        if not found:
            deadlock_detected = True
            deadlock_processes = [i for i in range(num_processes) if not finish[i]]
            break

    # Verificando se o sistema está em um estado seguro e obtendo o histórico
    safe = not deadlock_detected
    return safe, history, deadlock_processes

main()
