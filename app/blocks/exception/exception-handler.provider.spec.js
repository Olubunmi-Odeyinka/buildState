describe('Block exception Spec', function () {

    var exceptionHandler;
    var $rootScope;
    var $httpBackend;
    var $exceptionHandler;
    var mocks = {
        errorMessage: 'fake error',
        prefix: '[TEST]: '
    };
 

    beforeEach(module('app.core'));

    beforeEach(inject(function (_$exceptionHandler_, _$rootScope_, _$httpBackend_, _exceptionHandler_) {
        $exceptionHandler = _$exceptionHandler_;
        exceptionHandler = _exceptionHandler_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;
        
        //Handle Broadcast caused by $httpBackend.flush in angular-ui-routte
        $httpBackend.when("GET", function (url) {
            return url.indexOf("app/core/home.html") !== -1;
        }).respond('');
    }));

    describe('$exceptionHandler', function () {
        it('should have a dummy test', inject(function () {
            expect(true).toEqual(true);
        }));

        it('should be defined', inject(function ($exceptionHandler) {
            expect($exceptionHandler).toBeDefined;
        }));

        it('should have configuration', inject(function ($exceptionHandler) {
            expect($exceptionHandler.config).toBeDefined;
        }));

        describe('with appErrorPrefix', function () {
            beforeEach(function () {
                exceptionHandler.config = mocks.prefix;
            });

            it('should have exceptionHandlerProvider defined', inject(function () {
                expect(exceptionHandler).toBeDefined;
            }));

            it('should have appErrorPrefix defined', inject(function () {
                expect(exceptionHandler.config).toBeDefined;
            }));

            it('should have appErrorPrefix set properly', inject(function () {
                expect(exceptionHandler.config)
                    .toEqual(mocks.prefix);
            }));

            it('should throw an error when forced', inject(function () {
                expect(functionThatWillThrow).toThrow();
            }));

            it('manual error is handled by decorator', function () {
                var exception;
                exceptionHandler.configure = mocks.prefix;
                try {
                    $rootScope.$apply(functionThatWillThrow);
                }
                catch (ex) {
                    exception = ex;
                    expect(ex.message).toEqual(mocks.errorMessage);
                }
            });
        });
    });

    function functionThatWillThrow() {
        throw new Error(mocks.errorMessage);
    }

});
