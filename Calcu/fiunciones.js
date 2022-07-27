let pantalla = document.getElementById("pantalla")
let uno = document.getElementById("uno")
let dos = document.getElementById("dos")
let tres = document.getElementById("tres")
let cuatro = document.getElementById("cuatro")
let cinco = document.getElementById("cinco")
let seis = document.getElementById("seis")
let siete = document.getElementById("siete")
let ocho = document.getElementById("ocho")
let nueve = document.getElementById("nueve")
let cero = document.getElementById("cero")
let multi = document.getElementById("por")
let resta = document.getElementById("resta")
let suma = document.getElementById("suma")
let division = document.getElementById("dividir")
let borrar = document.getElementById("borrar")
let numero1 = 0
let numero2 = 0
let position = 0
let resultado
let operacion

function imprimir(char){
    if(position==0){
        numero1 = pantalla.value+char
        pantalla.value = numero1
    }else{
        numero2 = pantalla.value+char
        pantalla.value = numero2
    }
}
function sumar(){
    position = 1
    operacion = 1
    pantalla.value = ""
}
function restar(){
    position = 1
    operacion = 2
    pantalla.value = ""
}
function multiplicar(){
    position = 1
    operacion = 3
    pantalla.value = ""
}
function dividir(){
    position = 1
    operacion = 4
    pantalla.value = ""
}
function respuesta(){
    position = 0
    switch (operacion) {
        case 1:
            resultado = Number(numero1)+Number(numero2)
          break;
        case 2:
            resultado = Number(numero1)-Number(numero2)
          break;
        case 3:
            resultado = Number(numero1)*Number(numero2)
          break;
        case 4:
            if(numero2==0){
                resultado = "No se puede dividir por 0"
            }else{
                resultado = Number(numero1)/Number(numero2)
            }
          break;
      }
    pantalla.value = resultado
}
function limpiar(){
    pantalla.value = ""
    numero1 = 0
    numero2 = 0
}