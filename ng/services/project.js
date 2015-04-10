//@TODO Refactor this initializer out at some point.
var cfahubServices = angular.module('cfahubServices', []);

cfahubServices.service('ProjectService', [
  function(){}
]);



/***
GithubApiDaoService is a Data Access Object Model for fetching Github api data
***/
cfahubServices.factory('GithubApiDaoService',function($http){
    var factory = {};
    var items;
    $http({method : 'GET',url : 'http://codeforamerica.org/api/organizations/Code-for-Kansas-City/projects'})
       .success(function(data, status) {
           items = data.objects;
        })
       .error(function(data, status) {
           alert("HTTP Error");
       });
    factory.getHttpItems = function(){
        return items;
    }
    return factory;
});
