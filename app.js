



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




