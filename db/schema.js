define('User', function () {
    property('email', String, { index: true });
    property('password', String);
    property('activated', Boolean, {default: false});
});

var Task = describe('Task', function () {
    property('title', String);
    property('owner', String);
    property('reward', "integer");
    property('date', Number);
});
