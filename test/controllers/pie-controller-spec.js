describe("Should be true", function () {
    it("fsdfsd", function () {
        expect(true).toBeTruthy();
    })
})

describe('PieController', function () {
    var $rootScope, $scope, controller;

    beforeEach(function () {
        module('pie');

        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')('PieController', {$scope: $scope});
        });

    });
    describe('Action Handlers', function () {

        describe('eatSlice', function () {
            it('it should decrement slices', function () {
                expect($scope.slices).toEqual(8);
                $scope.eatSlice();
                expect($scope.slices).toEqual(7);
            });
            it('should do nothing when slices is 0', function () {
                $scope.slices = 0;
                $scope.eatSlice();
                expect($scope.slices).toEqual(0);

            });
        });

        describe('requestFlavor', function () {
            it('Should set $scope.lastRequestedFlavor to passed in argument', function () {
                var flavor = 'cherry';
                controller.requestFlavor(flavor);
                expect($scope.lastRequestedFlavor).toEqual(flavor);

            });
        });
    });

    //jasd
    describe('Initialization', function () {
        //jasi
        it('Should intantiate slices to 8', function () {
            expect($scope.slices).toEqual(8);

        });

        it('Should instantiate $scope.lastRequestFlavor', function () {
            expect($scope.lastRequestedFlavor).toBeUndefined();


        });
        
        
    });

});
