'use strict';

/**
 * @ngdoc overview
 * @name coursExoApp
 * @description
 * # coursExoApp
 *
 * Main module of the application.
 */
angular
  .module('coursExoApp', [
    'ngRoute', 'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/popular', {
        templateUrl: 'views/popular.html',
        controller: 'PopularCtrl'
      })
      .otherwise({
        redirectTo: '/popular'
      });
  });
