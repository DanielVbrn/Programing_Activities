def main():
    # Entrada de dados
    processos = [
        (5, 30, 4),  # Processo 1: tempo de chegada = 5, duração = 30, prioridade = 4
        (15, 10, 2),  # Processo 2: tempo de chegada = 15, duração = 10, prioridade = 2
        (10, 40, 1),  # Processo 3: tempo de chegada = 10, duração = 40, prioridade = 1
        (0, 20, 3),  # Processo 4: tempo de chegada = 0, duração = 20, prioridade = 3
    ]

    quantum = 15
    troca_contexto = 4

    # Executa o algoritmo Round Robin
    m_tempo_espera, m_tempo_resposta, tempo_vida, tempo_espera, tempos_execucao, tempos_troca_contexto = round_robin(
        processos, quantum, troca_contexto
    )

    # Imprime os resultados
    print("Tempo médio de espera:", m_tempo_espera)
    print("Tempo médio de resposta:", m_tempo_resposta)
    print("Tempo de vida dos processos:", tempo_vida)
    print("Tempo de espera dos processos:", tempo_espera)


def round_robin(processos, quantum, troca_contexto):
    n = len(processos)
    tempo_restante = [i[1] for i in processos]
    tempo_espera, tempo_resposta, tempo_vida = [0] * n, [0] * n, [0] * n
    total_tempo_espera, total_tempo_resposta, tempo, completo = 0, 0, 0, 0
    fila_processos = list(range(n))  # Fila de processos prontos para execução
    tempos_execucao = [[] for _ in range(n)]  # Lista para armazenar os tempos de execução de cada processo
    tempos_troca_contexto = []

    while completo < n:
        for i in fila_processos:
            if tempo_restante[i] > 0:
                inicio_execucao = tempo

                # Adiciona troca de contexto no início do processo
                if tempo_restante[i] == processos[i][1]:
                    tempo += troca_contexto
                    tempos_troca_contexto.append((tempo - troca_contexto, troca_contexto, i))

                if tempo_restante[i] <= quantum:
                    tempo += tempo_restante[i]
                    tempo_resposta[i] = tempo
                    tempo_restante[i] = 0
                    completo += 1
                else:
                    tempo += quantum
                    tempo_restante[i] -= quantum

                tempos_execucao[i].append((inicio_execucao, tempo - inicio_execucao))

                if tempo_restante[i] > 0:
                    # Adiciona troca de contexto no final do processo
                    tempo += troca_contexto
                    tempos_troca_contexto.append((tempo - troca_contexto, troca_contexto, i))

        for i in range(n):
            if tempo_restante[i] > 0 and i not in fila_processos:
                fila_processos.append(i)

        # Ordenar a fila de processos com base nas prioridades
        fila_processos.sort(key=lambda x: processos[x][2])

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

    return (
        media_tempo_espera,
        media_tempo_resposta,
        tempo_vida,
        tempo_espera,
        tempos_execucao,
        tempos_troca_contexto,
    )


main()
