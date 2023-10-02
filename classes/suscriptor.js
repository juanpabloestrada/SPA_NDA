class Suscriptor {
    constructor(
        nombre,
        apellido,
        correo,
        usuario,
        contrasena,
    ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.usuario = usuario;
        this.contrasena = contrasena;
    }
    toString = () => { 
        return this.nombre + ", " + this.usuario + ", " + this.correo;
    };
}