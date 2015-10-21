var Router = require('./libs/http/Router');
var Application = require('./libs/foundation/Application');

Router.get('/', function(request, response) {
    return '<html><body>ciao <b>mondo</b></body></html>';
});

Router.get('/users', function(request, response) {
    return [
        { id: 1, firstname: 'Adriatik', lastname: 'Dushica' },
        { id: 1, firstname: 'Ard', lastname: 'Dushica' }
    ];
});

Router.get('/users/1/show', function(request, response) {
    return { id: 1, firstname: 'Adriatik', lastname: 'Dushica' }
});

Application.run();