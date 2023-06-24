class Process:
    def __init__(self, name, burst_time):
        self.name = name
        self.burst_time = burst_time


def round_robin(processes, quantum):
    queue = processes.copy()  # Fila de processos
    total_time = 0  # Tempo total de execução
    completed_processes = []  # Lista de processos concluídos

    while len(queue) > 0:
        current_process = queue.pop(0)  # Obter o próximo processo da fila

        # Executar o processo por um quantum de tempo
        if current_process.burst_time > quantum:
            total_time += quantum
            current_process.burst_time -= quantum
        else:
            total_time += current_process.burst_time
            current_process.burst_time = 0
            completed_processes.append(current_process)

        # Retornar o processo para a fila se ainda não tiver concluído
        if current_process.burst_time > 0:
            queue.append(current_process)

    return completed_processes, total_time


# Exemplo de uso
processes = [
    Process("P1", 10),
    Process("P2", 5),
    Process("P3", 8),
    Process("P4", 12)
]

quantum = 3

completed_processes, total_time = round_robin(processes, quantum)

# Exibir o tempo total e os processos concluídos
print("Tempo total de execução:", total_time)
print("Processos concluídos:")
for process in completed_processes:
    print(process.name)
