import angular from 'angular-1.5.8/angular-1.5.8/angular.js';

import index from 'models/index.js';


var models = require("./models"); //place on top of the file
models.sequelize.sync().then(function() {
 var server = app.listen(app.get('port'), function() {
 console.log('Express server listening on port ' + server.address().port);
 });
});

var routes = require('./routes'); //place on top of the file</pre>
app.get('/todo', routes.gettodos);
app.post('/todo', routes.savetodos);


var models = require("../models"); //Obter e salvar novos dados
exports.gettodos = function(req, res) {
    models.Todo.findAll().then(function(todos){
        res.json(todos);
    });
};

exports.savetodos = function(req, res) {
    models.Todo.create({
        text: req.body.text,
        done: req.body.done
    }).then(function(todos){
        res.json(todos.dataValues);
    }).catch(function(error){
        console.log("ops: " + error);
        res.status(500).json({ error: 'error' });
    });
};
