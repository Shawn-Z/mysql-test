
var connection = require('./connection.js');

function objTosqlKey(ob) {
	var arr = [];
	for (var key in ob) {
	  if (ob.hasOwnProperty(key)) {
		arr.push(key + '=' + "'" + ob[key] +"'");
	  }
	}
	return arr.toString();
}


function objToSql(ob) {
	var arr = [];
	for (var key in ob) {
	  if (ob.hasOwnProperty(key)) {
		arr.push("'" + ob[key] +"'");
	  }
	}
	return arr.toString();
}

function objtoId(ob) {
	var arr = [];
	for (var key in ob) {
	  if (ob.hasOwnProperty(key)) {
		arr.push(ob[key]);
	  }
	}
	return arr.toString();
}

var linkOrm = {
	all: function (table, cb) {
		var queryString = 'SELECT * FROM ' + table + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	create: function (table,column1,column2,values,id,cb) {
		// var columnString = column.toString();
		var queryString = 'INSERT INTO ' + table + ' (' + column1 +  ',' +   column2 +  ') ' + 'VALUES('  + objToSql(values) +  ',' + objtoId(id) +  ');'
		connection.query(queryString, values, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	update:function(table, objColVals, condition, callback) {
		var queryString = 'UPDATE ' + table;
		queryString = queryString + ' SET ';
		queryString = queryString + objTosqlKey(objColVals);
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



module.exports = linkOrm;
