const loader = document.querySelector(".loader");
const container = document.querySelector(".container");
const header = document.querySelector(".header");
const like = document.getElementById("like");


function myFunction(x) {
    x.classList.toggle("fas");    
    var elemento = document.getElementById("numero");
    var num = parseInt(elemento.innerHTML);
    num+=1;
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


