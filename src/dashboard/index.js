import Angular from 'angular';

let Module = Angular.module('Dashboard', []);

Module.component('dashboard', {
    controller: function Controller() {
        this.message = 'Welcome to our dashboard!';
    },

    templateUrl: require('./dashboard.html')
});

export default Module.name;
