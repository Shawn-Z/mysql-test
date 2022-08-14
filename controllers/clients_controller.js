
var express = require('express');
var router = express.Router();
var clients = require('../models/clientModel.js');
var sections = require('../models/sectionsModel.js');
var links = require('../models/linkModel.js');


router.get('/', function (req, res) {
	res.redirect('/clients');
});


router.get('/clients', function (req, res) {
	let hbsObject = {};
	links.all(function (data) {
		hbsObject.links = data;
	});

	sections.all(function (data) {
		hbsObject.sections = data;
	});


	clients.all(function (data) {
		hbsObject.clients = data;
		res.render('index', hbsObject);
	});
});


router.post('/clients/create', function (req, res) {
	clients.create('client_name', [req.body.name], function () {
		res.redirect('/clients');
	});
});


router.put('/clients/update/:clientId', function (req, res) {
	var condition = 'clientId = ' + req.params.clientId;

	clients.update({client_name: req.body.clientName}, condition, function() {
		res.redirect('/clients');
	});
});


router.delete('/clients/delete/:clientId', function (req, res) {
	var condition = 'clientId = ' + req.params.clientId; 
	clients.delete(condition, function () {
		res.redirect('/clients');
	});
});


router.post('/sections/create', function (req, res) {

	sections.create('sectionValue','clientId', {sectionValue: req.body.sectionValue}, {clientId: req.body.clientId}, function () {
		res.redirect('/clients');
	});
});


router.put('/sections/update/:sectionId', function (req, res) {
	var condition = 'sectionId = ' + req.params.sectionId;

	sections.update({sectionValue: req.body.sectionValue}, condition, function() {
		res.redirect('/clients');
	});
});


router.delete('/sections/delete/:sectionId', function (req, res) {
	var condition = 'sectionId = ' + req.params.sectionId; 
	sections.delete(condition, function () {
		res.redirect('/clients');
	});
});


router.post('/links/create', function (req, res) {
	links.create('linkName','sectionId', {linkName: req.body.linkName}, {sectionId: req.body.sectionId}, function () {
		res.redirect('/clients');
	});
});


router.put('/links/update/:linkId', function (req, res) {
	var condition = 'linkId = ' + req.params.linkId;
	links.update({linkName: req.body.linkName}, condition, function() {
		res.redirect('/clients');
	});
});


router.delete('/links/delete/:linkId', function (req, res) {
	var condition = 'linkId = ' + req.params.linkId; 
	links.delete(condition, function () {
		res.redirect('/clients');
	});
});


module.exports = router;
