'use strict';

/**
 * @ngdoc function
 * @name coursExoApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the coursExoApp
 */
angular.module('coursExoApp')
    .controller('HeaderCtrl', function ($scope, $location) {
        $scope.query = ""
        $scope.searchAction = function(){
            $location.path("/search/" + $scope.query);
        }
    });