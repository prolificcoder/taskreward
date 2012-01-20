app.configure('development', function () {
    app.disable('view cache');
    app.enable('model cache');
    app.disable('eval cache');
    app.enable('log actions');
    app.use(require('express').errorHandler({ dumpExceptions: true, showStack: true }));
});

