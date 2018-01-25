/*
*   The home controller that displays the login if not logged in or a link to 
*   navigate to when application first load
*/
(function () {
    'use strict';
    angular
      .module('app.core')
      .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope'];

    function homeCtrl($scope) {
       
    };
})();