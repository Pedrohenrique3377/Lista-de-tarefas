const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const tarefa = input.value.trim();

    if (tarefa !== "") {
        const li = document.createElement("li");

        // Cria o span para o texto da tarefa
        const textSpan = document.createElement("span");
        textSpan.textContent = tarefa;
        textSpan.classList.add("task-text"); // Classe para o estilo do texto

        // FUNCIONALIDADE DE CHECK: Alterna a classe "completed" ao clicar no texto
        textSpan.addEventListener("click", function() {
            textSpan.classList.toggle("completed");
        });

        li.appendChild(textSpan);

        // Cria o botão de excluir
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = '<i class="ph ph-trash"></i>';
        deleteBtn.classList.add("delete-btn");

        // Funcionalidade de deletar
        deleteBtn.addEventListener("click", function() {
            li.remove();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        input.value = "";
    }
});