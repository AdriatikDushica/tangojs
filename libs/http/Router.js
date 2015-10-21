var Router = function() {

    var stack = [];

    var routes = {
        'get': {},
        'post': {},
        'put': {},
        'delete': {}
    }

    /**
     * Define a new GET route
     */
    this.get = function(url, fnc) {
        routes['get'][ stack.join('') + url ] = fnc;
    }

    /**
     * Define a new POST route
     */
    this.post = function(url, fnc) {
        routes['post'][ stack.join('') + url ] = fnc;
    }

    /*
     * Define a new PUT route
     */
    this.put = function(url, fnc) {
        routes['put'][ stack.join('') + url ] = fnc;
    }

    /*
     * Define a new DELETE route
     */
    this.delete = function(url, fnc) {
        routes['delete'][ stack.join('') + url ] = fnc;
    }

    /*
     * Define a group
     */
    this.group = function(params, fnc) {
        stack.push(params.prefix);
        fnc();
        stack.pop();
    }

    /*
     * Returns the content of a route
     */
    this.run = function(method, url) {
        return routes[method][url]();
    }

    /*
     * Handle the request and the response
     */
    this.handle = function(request, response) {
        
    }

}

module.exports = new Router;