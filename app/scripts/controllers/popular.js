'use strict';

/**
 * @ngdoc function
 * @name coursExoApp.controller:PopularCtrl
 * @description
 * # PopularCtrl
 * Controller of the coursExoApp
 */
angular.module('coursExoApp')
  .controller('PopularCtrl', function ($scope, serviceAjax) {
        $scope.currentPage = 1;
        $scope.totalPages = 0;
        $scope.loading = true;
        $scope.orderByPredicate = "title";
        $scope.orderByReverse = false;

        $scope.loadMovies = function(){
            $scope.loading = true;
            serviceAjax.popular($scope.currentPage).success(function(data){
                $scope.loading = false;
                $scope.movies = data.results;
                $scope.totalPages = data.total_pages;
            });
        };

        $scope.pageChanged = function(){
            $scope.loadMovies();
        };

        $scope.clickPredicateName = function(){
            $scope.orderByReverse = !$scope.orderByReverse;
            $scope.orderByPredicate = 'title';
        }

        $scope.clickPredicateRate = function(){
            $scope.orderByReverse = !$scope.orderByReverse;
            $scope.orderByPredicate = 'vote_average';
        }

        $scope.loadMovies();
  });
