function UsuariosDAO(connection) {
	this._connection = connection;
}
UsuariosDAO.prototype.inserirUsuario = function (usuario, res) {
	var dados = {
		operacao: "inserir",
		usuario: usuario,
		collection: "usuarios",
		callback: function (err, result) {
			console.log('ok')
		}
	};
	this._connection(dados);
};
module.exports = function () {
	return UsuariosDAO;
};