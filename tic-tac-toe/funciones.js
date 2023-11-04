function resetear(){
    espacios.forEach( space =>{
        moduleGanador.classList.add("hide")
        moduleJuego.classList.add("hide")
        moduleInicio.classList.remove("hide")
        space.classList.replace("x", "default")
        space.classList.replace("o", "default")
    })
    for (let i = 0; i < gameState.length; i++) {
        gameState[i]="";
        
    }
}

function validar(){
    playWin = false
    for (let i = 0; i < winners.length; i++) {
        let windCondition = winners[i]
        let a = gameState[windCondition[0]]
        let b = gameState[windCondition[1]]
        let c = gameState[windCondition[2]]
        if(a=="" || b=="" || c==""){
            continue
        }
        if (a==b && b==c) {
            mssg.innerHTML = `Ganaste jugador ${jugador}`
            playWin = true
        }
    
    }
    
    if (playWin) {
        moduleJuego.classList.add("hide")
        moduleGanador.classList.remove("hide")
    }
}