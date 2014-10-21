'use strict';

/**
 * @ngdoc function
 * @name coursExoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coursExoApp
 */
angular.module('coursExoApp')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll, serviceAjax) {
    $scope.currentPage = 1;
    $scope.totalPages = 0;
    $scope.loading = true;
    $scope.orderByPredicate = "title";
    $scope.orderByReverse = false;

    var loadMovies = function(){
        $scope.loading = true;
        serviceAjax.popular($scope.currentPage).success(function(data){
            $scope.movies = data.results;
            $scope.totalPages = data.total_pages;
            $scope.loading = false;
        });
    };

    $scope.pageChanged = function(){
        loadMovies();
    };

    $scope.clickPredicateName = function(){
        $scope.orderByReverse = !$scope.orderByReverse;
        $scope.orderByPredicate = 'title';
    }

    $scope.clickPredicateRate = function(){
        $scope.orderByReverse = !$scope.orderByReverse;
        $scope.orderByPredicate = 'vote_average';
    }
    loadMovies();
  });
