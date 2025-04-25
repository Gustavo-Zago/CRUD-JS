const express = require('express');
const app = express();
const port = 3000;
const router = require('./routers/index'); 
const conexao = require('./infraestrutura/conexao'); 
const tabelas = require('./infraestrutura/tabelas');



// Importa o arquivo de rotas
router(app, express);
tabelas.init(conexao); 
app.use(express.static('public'));


app.listen(port, (error) => {
    if (error) {
        console.log('ERRO 404');
        return;
    }
    console.log("Server is running on http://localhost:" + port);
});
