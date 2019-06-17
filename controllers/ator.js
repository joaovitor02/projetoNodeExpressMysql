const client = require('../models/atorModels.js');
const moment = require('moment');

module.exports = {
    index,
    listarAtores,
    novoAtor,
    excluirAtor,
    criarAtor,
    editarAtor
}

function index(req, res) {
    res.render('ator/frm_atorMenu.ejs', {
        title: 'Ator'
    });
}

function listarAtores(req, res) {
    client.listarAtores(function (err, result) {
        console.log('Listar Filmes');

        if (err) {
            throw err;
        } else {
            client.buscarFilme(function(err, result_filme){
                res.render('ator/frm_atorListar.ejs', {
                    title: 'Listar Atores',
                    atores: result,
                    filmes: result_filme,
                    moment: moment
                });
            })
            
        }

    })
}




function novoAtor(req, res) {
    var dados = [{
        atr_codigo: "",
        atr_codigo_filme: "",
        atr_nome: "",
        atr_nascimento: "",
        atr_nomeArtistico: "",
        atr_dtCadastro: "",
    }];

    client.buscarFilme(function(err, result_filme) {
        if (err){
            throw err;
        } else{
            console.log(result_filme)
            res.render('ator/frm_atorCadastrar.ejs', {
                title: 'Atores',
                ator: dados,
                filmes: result_filme
            }); 
        }
    });
}

function excluirAtor(req, res){
    client.excluirAtor(req.params.atr_codigo, function(err, result){
        if (err){
            throw err;
        } else{
            res.status(200).send('sucesso');
        }
    })
}

function criarAtor(req, res){
    client.criarAtor(req.body, function(err, result){
        if (err){
            throw err;
        } else{
            res.status(200).send('sucesso');
        }
    })
}

function editarAtor(req, res) {
    client.editarAtor(req.params.atr_codigo, req.body, function(err, result) {
        if (err) {
            throw err;
        } else {
            res.status(201).send("sucesso");
        }
    })
}