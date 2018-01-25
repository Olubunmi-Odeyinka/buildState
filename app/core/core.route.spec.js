describe('Core Routing Spec', function () {

    var $state;
    var $rootScope;
    var $httpBackend;
    var views = {
        view404: 'app/core/404.html',
        viewHome: "app/core/home.html"
    };
  

    beforeEach(module('app'));

    beforeEach(inject(function (_$state_, _$rootScope_, _$httpBackend_) {
        $state = _$state_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;

       //Handle Broadcast caused by $httpBackend.flush in angular-ui-route
        $httpBackend.when("GET", function (url) {
            return url.indexOf("app/core/404.html") !== -1;
        }).respond('');

        $httpBackend.when("GET", function (url) {
            return url.indexOf("app/core/home.html") !== -1;
        }).respond('');
    }));

    it('should map 404 route to 404 View template', function () {
        expect($state.get('404').templateUrl).toEqual(views.view404);
    });
    it('should map Home route to Home View template', function () {
        expect($state.get('Home').templateUrl).toEqual(views.viewHome);
    });
    it('should map Default route to Home View template', function () {
        expect($state.get('Default').templateUrl).toEqual(views.viewHome);
    });


    it('Change of state to 404 navigate to load 404 template', function () {

        $state.go('404');
        $rootScope.$apply();
        
        expect($state.is('4hj4'));
        
    });

    it('Change of state to Home navigate to Home state', function () {

        $state.go('Home');
        $rootScope.$apply();
        expect($state.is('Home'));
    });


});