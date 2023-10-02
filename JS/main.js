

/*let bienvenda = prompt("Bienvenido a SPA-nda.\n Si ya estas registardo escribe " + "SI" + " de lo contrario escribe" + " NO").toUpperCase();
if (bienvenda == "SI"){
    let correo = prompt("cual es el correo del usuario");
    for(const unSuscriptor of clientesMock) {
        if(unSuscriptor.correo === correo) {
            existe = alert("El correo de suscriptor el correcto");
        } else ( alert("El correo no esta registrado"))} 
            let clientes = [];
let registros = prompt("Quieres registrate en SPA nda?");
while (registros.trim().toUpperCase() === "SI") {
    let nombre = prompt("ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let correo = prompt("ingrese su correo electronico");

    let unSuscriptor = new Suscriptor(
        nombre,
        apellido,
        correo
    );
    clientes.push(unSuscriptor);
    registros = prompt("Quieres registrate en SPA nda?");
}

console.log("--> Los datos que cargo el cliente son los siguientes<--");

for (const unSuscriptor of clientes) {
  console.log(unSuscriptor);
}

} if (bienvenda == "NO") { let clientes = [];
let registros = prompt("Quieres registrate en SPA nda?");
while (registros.trim().toUpperCase() === "SI") {
    let nombre = prompt("ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let correo = prompt("ingrese su correo electronico");

    let unSuscriptor = new Suscriptor(
        nombre,
        apellido,
        correo
    );
    clientes.push(unSuscriptor);
    registros = prompt("Quieres registrate en SPA nda?");
}

console.log("--> Los datos que cargo el cliente son los siguientes<--");

for (const unSuscriptor of clientes) {
  console.log(unSuscriptor);
}
};*/


let registro = clientesMock.map ((a) => {
    return new Suscriptor (
        a.nombre,
        a.apellido,
        a.correo,
        a.usuario,
        a.contrasena,
    );
});

const usuarios = (
    nombre = "",
    apellido = "",
    correo = "",
    usuario = "",
    contrasena = "",
) => {
    let informacion = [];
    if (nombre.length == 0) {
        informacion.push("Ingrese su nombre")
    }
    if (apellido.length == 0) {
        informacion.push("Ingrese su apellido")
    }
    if (correo.length == 0) {
        informacion.push("Ingrese su correo")
    }
    if (usuario.length == 0) {
        informacion.push("Ingrese su usuario")
    }
    if (contrasena.length == 0) {
        informacion.push("Ingrese su contraseña")
    }

    return informacion
};
const isExisteSuscriptor = (registro = [], identificador = "") => {
    return registro.some (
        (unSuscriptor) => unSuscriptor.correo === identificador);
};

const nuevoUsuario = (
    nombre,
    apellido,
    correo,
    usuario,
    contrasena,
) => {
    const errores = usuarios (
        nombre,
        apellido,
        correo,
        usuario,
        contrasena, 
    );

    if ( errores.length !== 0) {
        console.table(errores);
        return false;
    }


if (!isExisteSuscriptor(registro, correo)) {
    let unSuscriptor = new Suscriptor (
        nombre,
        apellido,
        correo,
        usuario,
        contrasena, 
    );

    clientesMock.push(unSuscriptor);

    console.table(clientesMock);
} else {
    console.table(["El correo" + correo + "ya se encuentra registrado"])
}

return true;
};


let respuesta = prompt ("quieres registrate en la plataforma?");
while (respuesta.toUpperCase().trim() === "SI") {
    let nombre = prompt ("Escribe tu nombre");
    let apellido = prompt ("Escribe tu apellido");
    let correo = prompt ("Escribe tu correo");
    let usuario = prompt ("Ingresa tu usuario");
    let contrasena = prompt ("Ingresa tu contraseña");

    if (nuevoUsuario(
        nombre,
        apellido,
        correo,
        usuario,
        contrasena,       
    )) {

    } else {
        alert("Por favor verifica los datos ingresados")
    }
    respuesta = prompt ("quieres registrate en la plataforma?");
};





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
   numeroProductos = parseInt(prompt("Cuantos productos quieres comprar?"))
};

if (opcionContinuar !== "S") {
    continuarComprando = false;
    alert("Gracias por su compra. ¡Vuelva pronto!");
}