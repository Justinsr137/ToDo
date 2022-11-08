let idCounter = 0;
let userInput = document.querySelector('.userInput');
const input = document.querySelector('input[type="text"]')

userInput.addEventListener('submit', (event)=>{
    event.preventDefault();
    addTask();
});

let addTask = ()=>{
    idCounter++;

    let newValue = input.value;

    list.innerHTML += `
    <div class="task-container" id="1">
        <label for="">
            <input type="checkbox" name="" id="${idCounter}">
            
            ${newValue}
        </label>
        <img src="./images/papelera-de-reciclaje.png" class="closeBtn">
    </div>`

    input.value = '';
    updateStats();
}

list.addEventListener('click', (event)=>{
    if(event.srcElement.nodeName == 'INPUT'){
        updateStats();
    }else if(event.srcElement.nodeName == 'IMG'){
        deleteTask(event.srcElement.parentNode.id);
    }
});

let updateStats = ()=>{
    let element = list.querySelectorAll('div');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');
    stats.innerHTML = `<p>Tareas pendientes: ${element.length} Completadas: ${checkbox.length}</p>`
}

let deleteTask = (id)=>{
    let taskToDelete = document.getElementById(id);
    list.removeChild(taskToDelete);
    updateStats();
}