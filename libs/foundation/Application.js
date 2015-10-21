var http = require('http');
var Router = require('../http/Router');

var Application = function() {

    var server = null;

    this.run = function() {
        server = http.createServer(function(request, response) {
            Router.handle(request, response);
        }).listen(8080);
    }

}

module.exports = new Application;