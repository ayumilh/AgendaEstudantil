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

// inserindo na lista
var btnAddList = document.querySelector(".btn-plus");
var lista = document.querySelectorAll("ul li ul li");

// pegando o texto do input
var inputList = document.querySelector(".inp-list-plus");

btnAddList.addEventListener('click', function(e){
  e.preventDefault();
  // add lista
  let titleList = inputList.value;
  console.log(titleList);
})