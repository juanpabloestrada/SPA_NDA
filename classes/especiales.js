class Especiales {
    constructor(nombre, apellido, correo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.fechaRegistro = new Date().toLocaleDateString();
    }

    toString = () => {
        return this.nombre.toString() + " - " + this.correo.toString();
    };
}