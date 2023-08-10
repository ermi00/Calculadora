let pantalla = document.querySelector(".div-pantalla");
let botones = document.querySelectorAll(".btn");

botones.forEach(function(boton){
    boton.addEventListener("click", function(){
        let botonPresionado = boton.textContent;


        if(boton.id === "LIMPIAR"){
            pantalla.textContent = "0";
            return;
        }

        if(boton.id === "BORRAR"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "ERROR"){
                pantalla.textContent = "0"
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if(boton.id === "igual"){
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "ERROR"
            }
            return;
        }
        
        if(pantalla.textContent === "0" || pantalla.textContent === "ERROR"){
            pantalla.textContent = botonPresionado;
        } else{
            pantalla.textContent += botonPresionado;
        }

        if(pantalla.textContent.length === 18){
            pantalla.textContent = "Caracteres Maximos"
        }
    })
})