const express = require('express');
const produtoController = require('../controller/produtoController');

const app = express();
const PORT = 3366;

app.get('/produtos', produtoController.getProdutos);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
