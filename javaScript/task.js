// elementos da tarefa
// var cardTitle = document.querySelector(".js-card-title");
// var cardText = document.querySelector(".js-card-text");

// var btn = document.querySelector(".js-btn-fast");

// btn.addEventListener('click', function(e){
//   e.preventDefault();   
//   cardTitle.innerHTML = "Quimica";
//   cardText.innerHTML = "estudar para prova";
// })


// ativando e desativando input
var btnCallInp = document.querySelector(".js-list-plus");
var hide = document.querySelector(".hide");

btnCallInp.addEventListener('click', function(e){
  e.preventDefault();
  hide.style.display = 'block';
})

// pegando os elementos do html para criar a tarefa
var inputElement = document.querySelector(".new-task-input");
var addTaskButton = document.querySelector(".new-task-button");
var taskContainer = document.querySelector(".task-container");

// verifica o tamanho do input
const validaInput = () => inputElement.value.trim().length > 0;  

const handleAddTask = () => { 
  
  const inputIsValid = validaInput();
  
  if(!inputIsValid){  // verifica se o valor do input é valido
    return inputElement.classList.add("error-input");
  }

  
  // criando a tarefa
  const taskItemContainer = document.createElement("div");
  taskItemContainer.classList.add("task-item");
  
  // criando o titulo
  const taskText = document.createElement("p");
  taskText.innerText = inputElement.value;

  // icone de minus
  const iconItem = document.createElement("i");
  iconItem.classList.add("bx");
  iconItem.classList.add("bx-minus");

  taskItemContainer.appendChild(iconItem);
  taskItemContainer.appendChild(taskText);
  taskContainer.appendChild(taskItemContainer)
}

// atribuindo a função de add tarefa
addTaskButton.addEventListener("click", () => handleAddTask())







// rascunho 
/* 
// inserindo na lista
var btnAddList = document.querySelector(".btn-plus");
var lista = document.querySelectorAll("ul li ul li");

// pegando o texto do input
var inputList = document.querySelector(".inp-list-plus");

btnAddList.addEventListener('click', function(e){
  e.preventDefault();
  // add lista
  
})  */