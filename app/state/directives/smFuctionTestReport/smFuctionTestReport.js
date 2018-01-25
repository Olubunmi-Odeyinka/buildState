/*
* This is the directive for function test detail area
*/
(function () {
    "use strict";

    angular.module('app.state').directive('smFuctionTestReport', function () {
        return {
            restrict: 'A',
            templateUrl: "app/state/directives/smFuctionTestReport/smFuctionTestReport.html"
        };
    });
})();