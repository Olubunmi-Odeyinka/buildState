/*
* This index page controller that display the logged on user information, our menu and also
* the container that all other page are loded through the Ui view.
*/
(function () {
    angular
    .module('app.core')
      .controller('indexCtrl', indexCtrl);
        indexCtrl.$inject = ['$scope'];

        function indexCtrl($scope) {

        };
})();
