'use strict';

describe('Controller: HeaderCtrl', function () {

    // load the controller's module
    beforeEach(module('coursExoApp'));

    var HeaderCtrl,
        scope, location;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $location) {
        scope = $rootScope.$new();
        location = $location;
        HeaderCtrl = $controller('HeaderCtrl', {
            $scope: scope,
            location: location
        });
    }));

    it('should call $location.path when calling searchAction function', function () {
        spyOn(location, 'path');
        scope.query = "test";

        scope.searchAction();

        expect(location.path).toHaveBeenCalledWith("/search/test");
    });
});
