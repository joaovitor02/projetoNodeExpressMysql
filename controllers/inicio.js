module.exports = {
    index
}

function index(req, res){
    res.render('inicio/index.ejs', {title: 'Filmes'});

}