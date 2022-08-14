/*
Here is where you setup a model for how to interface with the database.
*/

var linksOrm = require('../config/linksOrm.js');

var linksModel = {
	all: function (cb) {     
		linksOrm.all('links', function (res) {
			cb(res);
		});
	},
	// cols and vals are arrays
	create: function (column1,column2, values, id, cb) {
		linksOrm.create('links',column1, column2,values, id,function (res) {
			cb(res);
		});
	},
	update: function (column, newValue, condition, cb) {
		linksOrm.update('links', column, newValue, condition, function (res) {
			cb(res);
		});
	},
	delete: function (condition, cb) {
		linksOrm.delete('links',condition, function (res) {
			cb(res);
		});
	}
};


module.exports = linksModel;




