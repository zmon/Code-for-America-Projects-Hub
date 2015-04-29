//@TODO Not sure how much we actually
// need controllers for these APIs.

cfahubControllers.controller('CfaController',function($scope, CFAProjectsService) {
      $scope.getItems = function() { 
        return CFAProjectsService.getProjects()
        .then(function(response){$scope.items = response.data.objects})
      };
});

cfahubControllers.controller('GithubController',function($scope, GithubProjectsService) {
      $scope.getItems = function() {
        $scope.items = GithubProjectsService.getHttpItems();
      };
});


/**
cfahubControllers.controller('GoogleProjectsController',function($scope, GoogleProjectsService) {
      $scope.getItems = function() {
        $scope.items = GoogleProjectsService.getApprovedProjects();
      };
});

cfahubControllers.controller('GoogleIdeasController',function($scope, GoogleProjectIdeasService) {
      $scope.getItems = function() {
        $scope.items = GoogleProjectIdeasService.getSubmittedIdeas();
      };
});
**/

cfahubControllers.controller('GoogleProjectsController',function($scope, GoogleSheetProjectService) {
      $scope.getItems = function() {
        $scope.items = GoogleSheetProjectService.getHttpItems();
      };
});


cfahubControllers.controller('GoogleIdeasController',function($scope, GoogleSheetProjectIdeaService) {
      $scope.getItems = function() {
        $scope.items = GoogleSheetProjectIdeaService.getHttpItems();
      };
});
