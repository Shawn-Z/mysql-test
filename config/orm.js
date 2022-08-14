
var connection = require('../config/connection.js');


function objToSql(ob) {
	var arr = [];
	for (var key in ob) {
	  if (ob.hasOwnProperty(key)) {
		arr.push(key + '=' + "'" + ob[key] +"'");
	  }
	}
	return arr.toString();
}

var orm = {
	all: function (table, cb) {
		var queryString = 'SELECT * FROM ' + table + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	create: function (table,column,values,cb) {
		var columnString = column.toString();
		var queryString = 'INSERT INTO ' + table + ' (' + columnString + ') ' + 'VALUES(' + "'" + values + "'" + ');'

		connection.query(queryString, values, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	update:function(table, objColVals, condition, callback) {

		var queryString = 'UPDATE ' + table;

		queryString = queryString + ' SET ';
		queryString = queryString + objToSql(objColVals);
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			callback(result);
		});
	},
	


	delete: function (table, condition, cb) {
		var queryString = 'DELETE FROM ' + table;
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};


module.exports = orm;
