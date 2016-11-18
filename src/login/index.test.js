import Angular from 'angular';
import Login from './index';

describe('Login component', () => {
    let $componentController;

    beforeEach(Angular.mock.module(Login));

    beforeEach(Angular.mock.inject($injector => {
        $componentController = $injector.get('$componentController');
    }));

    describe('controller', () => {
        it('should define the optionsLogo object', () => {
            let $ctrl = $componentController('login', {
                PRODUCTS: {
                    ACCESS: 'access logo product'
                }
            });

            expect($ctrl.optionsLogo).toEqual(jasmine.objectContaining({
                browserDetectorDisabled: true,
                onLoginRedirectTo: '/',
                offlineAvailable: false,
                product: 'access logo product'
            }));
            expect($ctrl.optionsLogo.logoSrcPath).toBeDefined();
        });
    });
});
