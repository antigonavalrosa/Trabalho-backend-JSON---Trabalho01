const produtoModel = require('../model/produtoModel');

function getProdutos(req, res) {
    const lista = produtoModel.listarTodos();
    res.json(lista);
}

module.exports = {
    getProdutos
};
