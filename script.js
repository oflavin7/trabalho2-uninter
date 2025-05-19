let link = document.querySelector("#link");
link.addEventListener("mouseover", trocaCor);
link.addEventListener("mouseout", voltaCor);

function trocaCor(){
  link.style.background="yellow";
}

function voltaCor(){
  link.style.background="green";
}

 document.getElementById("meuBotao").addEventListener("click", function() {
      document.getElementById("meuElemento").style.display = "block";
    });