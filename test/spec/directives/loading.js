'use strict';

describe('Directive: loading', function () {

  // load the directive's module
  beforeEach(module('coursExoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<loading></loading>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the loading directive');
  }));
});
