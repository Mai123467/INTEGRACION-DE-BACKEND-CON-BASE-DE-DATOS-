const { Pool } = require('pg');
//conexion con el db
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'taller_motos',
    password: '2109',
    port: 5432
  
});
  module.exports = pool;
/*const getclientes = async () => {
    try {
    const res = await pool.query(
        'SELECT * FROM clientes'
    );
    console.log(res.rows);
} catch (err) {
        console.error('Error ejecutando consulta', err);
    }
}; 

//getclientes();
/* Paso 1 read: Node.js se ejecutó correctamente, se instaló la librería pg,
La conexión a PostgreSQL funciona bien, La tabla clientes existe,
La consulta SELECT * FROM clientes se ejecutó bien. */
