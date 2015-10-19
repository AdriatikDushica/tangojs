var Router = function() {

    var stack = [];

    var routes = {
        'get': {},
        'post': {},
        'put': {},
        'delete': {}
    }

    this.get = function(url, fnc) {
    	routes['get'][ stack.join('') + url ] = fnc;
    }

    this.post = function(url, fnc) {
    	routes['post'][ stack.join('') + url ] = fnc;
    }

    this.put = function(url, fnc) {
    	routes['put'][ stack.join('') + url ] = fnc;
    }

    this.delete = function(url, fnc) {
    	routes['delete'][ stack.join('') + url ] = fnc;
    }

    this.group = function(params, fnc) {
    	stack.push(params.prefix);
    	fnc();
    	stack.pop();
    }

    this.run = function(method, url) {
    	return routes[method][url]();
    }

    this.handle = function(request, response) {
    	
    }

}

module.exports = new Router;