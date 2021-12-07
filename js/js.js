const loader = document.querySelector(".loader");
const container = document.querySelector(".container");
const header = document.querySelector(".header");
const like = document.getElementById("like");



function myChat() {   
  
    document.getElementById("chatt").classList.toggle("show");
  }
  window.onclick = function(event){
    if(!event.target.matches('.chat3')) {//cierra el submenu si se clickea afuera
        var dropdowns = document.getElementsByClassName("chatList");
        var i;
        for (i = 0;  i < dropdowns.length; i++) {
          var openChat = dropdowns[i];
          //Busca dentro de drop-content los elementos con la clase show
        if (openChat.classList.contains('show')){

          openChat.classList.remove('show');
        }
      }
    }
}
function myFunction(x , numerito) {
    x.classList.toggle("fas"); 
    var elemento = document.getElementById(numerito);
    var num = parseInt(elemento.innerHTML);
    if(x.classList.contains("fas")){
        num+=1;
    }
    else{
        num-=1;
    }
    elemento.innerHTML = num
  }

function iniciar(){
    setTimeout(() =>{
        loader.style.opacity = 0;
        loader.style.display = 'none';

        container.style.opacity = 1;
    }
    ,Math.random() * (2000 - 500) + 500);
}

iniciar();


