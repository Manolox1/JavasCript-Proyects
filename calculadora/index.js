const displayValorActual = document.getElementById("valor-actual")
const displayValorAnterior = document.getElementById("valor-anterior")
const btn = document.querySelectorAll(".numero")
const operadores = document.querySelectorAll(".operador")

const display = new Display(displayValorActual, displayValorAnterior)

btn.forEach(boton => {
    boton.addEventListener("click", ()=> display.agregarNumero(boton.innerHTML) )
});

operadores.forEach(botonOpe =>{
    botonOpe.addEventListener("click", ()=> display.computar(botonOpe.value) )
})