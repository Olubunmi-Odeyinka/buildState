/*
* This module cntains all the basic things you need for a typical SPA
* these include routing, security, exception handling etc. Therefore
* can be optimized and use for future project as boiler plate for SPA
*/
(function () {
    'use strict';

    angular
        .module('app.core', [
            /* Angular modules */
            'ngAnimate',
            /* Cross-app modules */
            'blocks.diagnostics',
            'blocks.exception',
            'blocks.logger',
            'blocks.router',
            /* 3rd-party modules */
            'ui.router',
            'angular-loading-bar'
        ]);
})();
