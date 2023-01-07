// elementos da tarefa
var cardTitle = document.querySelector(".js-card-title");
var cardText = document.querySelector(".js-card-text");

var btn = document.querySelector(".js-btn-fast");

btn.addEventListener('click', function(e){
  e.preventDefault();   
  cardTitle.innerHTML = "Quimica";
  cardText.innerHTML = "estudar para prova";
})

// add lista de tarefas no nav-list
var addList = document.querySelector(".js-list-plus");
