/***
GithubApiDaoService is a Data Access Object Model for fetching Github api data
***/
cfahubServices.factory('GithubApiDaoService',function($http){
    var factory = {};
    var items;
    $http({method : 'GET',url : 'https://api.github.com/orgs/codeforkansascity/repos'})
       .success(function(data, status) {
           items = data;
        })
       .error(function(data, status) {
           alert("HTTP Error");
       });
    factory.getHttpItems = function(){
        return items;
    }
    return factory;
});
