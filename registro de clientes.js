//Registro de Clientes
//Paso 1 Ingresar datos
let nombre = prompt("Ingrese el nombre del cliente:");
let edad = parseInt(prompt("Ingrese la edad del cliente:"));
let correo = prompt("Ingrese el correo electrónico del cliente:");
//objeto llamado cliente
let cliente = {
    nombre: nombre,
    edad: edad,
    correo: correo
};
alert(
    "Nombre: " + cliente.nombre +
    "\nEdad: " + cliente.edad +
    "\nCorreo: " + cliente.correo
);