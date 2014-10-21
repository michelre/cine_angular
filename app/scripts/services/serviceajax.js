'use strict';

/**
 * @ngdoc service
 * @name coursExoApp.serviceAjax
 * @description
 * # serviceAjax
 * Service in the coursExoApp.
 */
angular.module('coursExoApp')
  .factory('serviceAjax', function serviceAjax($http) {
    return{
        search: function(query, page){
            return $http.get("http://localhost:3000/search?q=" + query + "&page=" + page);
        },
        info: function(id){
            return $http.get("http://localhost:3000/info/" + id);
        },
        similar: function(id, page){
            return $http.get("http://localhost:3000/similar/" + id + "?page=" + page);
        },
        popular: function(page){
            return $http.get("http://localhost:3000/popular?page=" + page);
        }
    }
  });
