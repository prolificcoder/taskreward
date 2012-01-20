var express    = require('express');
RedisStore = require('connect-redis')(express);

var redistogo_url= 'redis://prolificcoder:56d30157e6414cd9e33b15acfc818aa1@dogfish.redistogo.com:9386/';

var redisOpts;
if (redistogo_url) {
    var url = require('url').parse(redistogo_url);
    var redisOpts = {
        port: url.port,
        host: url.hostname,
        pass: url.auth.split(':')[1]
    };
} else {
    redisOpts = {};
}

app.configure(function(){
    var cwd = process.cwd();
    app.use(express.static(cwd + '/public', {maxAge: 86400000}));
    app.set('views', cwd + '/app/views');
    app.set('view engine', 'ejs');
    app.set('jsDirectory', '/javascripts/');
    app.set('cssDirectory', '/stylesheets/');
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.session({secret: 'secret', store: new RedisStore(redisOpts)}));    
    app.use(express.methodOverride());
    app.use(app.router);
});
