'use strict';

describe('Service: serviceAjax', function () {

    // load the service's module
    beforeEach(module('coursExoApp'));

    // instantiate service
    var serviceAjax, httpBackend;
    beforeEach(inject(function (_serviceAjax_, _$httpBackend_) {
        serviceAjax = _serviceAjax_;
        httpBackend = _$httpBackend_;
    }));

    it('should make a request to the right URL when callling popular function', function () {
        serviceAjax.popular(1);

        httpBackend.expectGET('http://localhost:3000/popular?page=1').respond({});

        httpBackend.flush();

    });

    it('should make a request to the right URL when callling search function', function () {
        serviceAjax.search("test", 1);

        httpBackend.expectGET('http://localhost:3000/search?q=test&page=1').respond({});

        httpBackend.flush();

    });

    it('should make a request to the right URL when callling info function', function () {
        serviceAjax.info(23401);

        httpBackend.expectGET('http://localhost:3000/info/23401').respond({});

        httpBackend.flush();

    });

});
