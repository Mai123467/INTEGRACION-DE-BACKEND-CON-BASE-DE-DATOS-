const  pool  = require('./bd');

const crearCliente = async () => {
    try {
        const res = await pool.query(
            `INSERT INTO clientes
            (nombre, cedula, telefono)
            VALUES ($1, $2, $3)
            RETURNING *`,
            ['Gabriela', '12345678', '4141234567']
        );

        console.log('Cliente creado:');
        console.log(res.rows[0]);

    } catch (err) {
        console.error('Error al agregar:', err);
    }
};

crearCliente();