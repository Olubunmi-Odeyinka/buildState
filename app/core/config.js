/*
*   This set the configuration for the app.core module which inturn influence
*   all the functionalities exposed by the app.core module
*/
(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(toastrConfig);

    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    var config = {
        appErrorPrefix: '[VideoPortal Error] ', //Configure the exceptionHandler decorator
        appTitle: 'Video Portal'
    };

    core.value('config', config);

    core.config(configure);

    configure.$inject = ['$compileProvider', '$logProvider',
         'diagnostics', 'exceptionHandlerProvider', 'routerHelperProvider'];
    /* @ngInject */
    function configure ($compileProvider, $logProvider,
         diagnostics, exceptionHandlerProvider, routerHelperProvider) {

        diagnostics.enable = false;

        $compileProvider.debugInfoEnabled(false);

        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
    }
})();
