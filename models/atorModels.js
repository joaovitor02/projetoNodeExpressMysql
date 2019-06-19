const client = require('../config/conexao');
const moment = require('moment');

module.exports = {
    listarAtores,
    buscarFilme,
    excluirAtor,
    criarAtor,
    editarAtor
}

function listarAtores(callback){
    client.query('select A.atr_codigo, A.atr_nome, A.atr_codigo_filme, A.atr_nomeArtistico, A.atr_nascimento, F.fil_nome from Ator A left join Filme F on A.atr_codigo_filme = F.fil_codigo', callback);
}

//Não faça isso na vida real
function buscarFilme(callback){
    client.query('select * from Filme order by fil_nome', callback);
}

function excluirAtor(atr_codigo, callback){
    client.query('delete from Ator where atr_codigo = ?', atr_codigo, callback);
}

function criarAtor(dados, callback){
    const data = moment(dados.atr_nascimento, "DD/MM/YYYY").toDate();
    dados.atr_nascimento = data;
    client.query('insert into Ator set ?', dados, callback);
}

function editarAtor(atr_codigo, dados, callback) {
    let date = moment(dados.atr_nascimento,  "DD/MM/YYYY").format('YYYY-MM-DD');
    dados.atr_nascimento = date;

    console.log(dados)

    let query = "UPDATE  Ator SET atr_nome = '" + dados.atr_nome + 
    "' , atr_nomeArtistico = '" + dados.atr_nomeArtistico +
    "' , atr_nascimento = '" + dados.atr_nascimento + 
    "' , atr_codigo_filme = '" + dados.atr_codigo_filme + 
    "'  WHERE atr_codigo = '" + atr_codigo + "'";

    client.query(query, callback);
}