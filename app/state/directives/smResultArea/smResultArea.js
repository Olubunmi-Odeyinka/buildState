/*
* This is the directive for result detail area
*/
(function () {
    "use strict";

    angular.module('app.state').directive('smResultArea', function () {
        return {
            restrict: 'A',
            scope: true,
            templateUrl: "app/state/directives/smResultArea/smResultArea.html"
        };
    });
})();