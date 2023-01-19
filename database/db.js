const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_node_js'
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexión es: '+error);
        return;
    }
    console.log('Conectado a la BD MySQL');
});

module.exports = conexion;