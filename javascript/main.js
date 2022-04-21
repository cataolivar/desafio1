/*
ARRAY + PUSH (opcion 1)
let carrito = []

let producto = prompt ("Ingrese productos a su carrito. Para finalizar escriba listo")

while (producto != "listo")
{
    carrito.push (producto);
    alert (carrito)
    producto = prompt ("Ingrese otro producto. Para finalizar escriba listo")
}
alert ("Este es su carrito de compras: ")
alert (carrito)
*/

//SIMULADOR
const resta = (a,b) => a-b;
const multiplicar = (a,b) => a*b;

let precio = prompt ("Ingrese su monto para aplicar el descuento del 10%.")
let descuento = precio*0.10;
let nuevoPrecio = resta (precio, descuento);

alert ("El nuevo precio con el descuento aplicado es de $" + nuevoPrecio);

let cantidad = prompt ("Ahora ingrese la cantidad de articulos")
let nuevoPrecio1 = multiplicar (nuevoPrecio,cantidad);

alert ("El total es de $" + nuevoPrecio1)

// ARRAY + JOIN (opcion 2)

let array = ["Televisor", "Celular", "Laptop", ""];

alert ("Gracias a su descuento, usted puede elegir entre uno de estos productos y recibir otro descuento : " + array.join (" + 15% de desc. "));
prompt ("Indique cual producto desea.");


