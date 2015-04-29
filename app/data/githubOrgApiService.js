/***
GithubProjectsService is a Data Access Object Model for fetching Github api data
***/
cfahubServices.factory('GithubProjectsService',function($http){
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
    };
    return factory;
});


/***
The model for the completed project from google sheet
***/
cfahubServices.factory('GoogleSheetProjectService',function($http){
    var factory = {};
    var items;
    $http({method : 'GET',url : 'https://spreadsheets.google.com/feeds/worksheets/1tnW2fTcPEQG93oebrCfvjZw4Vjtn6vkzvqyovxebKlI/public/full?alt=json'})
       .success(function(data, status) {
           items = data;
        })
       .error(function(data, status) {
           alert("HTTP Error");
       });
    factory.getHttpItems = function(){
        return items;
    };
    return factory;
});


/***
The model for the uncompleted project from google sheet
***/
cfahubServices.factory('GoogleSheetProjectIdeaService',function($http){
    var factory = {};
    var items;
    $http({method : 'GET',url : 'https://spreadsheets.google.com/feeds/list/1PGM2P9o0bkJ_xCkoH2ps_Dp5xnBDrPxmIB-jnJWAwhE/1/public/values?alt=json'})
       .success(function(data, status) {
           items = data;
        })
       .error(function(data, status) {
           alert("HTTP Error");
       });
    factory.getHttpItems = function(){
        return items;
    };
    return factory;
});
