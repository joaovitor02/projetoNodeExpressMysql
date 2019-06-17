const atorController = require('../controllers/ator');

app.get('/ator/menuAtor', atorController.index);
app.get('/ator/listarAtor', atorController.listarAtores);
app.delete('/ator/excluir/:atr_codigo',atorController.excluirAtor);
app.post('/ator/criar', atorController.criarAtor);
app.put('/ator/editar/:atr_codigo', atorController.editarAtor);



