'use strict';

describe('Directive: loading', function () {

    // load the directive's module
    beforeEach(module('coursExoApp'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should display the container with the movies when the $scope.loading attribute is false', inject(function ($compile) {
        scope.loading = false;
        element = angular.element('<div loading="loading"></div>');
        element = $compile(element)(scope);
        scope.$digest();

        var loaderContainer = angular.element(element.find('div')[0]);
        expect(loaderContainer.hasClass('ng-hide')).toBe(true);
    }));

    it('should display the container with the movies when the $scope.loading attribute is true', inject(function ($compile) {
        scope.loading = true;
        element = angular.element('<div loading="loading"></div>');
        element = $compile(element)(scope);
        scope.$digest();

        var loaderContainer = angular.element(element.find('div')[0]);
        expect(loaderContainer.hasClass('ng-hide')).toBe(false);
    }));
});
