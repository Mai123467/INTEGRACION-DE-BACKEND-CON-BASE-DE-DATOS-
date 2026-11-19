import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

async function registrarCliente() {
    // Inicializar la interfaz para leer desde la consola
    const rl = readline.createInterface({ input, output });

    try {
        // Paso 1: Ingresar datos usando la consola
        let nombre = await rl.question("Ingrese el nombre del cliente: ");
        let edad = parseInt(await rl.question("Ingrese la edad del cliente: "));
        let correo = await rl.question("Ingrese el correo electrónico del cliente: ");

        // Objeto llamado cliente
        let cliente = {
            nombre: nombre,
            edad: edad,
            correo: correo
        };

        // Mostrar los datos en la consola (reemplazo de alert)
        console.log("\n--- Datos del Cliente Registrado ---");
        console.log("Nombre: " + cliente.nombre);
        console.log("Edad: " + cliente.edad);
        console.log("Correo: " + cliente.correo);

    } finally {
        // Cerrar la interfaz de lectura
        rl.close();
    }
}

registrarCliente();