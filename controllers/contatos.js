module.exports = function(app) {
    var ContatosController = {
        index: function(res, req) {
        	console.log(req.client);
            // var usuario = req.session.usuario;
            var usuario = {nome :'bruno serrao', email: 'brunosserrao@gmail.com'};
            // console.log(usuario);
            // var params = {usuario: usuario};
            // res.render('contatos/index', params);
        }
    };
    
    return ContatosController;
};