const client = require('../models/paisModels.js');

module.exports = {
    index,
    listarPaises,
    novoPais,
    criarPais,
    excluirPais,
    editarPais
}

function index(req, res){
    res.render('pais/frm_paisListar.ejs', {title: 'Pais'});

}

function listarPaises(req, res) {
    client.listarPaises(function (err, result) {
        console.log('Listar Paises');

        if (err) {
            throw err;
        } else {
                res.render('pais/frm_paisListar.ejs', {
                    title: 'Listar Paises',
                    paises: result
                });

            
        }

    })
}

function novoPais(req, res) {
    var dados = [{
        pais_codigo: "",
        pais_nome: "",
        pais_capital: "",
        pais_hemisferio: "",
    }];
}

function criarPais(req, res){
    client.criarPais(req.body, function(err, result){
        if (err){
            throw err;
        } else{
            res.status(200).send('sucesso');
        }
    })
}

function excluirPais(req, res){
    client.excluirPais(req.params.pais_codigo, function(err, result){
        if (err){
            throw err;
        } else{
            res.status(200).send('sucesso');
        }
    })
}

function editarPais(req, res) {
    client.editarPais(req.params.pais_codigo, req.body, function(err, result) {
        if (err) {
            throw err;
        } else {
            res.status(201).send("sucesso");
        }
    })
}