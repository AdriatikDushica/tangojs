var Router = require('./libs/http/Router');

Router.group({ prefix: '/api' }, function() {
	
	Router.get('/users', function() {
		return 'users here...';
	});

});

console.log(Router.run('get', '/api/users'));