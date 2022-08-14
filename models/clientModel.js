/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var clientModel = {
	all: function (cb) {     
		orm.all('clients', function (res) {
			cb(res);
		});
	},
	// cols and vals are arrays
	create: function (column, values, cb) {
		orm.create('clients',column,values, function (res) {
			cb(res);
		});
	},
	update: function (column, newValue, condition, cb) {
		orm.update('clients', column, newValue, condition, function (res) {
			cb(res);
		});
	},
	delete: function (condition, cb) {
		orm.delete('clients',condition, function (res) {
			cb(res);
		});
	}
};


module.exports = clientModel;




