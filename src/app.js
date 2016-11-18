import Angular from 'angular';
import Config from './config';
import Router from './router';

import 'angular-translate';
import 'angular-cookies';
import 'angular-reach-engine-services';

import 'levels-beyond-css-defaults/dist/levels-beyond-css-defaults-dark.css';
import 'levels-beyond-default-bootstrap/css/bootstrap.css';
/**
 * Define the main application module.
 */
Angular.module('DashboardApp', [
    Config,
    Router
]).run(function setServerUrl(reachEngineServerUrl, configService) {
    configService.setReachEngineUrl(reachEngineServerUrl);
});
