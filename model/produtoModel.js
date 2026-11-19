const produtos = require('./produtos.json');

function listarTodos() {
    return produtos;
}

module.exports = {
    listarTodos
};
