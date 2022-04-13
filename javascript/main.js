const resta = (a,b) => a-b;
const multiplicar = (a,b) => a*b;

let precio = prompt ("Ingrese su monto para aplicar el descuento del 10%.")
let descuento = 10;
let nuevoPrecio = resta (precio, descuento);

alert ("El nuevo precio con el descuento aplicado es de $" + nuevoPrecio);

let cantidad = prompt ("Ahora ingrese la cantidad de articulos")
let nuevoPrecio1 = multiplicar (nuevoPrecio,cantidad);

alert ("El total es de $" + nuevoPrecio1)


