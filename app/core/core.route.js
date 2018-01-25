/*
* This manage the routing of the core module
*/
(function () {
    'use strict';

    angular
        .module('app.core')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        var otherwise = '/';
        routerHelper.configureStates(getStates(), otherwise);
    }

    function getStates() {
        return [
            {
                state: '404',
                config: {
                    url: '/404',
                    templateUrl: 'app/core/404.html',
                    title: '404'
                }
            },
            {
                state: 'Default',
                config: {
                    url: '/',
                    templateUrl: 'app/core/home.html',
                    title: 'Home'
                }
            },
            {
                state: 'Home',
                config: {
                    url: '/home',
                    templateUrl: 'app/core/home.html',
                    title: 'Home'
                }
            }

        ];
    }
})();
