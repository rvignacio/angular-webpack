import Angular from 'angular';
import 'levels-beyond-ui-login';


let Module = Angular.module('Dashboard', ['reachEngine.authentication']);

Module.component('dashboard', {
    controller: function Controller($location, loginService) {
        if (!loginService.isAuthenticated()) {$location.url('/login'); return;}

        this.message = 'Welcome to our dashboard!';
        this.logout = function logout() {
        	loginService.logout().finally(() => {
        		$location.url('/login');
        	});
        };
    },

    templateUrl: require('./dashboard.html')
});

export default Module.name;
