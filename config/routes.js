exports.routes = function (map) {
    map.get('/','tasks#index');
    map.resources('tasks');



    // Generic routes. Add all your routes below this line
    // feel free to remove generic routes
    map.all(':controller/:action');
    map.all(':controller/:action/:id');
};
