/*
 * These are the specs for the State controller 
 */
describe('State Controller Spec', function () {

    var $controller;
    var $q;
    var $rootScope;
    var $scope;
    var stateDataService;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_, _stateDataService_, _$q_, _$rootScope_) {
        $controller = _$controller_;
        $scope = {};
        $q = _$q_;
        $rootScope = _$rootScope_;
        stateDataService = _stateDataService_;
    }));

    it('A call to getData function of the state controller should call loadStates of the stateDataService', function () {

        spyOn(stateDataService, 'loadStates');

        $controller('stateCtrl', { $scope: $scope });

        $scope.getData();

        expect(stateDataService.loadStates).toHaveBeenCalledWith();
    });


    it('A call to openDetails function of the state controller should the passed item id as the selected item id', function () {

        var sampleRowData = {
            build: 'Tenrox-R1_1235',
            state: 'Pending',
            type: 'Build'
        }

        $controller('stateCtrl', { $scope: $scope });

        //set the select as sampleRowData
        $scope.openDetails(sampleRowData);

        expect(sampleRowData.build).toEqual($scope.activeViewID);
      
    });
});