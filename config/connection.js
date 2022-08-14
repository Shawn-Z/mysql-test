var mysql = require('mysql');
var connection;



if(process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
	connection = mysql.createConnection({
	host: 'x71wqc4m22j8e3ql.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'fp5avzorg018oehx',
	password:'aihng1vcnnarmm1b',
	database: 'hmzekarp4zwecxx9'
	})
}


// var connection = mysql.createConnection({
// 	port: 3306,
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'guagua',
// 	database: 'clients_db'
// });




connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('Connection Sucessful! and connected as id ' + connection.threadId);
});

module.exports = connection;