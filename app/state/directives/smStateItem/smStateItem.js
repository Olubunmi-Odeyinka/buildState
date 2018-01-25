/*
* This is the directive for each line item of state
*/
(function () {
    "use strict";

    angular.module('app.state').directive('smStateItem', function () {
        return {
            restrict: 'A',
            scope: true,
            templateUrl: "app/state/directives/smStateItem/smStateItem.html"
        };
    });
})();
