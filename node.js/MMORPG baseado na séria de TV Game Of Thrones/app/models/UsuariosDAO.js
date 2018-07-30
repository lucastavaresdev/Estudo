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


UsuariosDAO.prototype.autenticar = function (usuario, req, res) {
	var dados = {
		operacao: "buscar",
		usuario: usuario,
		collection: "usuarios",
		callback: function (err, result) {
			result.toArray(function (err, result) {
				if (result[0] != undefined) {
					req.session.autorizado = true;
				}

				if (req.session.autorizado) {
					res.send('usuario encontrado')
				} else {
					res.send('usuario não encontrado')
				}

			})
		}
	}

	this._connection(dados);
}


module.exports = function () {
	return UsuariosDAO;
};


