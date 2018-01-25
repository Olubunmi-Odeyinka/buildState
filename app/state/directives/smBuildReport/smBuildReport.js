/*
* This is the directive for build result detail area
*/
(function () {
    "use strict";

    angular.module('app.state').directive('smBuildReport', function () {
        return {
            restrict: 'A',
            templateUrl: "app/state/directives/smBuildReport/smBuildReport.html"
        };
    });
})();
