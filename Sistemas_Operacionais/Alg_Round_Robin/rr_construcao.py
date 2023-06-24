from collections import deque

class Processo:
    def __init__(self, tempo_chegada, duracao, prioridade):
        self.tempo_chegada = tempo_chegada
        self.duracao = duracao
        self.prioridade = prioridade

def round_robin(processos, quantum):
    fila_processos = deque(processos)  # Fila de processos prontos para execução
    tempo_atual = 0
    tempos_execucao = []
    trocas_contexto = []
    total_tempo_espera = 0
    total_tempo_resposta = 0

    while fila_processos:
        processo = fila_processos.popleft()  # Seleciona o próximo processo da fila

        # Verifica se o processo já chegou
        if processo.tempo_chegada > tempo_atual:
            tempo_atual = processo.tempo_chegada

        # Verifica a prioridade do processo
        if processo.prioridade > 0:
            # Executa o processo por um quantum
            inicio_execucao = tempo_atual
            if processo.duracao <= quantum:
                tempo_atual += processo.duracao
                tempo_fim_execucao = tempo_atual
                processo.duracao = 0
            else:
                tempo_atual += quantum
                processo.duracao -= quantum
                tempo_fim_execucao = tempo_atual

            tempos_execucao.append((inicio_execucao, tempo_fim_execucao, processo))

            # Adiciona troca de contexto após a execução do processo
            trocas_contexto.append((tempo_fim_execucao, processo))

            # Atualiza o tempo de espera dos outros processos
            for p in fila_processos:
                total_tempo_espera += tempo_atual - p.tempo_chegada

            # Verifica se o processo ainda tem duração restante
            if processo.duracao > 0:
                fila_processos.append(processo)  # Adiciona o processo novamente à fila
                trocas_contexto.append((tempo_atual, None))  # Adiciona troca de contexto após o processo

        # Calcula o tempo de resposta total
        total_tempo_resposta += tempo_atual - processo.tempo_chegada

    media_tempo_espera = total_tempo_espera / len(processos)
    media_tempo_resposta = total_tempo_resposta / len(processos)

    return media_tempo_espera, media_tempo_resposta, tempos_execucao, trocas_contexto

def main():
    # Entrada de dados
    processos = [
        Processo(5, 30, 4), # Processo 1: tempo de chegada = 0, duração = 20, prioridade = 3
        Processo(15, 10, 2), # Processo 2: tempo de chegada = 10, duração = 40, prioridade = 2
        Processo(10, 40, 1), # Processo 3: tempo de chegada = 15, duração = 10, prioridade = 1
        Processo(0, 20, 3), # Processo 4: tempo de chegada = 5, duração = 30, prioridade = 4
    ]

    quantum = 15

    # Executa o algoritmo Round Robin
    m_tempo_espera, m_tempo_resposta, tempos_execucao, trocas_contexto = round_robin(processos, quantum)

    # Imprime os resultados
    print("Tempo médio de espera:", m_tempo_espera)
    print("Tempo médio de resposta:", m_tempo_resposta)

    # Imprime o Gantt chart
    print("Gantt Chart:")
    for inicio, fim, processo in tempos_execucao:
        print(f"Processo {processo.prioridade} - Início: {inicio}, Fim: {fim}")
    print("Trocas de contexto:")
    for tempo, processo in trocas_contexto:
        if processo is not None:
            print(f"Tempo: {tempo}, Processo: {processo.prioridade}")
        else:
            print(f"Tempo: {tempo}, Troca de contexto")

main()
