import Angular from 'angular';

let Module = Angular.module('Config', []);

Module.constant('reachEngineServerUrl', 'http://10.160.200.31:8025');

export default Module.name;
