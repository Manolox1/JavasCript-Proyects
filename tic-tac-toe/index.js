const moduleInicio = document.querySelector(".module")
const moduleJuego = document.querySelector(".conteiner")
const moduleGanador =  document.querySelector(".module-2")
const mssg = document.querySelector(".mensaje")
const espacios = document.querySelectorAll(".espacio")
const player = document.querySelectorAll(".player")

const winners = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]

let gameState = ["", "", "", "","","","","",""],
    jugador

player.forEach(pl =>{
    pl.addEventListener("click", () =>{
        jugador=pl.id
        moduleInicio.classList.add("hide")
        moduleJuego.classList.remove("hide")
    })
})

espacios.forEach(space =>{
    space.addEventListener("click", ()=>{
        
        if(jugador=="X" && space.classList == "espacio default"){
            space.classList.replace("default", "x")
            gameState[space.id] = jugador
            validar()
            jugador="O"
        }else if(jugador=="O" && space.classList == "espacio default"){
            space.classList.replace("default", "o")
            gameState[space.id] = jugador
            validar()
            jugador="X"
        }
        console.log(gameState)
    })
})