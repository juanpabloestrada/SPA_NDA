function validarNaN(montoProducto) {
    if (montoProducto !== NaN) {
        return true;
    }
    return false;
}

let respuestaUsuario = prompt("Quieres ingresar un ticket?");

while (respuestaUsuario.trim().toUpperCase() == "SI") {
    

let nombre = prompt("Cual es tu dese?");
let apellido = prompt ("Cual es tu apellido?");
let montoProducto = parseFloat(prompt("indicanos el monto de tu compra: "));
let descuento = 0;
let total = 0;


if (montoProducto < 500) {
    total = montoProducto;
} else if (montoProducto < 1000) {
    descuento = montoProducto * 0.15;
}else if (montoProducto < 1500) {
    descuento = montoProducto * 0.25;
} else (montoProducto < 2500 ) {
    descuento = montoProducto * 0.45;
}

total = montoProducto - descuento;

alert(" vas a tener que pagar un total de " + total);
if( descuento > 0){
    alert("El descuento recibido es de " + descuento);
}
respuestaUsuario = prompt("Quieres ingresar un ticket?")
}
alert("Te invitamos a comprar mas productos para tener descuentos");
