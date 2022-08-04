


/*
do {
    let x = Number(prompt("ingrese un numero"))
    let y = Number(prompt("ingrese un segundo numero"))
    if (x > y) {
        alert(x + " es mayor que " + y)
    } else if (x < y) {
        alert(x + " es menor que " + y)
    } else {
        alert("Los numeros son iguales")
    }
} while (confirm("Elegir otros numeros?")) {

}
*/

// Buscando algun proceso que me resultase interesante pense en dado cuatro jugadores ( para Padel por ejemplo) de manera aleatoria me arme los equipos
// Pero lo unico que logre hacer es de un grupo de 4 seleccionar dos de manera aleatoria.
// Bueno busque la funcion random y ver como podia dividir los grupos de manera aleatoria pero sin repetir numeros.
//
let numero1=0
let numero2=0
function grupoRandom() {

     numero1 = Math.floor(Math.random() * 4);
     numero2 = Math.floor(Math.random() * 4);
   if (numero1 != numero2) {
   // console.log("son distintos")

   } else {
        return grupoRandom()
    }
    return numero1
}
grupoRandom()


let jugador0 = prompt("ingrese nombre jugador 1")
let jugador1 = prompt("ingrese nombre jugador 2")
let jugador2 = prompt("ingrese nombre jugador 3")
let jugador3 = prompt("ingrese nombre jugador 4")
let jugadores = [jugador0,jugador1,jugador2,jugador3] // lo unico que se me ocurrio fue ponerlos en array

// console.log(jugadores)

alert(jugadores[grupoRandom()] + " y " + jugadores[numero2] + " juegan en equipo juntos")

//Ahora es como que estos valores random no los puedo almacenar en variables ya que si lo hago y lo vuelvo a reutilizar cambian
//Por eso se me dificulto un toque la idea de poner un equipo (elegidos arriba) y ya definidos, elegir los otros dos para el equipo 2.
//




