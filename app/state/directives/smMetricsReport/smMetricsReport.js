/*
* This is the directive  for metric result detail area
*/
(function () {
    "use strict";

    angular.module('app.state').directive('smMetricsReport', function () {
        return {
            restrict: 'A',
            templateUrl: "app/state/directives/smMetricsReport/smMetricsReport.html"
        };
    });
})();
