var Task = /** @class */ (function () {
    function Task(descricao, dataInicio, dataConclusao) {
        this.id = Math.floor(Math.random() * 10000);
        this.descricao = descricao;
        this.dataInicio = dataInicio;
        this.dataConclusao = dataConclusao || "";
    }
    Task.prototype.getId = function () {
        return this.id;
    };
    Task.prototype.getDescricao = function () {
        return this.descricao;
    };
    Task.prototype.getDataInicio = function () {
        return this.dataInicio;
    };
    Task.prototype.getDataConclusao = function () {
        return this.dataConclusao;
    };
    Task.prototype.setDataConclusao = function (dataConclusao) {
        this.dataConclusao = dataConclusao;
    };
    Task.buttonAdd = function () {
        var adicionarBtn = document.getElementById("adicionarBtn");
        adicionarBtn === null || adicionarBtn === void 0 ? void 0 : adicionarBtn.addEventListener("click", function () {
            Task.addTask();
        });
    };
    Task.addTask = function () {
        var descricao = document.getElementById("descricaoTarefa").value;
        if (descricao.trim() === "") {
            alert("A descrição da tarefa não pode estar vazia.");
            return;
        }
        var dataInicio = new Date();
        var task = new Task(descricao, dataInicio);
        Task.addTaskToTable(task);
        document.getElementById("descricaoTarefa").value = "";
    };
    Task.addTaskToTable = function (task) {
        var _a;
        var tabelaTarefas = (_a = document.getElementById("tabelaTarefas")) === null || _a === void 0 ? void 0 : _a.querySelector("tbody");
        if (!tabelaTarefas)
            return;
        var row = tabelaTarefas.insertRow();
        row.insertCell(0).innerText = task.getId().toString();
        row.insertCell(1).innerText = task.getDescricao();
        row.insertCell(2).innerText = task.getDataInicio().toLocaleDateString();
        row.insertCell(3).innerText = task.getDataConclusao().toString();
        var actionsCell = row.insertCell(4);
        var removeBtn = document.createElement("button");
        removeBtn.innerText = "Remover";
        removeBtn.addEventListener("click", function () { return Task.confirmRemoveTask(row, task); });
        actionsCell.appendChild(removeBtn);
        var finishBtn = document.createElement("button");
        finishBtn.innerText = "Finalizar";
        finishBtn.addEventListener("click", function () { return Task.finishTask(row, task); });
        actionsCell.appendChild(finishBtn);
        var reopenBtn = document.createElement("button");
        reopenBtn.innerText = "Reabrir";
        reopenBtn.style.display = "none"; // Inicialmente oculto
        reopenBtn.addEventListener("click", function () { return Task.reopenTask(row, task); });
        actionsCell.appendChild(reopenBtn);
    };
    Task.finishTask = function (row, task) {
        var currentDate = new Date();
        task.setDataConclusao(currentDate);
        row.cells[3].innerText = task.getDataConclusao().toString();
        var finishBtn = row.querySelector("button:nth-child(2)");
        if (finishBtn) {
            finishBtn.setAttribute("disabled", "true");
        }
        var reopenBtn = row.querySelector("button:last-child");
        if (reopenBtn) {
            reopenBtn.style.display = "inline";
        }
    };
    Task.reopenTask = function (row, task) {
        task.setDataConclusao("");
        row.cells[3].innerText = task.getDataConclusao().toString();
        var finishBtn = row.querySelector("button:nth-child(2)");
        if (finishBtn) {
            finishBtn.removeAttribute("disabled");
        }
        var reopenBtn = row.querySelector("button:last-child");
        if (reopenBtn) {
            reopenBtn.style.display = "none";
        }
    };
    Task.confirmRemoveTask = function (row, task) {
        if (task.getDataConclusao()) {
            alert("Não é possível excluir uma tarefa finalizada.");
            return;
        }
        var confirmacao = confirm("Você tem certeza de que deseja excluir esta tarefa?");
        if (confirmacao) {
            Task.removeTask(row);
        }
    };
    Task.removeTask = function (row) {
        row.remove();
    };
    return Task;
}());
Task.buttonAdd();
