const loader = document.querySelector(".loader");
const container = document.querySelector(".container");
const header = document.querySelector(".header");

function iniciar(){
    setTimeout(() =>{
        loader.style.opacity = 0;
        loader.style.display = 'none';

        container.style.opacity = 1;
        header.style.opacity = 1;
    }
    ,Math.random() * (2000 - 500) + 500);
}

iniciar();


