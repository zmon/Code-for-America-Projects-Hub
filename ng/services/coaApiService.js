/***
GithubApiDaoService is a Data Access Object Model for fetching Github api data
***/
cfahubServices.factory('CoaApiService',function($http){
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