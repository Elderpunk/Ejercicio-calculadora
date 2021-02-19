const botonNumeros = document.getElementsByName('numero')

const botonOperadores = document.getElementsByName('operaciones')

const botonIgual = document.getElementsByName('igual')[0]

const botonBorrar = document.getElementsByName('borrar')[0]

let resultado = document.getElementById('resultado')

let operacionActual =''
let operacionAnterior =''
let operacion = undefined

botonNumeros.forEach(function (boton){
    boton.addEventListener('click', function(){
        introducirNumero(boton.innerText)
    })
})

botonOperadores.forEach(function (boton){
    boton.addEventListener('click', function(){
        seleccionaOperacion(boton.innerText)
    })
})

botonIgual.addEventListener('click', function(){
    calcular()
    actualizarDisplay()
})

botonBorrar.addEventListener('click', function(){
    limpiarPantalla()
    actualizarDisplay()
})

function introducirNumero(num){
    operacionActual = operacionActual.toString() + num.toString()
    actualizarDisplay()
}

function limpiarPantalla(){
    operacionActual = ""
    operacionAnterior = ''
    operacion = undefined
}

function actualizarDisplay(){
    resultado.value = operacionActual
}

limpiarPantalla()