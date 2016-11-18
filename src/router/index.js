import Angular from 'angular';
import 'angular-route';
import Dashboard from '../dashboard';
import Login from '../login';


let Module = Angular.module('Router', [
    'ngRoute',
    Dashboard,
    Login
]);

Module.config(($locationProvider, $routeProvider) => {
    // Enable HTML5 history mode.
    $locationProvider.html5Mode({
        enabled: true
    });

    $routeProvider.when('/', {
        template: '<dashboard/>'
    });

    $routeProvider.when('/login', {
        template: '<login/>'
    });

    $routeProvider.otherwise('/');

    return;
});

export default Module.name;

