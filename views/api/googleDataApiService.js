/***
Data Access Object Model for fetching Google Spreadsheet api data
***/
//@TODO Feed returns XML, so replace this with Tabletop, etc.
cfahubServices.factory('GoogleProjectsApiDaoService',function($http){
    var factory = {};
    var items;
    $http({method : 'GET',url : 'https://spreadsheets.google.com/feeds/worksheets/1tnW2fTcPEQG93oebrCfvjZw4Vjtn6vkzvqyovxebKlI/public/full'})
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