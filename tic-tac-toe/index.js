

const espacio = document.querySelectorAll(".space")
const player = document.querySelectorAll(".player")
const reinicio = document.querySelector("input")
const aceptar = document.querySelector(".aceptar")
const modulo1 = document.querySelector(".module")
const module2 = document.querySelector(".module-second")
const messg = document.querySelector(".mensaje")

const winners =[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7],]

let gameState = ["", "", "", "", "", "", "", "", ""]

let jugador

//Esta funcion es para elegir si el primer jugador es X o O
player.forEach(pl =>{
    pl.addEventListener("click", ()=>{
        jugador = pl.id
        //console.log(jugador)
        
    })
})

//Si preciona el voton de reinicio todos los cuadrados van a volver a ser grices
reinicio.addEventListener("click", ()=>{
    display(0)
    inicio()
})

aceptar.addEventListener("click", ()=>{
    display(0)
    inicio()
})


//El espacio seleccionado va a cambiar dependiendo si es X o O
espacio.forEach(espacios =>{
    espacios.addEventListener("click", ()=>{
        //console.log(jugador)

        if (jugador==0 && espacios.classList == "space default") {
            espacios.classList.remove("default")
            espacios.classList.add("x")
            gameState[espacios.id-1] = "x"
            validacion()
            jugador = 1
        }else if(jugador==1 && espacios.classList == "space default"){
            espacios.classList.remove("default")
            espacios.classList.add("o")
            gameState[espacios.id-1] = "o"
            validacion()
            jugador = 0
        }else{
            console.log("ERROR")
        }
    })
    

})

function validacion(){
    let roundWin=false
    let playerWin
    for (let i = 0; i <= 7; i++) {
        const winCondition = winners[i];
        let a = gameState[winCondition[0]-1]
        let b = gameState[winCondition[1]-1]
        let c = gameState[winCondition[2]-1]
        if(a=="" || b=="" || c==""){
            continue
        }
        if (a==b && b==c) {
            playerWin = `${a}` 
            roundWin = true
        }
    }

    if (roundWin) {
        ganador(playerWin)
        console.log(roundWin)
        display(1)
    }
}

function ganador(player){
    let mensaje = `Felicidades ganaste ${player}`
    messg.innerText = mensaje
}

function inicio() {
    console.log("1")
    espacio.forEach(elem =>{
        elem.classList.remove("x")
        elem.classList.remove("o")
        elem.classList.add("default")
        jugador = undefined
        for (let i = 0; i <=9; i++) {
            gameState[i] = "";
        }
    })
    
}

function display(muestro){
    if (muestro) {
        $(".module").hide()
        $(".module-second").show()
        muestro = 0
    }else{
        $(".module-second").hide()
        $(".module").show()
        muestro = 1
    }
    
}