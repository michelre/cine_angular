'use strict';

describe('Service: serviceAjax', function () {

    // load the service's module
    beforeEach(module('coursExoApp'));

    // instantiate service
    var serviceAjax, httpBackend, popularRequest;
    beforeEach(inject(function (_serviceAjax_, _$httpBackend_) {
        serviceAjax = _serviceAjax_;
        httpBackend = _$httpBackend_;

        popularRequest = httpBackend.when('GET', 'http://localhost:3000/popular?page=1').respond({});
    }));

    it('should make a request to the right URL when callling popular function', function () {
        serviceAjax.popular(1);
        httpBackend.flush();
        httpBackend.expectGET('http://localhost:3000/popular?page=1');
    });

});
