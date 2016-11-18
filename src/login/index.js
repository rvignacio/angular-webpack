import Angular from 'angular';
import 'angular-cookies';
import 'angular-reach-engine-services';
import 'angular-translate';
import 'levels-beyond-ui-login';
import 'levels-beyond-ui-browser-detector';

import 'levels-beyond-ui-login/css/levels-beyond-ui-login.css';

let Module = Angular.module('Login', [
    'levelsBeyond.ui.login'
]);

Module.component('login', {
    controller: function Controller(PRODUCTS) {
        this.optionsLogo = {
            logoSrcPath: require('../assets/logo-re-access.svg'),
            browserDetectorDisabled: true,
            onLoginRedirectTo: '/',
            offlineAvailable: false,
            product: PRODUCTS.ACCESS
        };
    },

    templateUrl: require('./login.html')
});

export default Module.name;
