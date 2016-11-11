import Angular from 'angular';
import 'angular-route';

import Dashboard from '../dashboard';

let Module = Angular.module('Router', [
    'ngRoute',

    Dashboard
]);

Module.config(($locationProvider, $routeProvider) => {
    // Enable HTML5 history mode.
    $locationProvider.html5Mode({
        enabled: true
    });

    $routeProvider.when('/', {
        template: '<dashboard/>'
    });

    return;
});

export default Module.name;
