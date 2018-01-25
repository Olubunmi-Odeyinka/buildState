/*
* This is the directive for unit test detail area
*/
(function () {
    "use strict";

    angular.module('app.state').directive('smUnitTestReport', function () {
        return {
            restrict: 'A',
            templateUrl: "app/state/directives/smUnitTestReport/smUnitTestReport.html"
        };
    });
})();