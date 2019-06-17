const client = require('../models/filmeModels.js');
const moment = require('moment');

module.exports = {
    index,
    listarFilmes,
    novoFilme,
    criarFilme,
    excluirFilme,
    editarFilme
}

function index(req, res){
    res.render('filme/frm_filmeListar.ejs', {title: 'Filmes'});

}

function listarFilmes(req, res) {
    client.listarFilmes(function (err, result) {
        console.log('Listar Filmes');

        if (err) {
            throw err;
        } else {
                res.render('filme/frm_filmeListar.ejs', {
                    title: 'Listar Filmes',
                    filmes: result,
                    moment: moment
                });

            
        }

    })
}

function novoFilme(req, res) {
    var dados = [{
        fil_codigo: "",
        fil_nome: "",
        fil_dtProducao: "",
        fil_estudio: "",
        fil_genero: "",
        fil_duracao: "",
    }];
}

function criarFilme(req, res){
    client.criarFilme(req.body, function(err, result){
        if (err){
            throw err;
        } else{
            res.status(200).send('sucesso');
        }
    })
}

function excluirFilme(req, res){
    client.excluirFilme(req.params.fil_codigo, function(err, result){
        if (err){
            throw err;
        } else{
            res.status(200).send('sucesso');
        }
    })
}

function editarFilme(req, res) {
    client.editarFilme(req.params.fil_codigo, req.body, function(err, result) {
        if (err) {
            throw err;
        } else {
            res.status(201).send("sucesso");
        }
    })
}