const client = require('../config/conexao');
const moment = require('moment');

module.exports = {
    listarFilmes,
    criarFilme,
    excluirFilme,
    editarFilme
}

function listarFilmes(callback){
    client.query('select fil_codigo, fil_nome, fil_dtProducao, fil_estudio, fil_genero, fil_duracao from Filme', callback);
}

function criarFilme(dados, callback){
    const data = moment(dados.fil_dtProducao, 'DD/MM/YYYY').toDate();
    dados.fil_dtProducao = data;
    client.query('insert into Filme set ?', dados, callback);
}



function excluirFilme(fil_codigo, callback){
    client.query('delete from Filme where fil_codigo = ?', fil_codigo, callback);
}

function editarFilme(fil_codigo, dados, callback) {
    let date = moment(dados.fil_dtProducao,  "DD/MM/YYYY").format('YYYY-MM-DD');
    dados.fil_dtProducao = date;

    let query = "UPDATE  Filme SET fil_nome = '" + dados.fil_nome + 
    "' , fil_dtProducao = '" + dados.fil_dtProducao + 
    "' , fil_estudio = '" + dados.fil_estudio +    
    "' , fil_genero = '" + dados.fil_genero + 
    "' , fil_duracao = '" + dados.fil_duracao + 
    "'  WHERE fil_codigo = '" + fil_codigo + "'";

    client.query(query, callback);
}