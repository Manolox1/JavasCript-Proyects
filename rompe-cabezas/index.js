//tomo las partes del html

const ver = document.querySelectorAll(".ver")
const btn_ini = document.getElementById("iniciar")
const puzzle_whi=document.querySelectorAll(".br-bl")

//Variables para la seccion de movimientos de piezas
const puzzle = document.querySelectorAll(".puzzle")
const secciones_puz = document.querySelectorAll(".seccion-puzzle")

//variables globales que se van a usar
let id_palabra = ["uno", "cuatro", "siete", "dos", "cinco","ocho","tres","seis","nueve"]
let imagenes = []
let finalizacion = 9



//boton de incio para actualizar el lugar de las piezas
btn_ini.addEventListener("click",()=>{
    finalizacion=9
    cargaImagenes()

    let devuelta = []
    puzzle_whi.forEach(pieza=>{
        pieza.id = id_palabra[0]
        devuelta.push(pieza.id)
        id_palabra.shift()
        //console.log("pieza.id: "+pieza.id)
    })
    id_palabra=[...devuelta]

    
})

//Carga la pagina, con las imagenes del lado derecho
window.onload=cargaImagenes

function cargaImagenes() {
    let piezas = numsAleatorio()
    imagenes=[...piezas]

    const i=0
    ver.forEach(ver =>{
        ver.id = imagenes[i]
        imagenes.shift()
        //console.log("el id es: "+ver.id)
    })
}




//funcion para tener las posiciones de carga de las imagenes en pantalla
function numsAleatorio(){
    let array = []
    let devolver = []

    for (let i = 0; i < 9; i++) {
        let numero = getRandom()
        if (verificar(array, numero)&&array.length!=9) {
            i--
        }else{
            array[i]=numero
            devolver[i] = "puz-"+id_palabra[[array[i]-1]]
        }
    }
    return devolver
}

function getRandom() {
    let min = Math.ceil(1)
    let max = Math.floor(10)
    return Math.floor(Math.random() * (max - min)+min)
}

function verificar(array, numero) {
    let existe = false
    for (let i = 0; i < array.length; i++) {
        if (array[i]===numero) {
            existe=true
            return existe
        }
    }
    return existe
}


//Movimientos de piezas
puzzle.forEach(puzzle =>{

    puzzle.addEventListener("dragstart", event=>{
        //console.log("Estoy moviendo la pieza: "+puzzle.id)
        event.dataTransfer.setData("id", puzzle.id)
    })

    puzzle.addEventListener("dragover", event=>{
        event.preventDefault()
    })
    
    puzzle.addEventListener("drop", event=>{
        //console.log("Drop "+ puzzle.id)
        const puzzle_id = event.dataTransfer.getData("id")
        //console.log(puzzle_id)
        //puzzle.id = puzzle_id
        const puz_id = "puz-"+puzzle.id
        if (puz_id===puzzle_id) {
            puzzle.id = puzzle_id
            finalizacion=finalizacion-1
            //console.log("piezas para f:"+finalizacion)
        }

        if(finalizacion==0){
            setTimeout(terminaste, 1000)
        }
        
        
    })
})

function terminaste(){
    alert("Felicidades terminaste el puzzle")
}

secciones_puz.forEach(seccion=>{
    seccion.addEventListener("dragover", event=>{
        event.preventDefault()
    })

    seccion.addEventListener("drop", event=>{
        //console.log("Drop")
        const puzzle_id=event.dataTransfer.getData("id")
        //console.log(puzzle_id)
        const puzzle = document.getElementById(puzzle_id)
    })

})