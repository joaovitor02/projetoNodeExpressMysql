const paisController = require('../controllers/pais');

app.get('/pais/menuPais', paisController.index);
app.get('/pais/listarPaises', paisController.listarPaises);
app.get('/pais/novoPais', paisController.novoPais);
app.delete('/pais/excluir/:pais_codigo',paisController.excluirPais);
app.post('/pais/criar', paisController.criarPais);
app.put('/pais/editar/:pais_codigo', paisController.editarPais);



