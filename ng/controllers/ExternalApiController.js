cfahubControllers.controller('CoaController',function($scope,CoaApiService){
      //$scope.items = CoaApiService.getHttpItems();
      $scope.getItems = function() {
        $scope.items = CoaApiService.getHttpItems();
      }
});

cfahubControllers.controller('GithubController',function($scope,GithubApiDaoService){
      //$scope.items = GithubApiDaoService.getHttpItems();
      $scope.getItems = function() {
        $scope.items = GithubApiDaoService.getHttpItems();
      }
});

cfahubControllers.controller('GoogleProjectsController',function($scope,GoogleProjectsApiDaoService){
      //$scope.items = GoogleProjectsApiDaoService.getHttpItems();
      $scope.getItems = function() {
        $scope.items = GoogleProjectsApiDaoService.getHttpItems();
      }
});