'use strict';

/**
 * @ngdoc service
 * @name coursExoApp.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the coursExoApp.
 */
angular.module('coursExoApp')
  .factory('serviceAjax', function ($http) {
    return{
        popular: function(page){
            return $http.get("http://localhost:3000/popular?page=" + page);
        }
    }
  });
