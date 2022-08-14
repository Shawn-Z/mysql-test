/*
Here is where you setup a model for how to interface with the database.
*/

var sectionsOrm = require('../config/sectionsOrm.js');

var sectionsModel = {
	all: function (cb) {     
		sectionsOrm.all('sections', function (res) {
			cb(res);
		});
	},
	// cols and vals are arrays
	create: function (column1,column2, values, id, cb) {
		sectionsOrm.create('sections',column1, column2,values,id, function (res) {
			cb(res);
		});
	},
	update: function (column, newValue, condition, cb) {
		sectionsOrm.update('sections', column, newValue, condition, function (res) {
			cb(res);
		});
	},
	delete: function (condition, cb) {
		sectionsOrm.delete('sections',condition, function (res) {
			cb(res);
		});
	}
};


module.exports = sectionsModel;




