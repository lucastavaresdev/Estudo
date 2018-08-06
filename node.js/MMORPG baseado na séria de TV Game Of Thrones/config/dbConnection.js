var mongo = require('mongodb').MongoClient;
var assert = require('assert');
var dbName = 'got';
var url = 'mongodb://localhost:27017/' + dbName;


var connMongoDB = function (dados) {
	mongo.connect(url, {
		useNewUrlParser: true
	}, function (err, client) {
		assert.equal(null, err);
		console.log("Connected successfully to server");
		const db = client.db(dbName);
		query(db, dados);
		client.close();
	});
};

function query(db, dados) {
	var collection = db.collection(dados.collection);
	switch (dados.operacao) {
		case "inserir":
			collection.insertOne(dados.usuario, dados.callback);
			break;
		case "buscar":
			collection.find(dados.usuario, dados.callback);
			break;
		case "update":
			collection.update(dados.usuario, dados.callback);
			break;
		default:
			break;
	}
}
module.exports = function () {
	return connMongoDB;
};