const client = require('../config/conexao');


module.exports = {
    listarPaises,
    buscarPais,
    excluirPais,
    criarPais,
    editarPais
}

function listarPaises(callback){
    client.query('select pais_codigo, pais_nome, pais_capital, pais_hemisferio from Pais', callback);
}

//Não faça isso na vida real
function buscarPais(callback){
    client.query('select * from Pais order by pais_nome', callback);
}

function excluirPais(pais_codigo, callback){
    client.query('delete from Pais where pais_codigo = ?', pais_codigo, callback);
}

function criarPais(dados, callback){
    client.query('insert into Pais set ?', dados, callback);
}

function editarPais(pais_codigo, dados, callback) {
    let query = "UPDATE  Pais SET pais_nome = '" + dados.pais_nome + 
    "' , pais_capital = '" + dados.pais_capital +
    "' , pais_hemisferio = '" + dados.pais_hemisferio + 
    "'  WHERE pais_codigo= '" + pais_codigo + "'";

    client.query(query, callback);
}