class Task {
    id: number;
    descricao: string;
    dataInicio: Date;
    dataConclusao: Date | string;

    constructor(descricao: string, dataInicio: Date, dataConclusao?: Date) {
        this.id = Math.floor(Math.random() * 10000);
        this.descricao = descricao;
        this.dataInicio = dataInicio;
        this.dataConclusao = dataConclusao || "";
    }

    public getId(): number {
        return this.id;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public getDataInicio(): Date {
        return this.dataInicio;
    }

    public getDataConclusao(): Date | string {
        return this.dataConclusao;
    }

    public setDataConclusao(dataConclusao: Date | string): void {
        this.dataConclusao = dataConclusao;
    }

    public static buttonAdd(): void {
        const adicionarBtn = document.getElementById("adicionarBtn");
        adicionarBtn?.addEventListener("click", (): void => {
            Task.addTask();
        });
    }

    public static addTask(): void {
        const descricao = (document.getElementById("descricaoTarefa") as HTMLInputElement).value;
        if (descricao.trim() === "") {
            alert("A descrição da tarefa não pode estar vazia.");
            return;
        }

        const dataInicio = new Date();
        const task = new Task(descricao, dataInicio);

        Task.addTaskToTable(task);

        (document.getElementById("descricaoTarefa") as HTMLInputElement).value = "";
    }

    public static addTaskToTable(task: Task): void {
        const tabelaTarefas = document.getElementById("tabelaTarefas")?.querySelector("tbody");
        if (!tabelaTarefas) return;

        const row = tabelaTarefas.insertRow();

        row.insertCell(0).innerText = task.getId().toString();
        row.insertCell(1).innerText = task.getDescricao();
        row.insertCell(2).innerText = task.getDataInicio().toLocaleDateString();
        row.insertCell(3).innerText = task.getDataConclusao().toString();

        const actionsCell = row.insertCell(4);

        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remover";
        removeBtn.addEventListener("click", () => Task.confirmRemoveTask(row, task));
        actionsCell.appendChild(removeBtn);

        const finishBtn = document.createElement("button");
        finishBtn.innerText = "Finalizar";
        finishBtn.addEventListener("click", () => Task.finishTask(row, task));
        actionsCell.appendChild(finishBtn);

        const reopenBtn = document.createElement("button");
        reopenBtn.innerText = "Reabrir";
        reopenBtn.style.display = "none"; // Inicialmente oculto
        reopenBtn.addEventListener("click", () => Task.reopenTask(row, task));
        actionsCell.appendChild(reopenBtn);
    }

    public static finishTask(row: HTMLTableRowElement, task: Task): void {
        const currentDate = new Date();
        task.setDataConclusao(currentDate);

        row.cells[3].innerText = task.getDataConclusao().toString();

        const finishBtn = row.querySelector("button:nth-child(2)") as HTMLButtonElement;
        if (finishBtn) {
            finishBtn.setAttribute("disabled", "true");
        }

        const reopenBtn = row.querySelector("button:last-child") as HTMLButtonElement;
        if (reopenBtn) {
            reopenBtn.style.display = "inline";
        }
    }

    public static reopenTask(row: HTMLTableRowElement, task: Task): void {
        task.setDataConclusao("");
        row.cells[3].innerText = task.getDataConclusao().toString();

        const finishBtn = row.querySelector("button:nth-child(2)") as HTMLButtonElement;
        if (finishBtn) {
            finishBtn.removeAttribute("disabled");
        }

        const reopenBtn = row.querySelector("button:last-child") as HTMLButtonElement;
        if (reopenBtn) {
            reopenBtn.style.display = "none";
        }
    }

    public static confirmRemoveTask(row: HTMLTableRowElement, task: Task): void {
        if (task.getDataConclusao()) {
            alert("Não é possível excluir uma tarefa finalizada.");
            return;
        }

        const confirmacao = confirm("Você tem certeza de que deseja excluir esta tarefa?");
        if (confirmacao) {
            Task.removeTask(row);
        }
    }

    public static removeTask(row: HTMLTableRowElement): void {
        row.remove();
    }
}

Task.buttonAdd();
