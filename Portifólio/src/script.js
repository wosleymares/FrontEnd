const box = document.querySelector (".carrossel");
const img = document.querySelectorAll(".carrossel-items img");

let cont = 0;

function carrossel(){
    cont++;

    if(cont > img.length -1){
        cont = 0;
    }

    box.style.transform = `translateX(${-cont * 720}px)`
}

setInterval(carrossel, 2000);