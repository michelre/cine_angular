'use strict';

/**
 * @ngdoc function
 * @name coursExoApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the coursExoApp
 */
angular.module('coursExoApp')
  .controller('InfoCtrl', function ($scope, $routeParams, serviceAjax) {
        var id = $routeParams.id;
        $scope.loading = true;
        serviceAjax.info(id).success(function(data){
            $scope.loading = false;
            $scope.movie = data;
        })
  });
