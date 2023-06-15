import matplotlib.pyplot as plt


def main():
    menu = "Escolha qual o cenário do sistema: "
    menu += "\n1- Seguro"
    menu += "\n2- Inseguro"
    option = input()


    processes = [0, 1, 2, 3, 4]  # Identificadores dos processos
    available = [3, 3, 2]  # Recursos disponíveis
    available2 = [1, 0, 0]  # Recursos disponíveis
    max_resources = [
        [4, 5, 3],
        [3, 2, 2],
        [9, 0, 2],
        [2, 2, 2],
        [4, 3, 3]
    ]  # Máximo de recursos necessários para cada processo
    allocated = [
        [0, 1, 0],
        [2, 0, 0],
        [3, 0, 2],
        [2, 1, 1],
        [0, 0, 2]
    ]  # Recursos alocados para cada processo
        
    if(option == 1):
        secureSystem(processes, available, max_resources, allocated)
    elif(option ==2):
        insecureSystem(processes, available2, max_resources, allocated)
        

    # Verificando se o sistema está em um estado seguro e obtendo o histórico
    safe, history = secureSystem(processes, available, max_resources, allocated)
    if safe:
        print("O estado do sistema é seguro.")
    else:
        print("O estado do sistema é inseguro.")

    # Gerando os gráficos

    plt.figure(figsize=(10, 5))

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
        history.append((work.copy(), process_status.copy()))

        # Verificando se todos os processos foram concluídos
        if not found:
            break

    
    
    # Verificando se todos os processos foram concluídos em segurança
    return all(finish), history

def insecureSystem(processes, available, max_resources, allocated):
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
        history.append((work.copy(), process_status.copy()))

        # Verificando se todos os processos foram concluídos
        if not found:
            break

    N_resources = len(available)
    num_steps = len(history)
    for resource in range(N_resources):
        plt.subplot(N_resources + 1, 1, resource + 1)
        plt.step(range(num_steps), [state[0][resource] for state in history], where='post')
        plt.ylabel(f"Recurso {resource + 1} (disponível)")
        plt.ylim(min(available) - 1, max(available) + 1)
        plt.xticks(range(num_steps), range(num_steps))
        plt.xlabel("Passos")

    # Plotando o status de cada processo ao longo do tempo
    plt.subplot(N_resources + 1, 1, N_resources + 1)
    for i in range(len(processes)):
        plt.step(range(num_steps), [1 if state[1][i] == "Executando" else 0 for state in history], where='post',
                 label=f"Processo {i}")
    plt.ylim(-0.1, 1.1)
    plt.ylabel("Status do Processo")
    plt.yticks([0, 1], ["Bloqueado", "Executando"])
    plt.xticks(range(num_steps), range(num_steps))
    plt.xlabel("Passos")
    plt.legend(loc="upper right")

    plt.tight_layout()
    plt.show()
    # Verificando se todos os processos foram concluídos em segurança
    return all(finish), history

main()