'use strict';

/**
 * @ngdoc function
 * @name coursExoApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the coursExoApp
 */
angular.module('coursExoApp')
    .controller('SearchCtrl', function ($scope, $routeParams, serviceAjax) {
        $scope.query = $routeParams.query;
        $scope.currentPage = 1;
        $scope.totalPages = 0;

        var loadMovies = function(){
            serviceAjax.search($scope.query, $scope.currentPage).success(function(data){
                $scope.movies = data.results;
                $scope.totalPages = data.total_pages;
            });
        };

        $scope.pageChanged = function(){
            loadMovies();
        };

        loadMovies();
    });

