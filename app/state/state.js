/*
 * This is the state controller that manages things display in the state page
 **/
(function () {

    angular
    .module('app.state')
    .controller('stateCtrl', stateCtrl);

    stateCtrl.$inject = ['$scope', 'stateDataService'];

    function stateCtrl($scope, stateDataService) {

            $scope.runItems = [];
            $scope.activeViewID = '';
            
            //function that load the data this when we get to the state page
            $scope.getData = function () {
                $scope.runItems = stateDataService.loadStates();
            };

            //called on selection of a row to set the active row in the controller
            $scope.openDetails = function (item) {
                if (item.changelist) {
                    $scope.activeViewID = item.changelist;
                }
                if (item.build) {
                    $scope.activeViewID = item.build;
                }
            };

            //load Data
            $scope.getData();
        }
})();
