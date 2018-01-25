/*
 * This manage the routing of the state module
 */
(function () {
    'use strict';

    angular
        .module('app.state')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    //configure the state for the video module and return the states
    //To be executed during creation of the app.video module
    function getStates() {
        return [
            {
                state: 'state',
                config: {
                    url: '/state',
                    templateUrl: 'app/state/state.html',
                    title: 'State Machine'
                }
            }
        ];
    }
})();
