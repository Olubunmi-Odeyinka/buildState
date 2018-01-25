/*
 * These are the specs for the State Routing 
 */
describe('State Routing Spec', function () {

    var $state;
    var $rootScope;
    var $httpBackend;
    var views = {
        viewState: 'app/state/state.html',
        viewHome: "app/core/home.html"
    };
  

    beforeEach(module('app'));

    beforeEach(inject(function (_$state_, _$rootScope_, _$httpBackend_) {
        $state = _$state_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;

       //Handle Broadcast caused by $httpBackend.flush in angular-ui-route
        $httpBackend.when("GET", function (url) {
            return url.indexOf(views.viewState) !== -1;
        }).respond('');

        $httpBackend.when("GET", function (url) {
            return url.indexOf(views.viewHome) !== -1;
        }).respond('');
    }));

    it('should map State route to State View template', function () {
        expect($state.get('state').templateUrl).toEqual(views.viewState);
    });
   

    it('Change of state to state navigate to state state', function () {

        $state.go('state');
        $rootScope.$apply();
        expect($state.is('state'));
    });  

});