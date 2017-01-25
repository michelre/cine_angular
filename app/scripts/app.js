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
        templateUrl: 'views/movies.html',
        controller: 'PopularCtrl'
      })
      .when('/search/:query', {
        templateUrl: 'views/movies.html',
        controller: 'SearchCtrl'
      })
      .when('/info/:id', {
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl'
      })
      .otherwise({
        redirectTo: '/popular'
      });
  });
