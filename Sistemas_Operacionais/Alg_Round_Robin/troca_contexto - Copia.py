import matplotlib.pyplot as plt



def round_robin(processos, quantum, troca_contexto):
    n = len(processos)
    tempo_restante = [i[1] for i in processos]
    tempo_espera, tempo_resposta, tempo_vida = [0] * n, [0] * n, [0] * n
    total_tempo_espera, total_tempo_resposta = 0, 0
    tempo, completo = 0, 0
    fila_processos = list(range(n)) # Fila de processos prontos para execução
    tempos_execucao = [[] for _ in range(n)] # Lista para armazenar os tempos de execução de cada processo
    tempos_troca_contexto = []
    
    while completo < n:
        for i in fila_processos:
            if tempo_restante[i] > 0:
                inicio_execucao = tempo
                if tempo_restante[i] <= quantum:
                    tempo += tempo_restante[i]
                    tempo_resposta[i] = tempo
                    tempo_restante[i] = 0
                    completo += 1
                    tempo_fim_execucao = tempo
                else:
                    tempo += quantum
                    tempo_restante[i] -= quantum
                    tempo_fim_execucao = tempo

                tempos_execucao[i].append((inicio_execucao, tempo_fim_execucao - inicio_execucao))

                # Adiciona troca de contexto antes do próximo processo
                if completo < n:
                    tempos_troca_contexto.append((tempo_fim_execucao, troca_contexto, i))

                # Adiciona troca de contexto depois do processo
                if tempo_restante[i] > 0:
                    tempos_troca_contexto.append((tempo_fim_execucao, troca_contexto, i))
        
        for i in range(n):
            if tempo_restante[i] > 0 and i not in fila_processos:
                fila_processos.append(i)

        fila_processos.pop(0)  # Remove o primeiro processo da fila

    for i in range(n):
        tempo_espera[i] = tempo_resposta[i] - processos[i][0]
        total_tempo_espera += tempo_espera[i]
        total_tempo_resposta += tempo_resposta[i]

        # Cálculo do tempo de vida
        tempos_execucao_processo = tempos_execucao[i]
        for j in range(len(tempos_execucao_processo)):
            if j % 2 == 0:
                tempo_vida[i] += tempos_execucao_processo[j][1]

    media_tempo_espera = total_tempo_espera / n
    media_tempo_resposta = total_tempo_resposta / n

    return media_tempo_espera, media_tempo_resposta, tempo_vida, tempo_espera, tempos_execucao, tempos_troca_contexto

def main():
    # Entrada de dados
    processos = [
    (0, 20, 3), # Processo 1: tempo de chegada = 0, duração = 20, prioridade = 3
    (10, 40, 2), # Processo 2: tempo de chegada = 10, duração = 40, prioridade = 2
    (15, 10, 1), # Processo 3: tempo de chegada = 15, duração = 10, prioridade = 1
    (5, 30, 4), # Processo 4: tempo de chegada = 5, duração = 30, prioridade = 4
    ]

    quantum = 9
    troca_contexto = 1  # Tempo de troca de contexto entre processos consecutivos

    # Executa o algoritmo Round Robin
    m_tempo_espera, m_tempo_resposta, tempo_vida, tempo_espera, tempos_execucao, tempos_troca_contexto = round_robin(processos, quantum, troca_contexto)

    # Gera o gráfico de Gantt
    process_labels = ["P" + str(i + 1) for i in range(len(processos))]
    colors = ['tab:blue', 'tab:orange', 'tab:green', 'tab:red']
    fig, ax = plt.subplots()

    for i, tempos in enumerate(tempos_execucao):
        for j, tempo in enumerate(tempos):
            ax.broken_barh([(tempo[0], tempo[1])], (i * 10, 9), facecolors=colors[i])
            ax.annotate("P" + str(i + 1), (tempo[0] + tempo[1] / 2, i * 10 + 4), color='white', ha='center')

    # Adiciona trocas de contexto
    for troca in tempos_troca_contexto:
        tempo_inicio_troca = troca[0]
        tempo_fim_troca = tempo_inicio_troca + troca[1]
        processo = troca[2]
        ax.broken_barh([(tempo_inicio_troca, troca_contexto)], (processo * 10, 9),
                    facecolors='pink', edgecolor='black')
        ax.broken_barh([(tempo_fim_troca, troca_contexto)], (processo * 10, 9),
                    facecolors='pink', edgecolor='black')

    ax.set_ylim(0, len(processos) * 10)
    ax.set_xlim(0, tempos_execucao[-1][-1][0] + tempos_execucao[-1][-1][1])
    ax.set_xlabel('Tempo')
    ax.set_yticks([i * 10 + 5 for i in range(len(processos))])
    ax.set_yticklabels(process_labels)
    ax.grid(True)

    plt.show()

    # Imprime os resultados
    print("Tempo médio de espera:", m_tempo_espera)
    print("Tempo médio de resposta:", m_tempo_resposta)
    print("Tempo de vida dos processos:", tempo_vida)
    print("Tempo de espera dos processos:", tempo_espera)

main()