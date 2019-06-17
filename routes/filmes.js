const filmeController = require('../controllers/filme');

app.get('/filme/listarFilmes', filmeController.listarFilmes);
app.get('/filme/novoFilme', filmeController.novoFilme);
app.delete('/filme/excluir/:fil_codigo',filmeController.excluirFilme);
app.post('/filme/criar', filmeController.criarFilme);
app.put('/filme/editar/:fil_codigo', filmeController.editarFilme);

