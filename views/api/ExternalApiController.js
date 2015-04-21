//@TODO This works with the button for testing API results,
// but probably isn't ideal. Not sure how much we actually
// need controllers for these APIs anyway.
cfahubControllers.controller('CfaController',function($scope,CfaApiService){
      //$scope.items = CfaApiService.getHttpItems();
      $scope.getItems = function() {
        $scope.items = CfaApiService.getHttpItems();
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
      
cfahubControllers.controller('GoogleIdeasController',function($scope,GoogleIdeasApiDaoService){
      $scope.getItems = function() {
        $scope.items = GoogleIdeasApiDaoService.getHttpItems();
        //I think it should be .ideas instead of .items to avoid conflict and readability:
        //$scope.ideas = GoogleIdeasApiDaoService.getHttpItems();
      }      
});