(function () {
'use strict';

/**
 * app module contains all the other modules in the application
 * There is no 3rd party odule injected at this level so that the application will be cleaner
 */
angular.module('app', ['app.core','app.state']);

})();




