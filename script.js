document.addEventListener("DOMContentLoaded", function () {
    const trashIcons = document.querySelectorAll(".fa-trash");
    const upIcons = document.querySelectorAll(".fa-up-long");
    const downIcons = document.querySelectorAll(".fa-down-long");
    const titleContainer = document.querySelector(".title-container");
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");

    trashIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            const box = icon.closest(".box-container");
            if(box){
                box.remove()
            }
        });
    });

    upIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            const currentBox = icon.closest(".box-container");
            const previousBox = currentBox.previousElementSibling;

            if(previousBox && previousBox.classList.contains("box-container")) {
                currentBox.parentNode.insertBefore(currentBox, previousBox);
            }
        });
    });

    downIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            const currentBox = icon.closest(".box-container");
            const nextBox = currentBox.nextElementSibling;

            if(nextBox && nextBox.classList.contains("box-container")){
                currentBox.parentNode.insertBefore(nextBox,currentBox);
            }
        });
    });

    addTaskBtn.addEventListener("click", function (){
        const taskText = taskInput.value.trim();
        if(taskText === "") return;

        const newBox = document.createElement("div");
        newBox.classList.add("box-container");
        newBox.innerHTML = `
            <p class="mission">${taskText}</p>
            <div class="icon-container">
                <i class="fa-solid fa-trash"></i>
                <i class="fa-solid fa-up-long"></i>
                <i class="fa-solid fa-down-long"></i>
            </div>
        `;

        titleContainer.appendChild(newBox);
        taskInput.value = "";

        const trash = newBox.querySelector(".fa-trash");
        const up = newBox.querySelector(".fa-up-long");
        const down = newBox.querySelector(".fa-down-long");

        trash.addEventListener("click", () => newBox.remove());

        up.addEventListener("click", () => {
            const prev = newBox.previousElementSibling;
            if (prev && prev.classList.contains("box-container")) {
                newBox.parentNode.insertBefore(newBox, prev);
            }
        });

        down.addEventListener("click", () => {
            const next = newBox.nextElementSibling;
            if (next && next.classList.contains("box-container")) {
                newBox.parentNode.insertBefore(next, newBox);
            }
        });
    });
});