let nombreCliente;
const impuesto = "16%";

do {
  nombreCliente = prompt("Bienvenido a SPA'nda, ingrese su nombre para continuar").toUpperCase();
} while (!nombreCliente || !isNaN(nombreCliente));
alert("¡Hola! " + nombreCliente + ", gracias por ingresar a SPA'nda, un lugar creado para ti")

let producto;
do {
  producto = prompt("Que producto te interesa adquirir:\n. Velas\n. Aceites\n. Talleres").toUpperCase();
} while (!producto || !isNaN(producto)); 
alert ("Vemos que estas interesado en " + producto)
; 
let numeroProductos;
do {
  numeroProductos = parseInt(prompt("Cuantos productos quieres comprar?"));
} while (isNaN(numeroProductos) || numeroProductos > 1000);
if (numeroProductos <= 4) {
    alert("En compras mayores a 5 productos tenemos descuentos de hasta 50%");
} else if (numeroProductos >= 5) {
    alert("Con tu compra puedes obter descuentos que van desde el 15% hasta el 50%")
};

let precio;
do {
    precio = parseFloat(prompt("cual es el precio de tu compra?"))
} while (isNaN(precio) || precio <= 0);
if (precio <= 500) {   
}
let descuento = 0;
let total = 0;
if (precio < 500) {
    total = precio;
} else if (precio > 500 && 600) {
    descuento = precio * 0.15;
}else if (precio > 600 && precio < 1000) {
    descuento = precio * 0.25;
} else {
    descuento = precio * 0.45;
}
total = precio - descuento;
alert(" vas a tener que pagar un total de " + total);
if( descuento > 0){
    alert("El descuento recibido es de " + descuento);
}else{
    alert("Te invitamos a comprar mas productos para tener descuentos");
}

let opcionContinuar;
do {
    opcionContinuar = prompt("¿Desea continuar comprando? (S/N)").toUpperCase();
  } while (opcionContinuar !== "S" && opcionContinuar !== "N");
if(opcionContinuar !== "N") {
   let numeroProductos = parseInt(prompt("Cuantos productos quieres comprar?"))
};

if (opcionContinuar !== "S") {
    continuarComprando = false;
    alert("Gracias por su compra. ¡Vuelva pronto!");
}