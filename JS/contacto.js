const miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    let mensaje = document.getElementById("mensaje").value;

console.log("--> Informacion recolectada", {
    nombre,
    apellido,
    correo,
    telefono,
    mensaje,   
})

    if (nuevoUsuario(
        nombre,
        apellido,
        correo,
        telefono,
        mensaje,       
    )) {
        console.table(registros);
    } else {
        alert("Por favor verifica los datos ingresados")
    }
});




