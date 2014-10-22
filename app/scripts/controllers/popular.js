'use strict';

/**
 * @ngdoc function
 * @name coursExoApp.controller:PopularCtrl
 * @description
 * # PopularCtrl
 * Controller of the coursExoApp
 */
angular.module('coursExoApp')
  .controller('PopularCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
