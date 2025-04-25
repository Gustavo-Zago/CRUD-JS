const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: "127.0.0.1",
    port: 3307,
    user: "root",
    password: "",
    database: "meubanco"
});

module.exports = conexao;